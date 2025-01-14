const express = require('express');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});
const BUCKET_NAME = process.env.BUCKET_NAME;

// Endpoint: Generate Presigned URL for Upload
app.get('/presigned-url', (req, res) => {
    const fileName = req.query.fileName;
    const fileType = req.query.fileType;

    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Expires: 60,
        ContentType: fileType
    };

    s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ url });
    });
});

// Endpoint: List Files in S3 Bucket
app.get('/files', async (req, res) => {
    try {
        const data = await s3.listObjectsV2({ Bucket: BUCKET_NAME }).promise();
        const files = data.Contents.map(file => ({
            fileName: file.Key,
            lastModified: file.LastModified,
            size: file.Size
        }));
        res.json(files);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint: Share File via Email
app.post('/share', (req, res) => {
    const { email, fileName } = req.body;

    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Expires: 300
    };

    s3.getSignedUrl('getObject', params, async (err, url) => {
        if (err) {
            return res.status(500).send(err);
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'File Share Link',
            text: `Here is your file: ${url}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.json({ message: 'Email sent successfully!' });
        } catch (mailError) {
            res.status(500).send(mailError);
        }
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
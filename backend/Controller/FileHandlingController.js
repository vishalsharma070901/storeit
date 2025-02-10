const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS,
  },
});

const getObject = async (req, res) => {

  try {
    const key = req.params.key;
    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      ResponseContentType: "inline"
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // Set expiration time as needed
    return res.status(200).json({ url: url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to get presigned URL' });
  }
};

module.exports = { getObject };
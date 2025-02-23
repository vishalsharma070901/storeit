const { S3Client, GetObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
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

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); 
    return res.status(200).json({ url: url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to get presigned URL' });
  }
};

const listObjectsInFolder = async (req, res) => {
    try {
      const folder =  req.params.folder
      const subfolder = req.params.subfolder;
      
      const key =  `${folder}/${subfolder}/`;
  
      const command = new ListObjectsV2Command({
        Bucket: process.env.BUCKET_NAME,
        Prefix: key,
        Delimiter: "/", 
      });
  
      const response = await s3.send(command);
  
      if (!response.Contents || response.Contents.length === 0) {
        return res.status(404).json({ message: "No files found in vishal folder." });
      }
  
      
      const files = response.Contents
      return res.status(200).json(files);
  
    } catch (error) {
      console.error("Error fetching files:", error);
      res.status(500).json({ error: "Failed to list files" });
    }
  };
  
  const LisAllObjects = async (req, res) => { 
    try {
      const folder =  req.params.folder;
      const command = new ListObjectsV2Command({
        Bucket: process.env.BUCKET_NAME,
        Prefix: folder,
      });
  
      const response = await s3.send(command);
  
      if (!response.Contents || response.Contents.length === 0) {
        return res.status(404).json({ message: "No files found in vishal folder." });
      }
  
      const files = response.Contents;
      return res.status(200).json(files);
    } catch (error) {
      console.error("Error fetching files:", error);
      res.status(500).json({ error: "Failed to list files" });
    }
  };

module.exports = { getObject ,listObjectsInFolder, LisAllObjects};
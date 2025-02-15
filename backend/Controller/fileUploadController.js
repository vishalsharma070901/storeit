const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const  { getSignedUrl } =  require("@aws-sdk/s3-request-presigner");


const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS,
    },
  });

  const getFolderByFileType = (fileType) => {
    if (fileType.startsWith("image/")) {
      return "images";
    } else if (
      fileType.startsWith("application/pdf") ||
      fileType.startsWith("application/msword") || 
      fileType.startsWith("application/vnd.openxmlformats-officedocument.wordprocessingml.document") || 
      fileType.startsWith("application/vnd.ms-excel") ||
      fileType.startsWith("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") 
    ) {
      return "documents";
    } else if (
      fileType.startsWith("video/") ||
      fileType.startsWith("audio/")
    ) {
      return "media";
    } else {
      return "other";
    }
  };  

const generatePresignedUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;
    
    if (!fileName || !fileType) {
        return res.status(400).json({ error: "File name and type are required" });
      }

    const folder = getFolderByFileType(fileType);  

    const objectKey = `vishal/${folder}/${fileName}`;
    const command = new PutObjectCommand({
      Bucket:process.env.BUCKET_NAME,
      Key: objectKey, 
      ContentType: fileType,
    });

    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 900 });

    res.json({ url: presignedUrl });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { generatePresignedUrl };
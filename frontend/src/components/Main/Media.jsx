import React, { useContext } from "react";
import NormalCard from "../Reusable/NormalCard";
import { IoIosFolderOpen } from "react-icons/io";
import { FaImage, FaVideo, FaMusic } from "react-icons/fa6"; // Import FaMusic for audio icon
import myContext from "@/Context/MyContext";
import Table from "../Reusable/Table";



const dummyRows = [
  {
    Key: "documents/report1.pdf",
    LastModified: "2023-10-01T10:00:00Z",
    Size: 1234567,
  },
  {
    Key: "images/photo1.jpg",
    LastModified: "2023-09-15T14:30:00Z",
    Size: 234567,
  },
  {
    Key: "videos/video1.mp4",
    LastModified: "2023-08-20T08:45:00Z",
    Size: 3456789,
  },
  {
    Key: "documents/report2.pdf",
    LastModified: "2023-07-10T12:00:00Z",
    Size: 456789,
  },
  {
    Key: "images/photo2.jpg",
    LastModified: "2023-06-05T16:15:00Z",
    Size: 567890,
  },
  {
    Key: "documents/report1.pdf",
    LastModified: "2023-10-01T10:00:00Z",
    Size: 1234567,
  },
  {
    Key: "images/photo1.jpg",
    LastModified: "2023-09-15T14:30:00Z",
    Size: 234567,
  },
  {
    Key: "videos/video1.mp4",
    LastModified: "2023-08-20T08:45:00Z",
    Size: 3456789,
  },
  {
    Key: "documents/report2.pdf",
    LastModified: "2023-07-10T12:00:00Z",
    Size: 456789,
  },
  {
    Key: "images/photo2.jpg",
    LastModified: "2023-06-05T16:15:00Z",
    Size: 567890,
  },
  {
    Key: "documents/report1.pdf",
    LastModified: "2023-10-01T10:00:00Z",
    Size: 1234567,
  },
  {
    Key: "images/photo1.jpg",
    LastModified: "2023-09-15T14:30:00Z",
    Size: 234567,
  },
  {
    Key: "videos/video1.mp4",
    LastModified: "2023-08-20T08:45:00Z",
    Size: 3456789,
  },
  {
    Key: "documents/report2.pdf",
    LastModified: "2023-07-10T12:00:00Z",
    Size: 456789,
  },
  {
    Key: "images/photo2.jpg",
    LastModified: "2023-06-05T16:15:00Z",
    Size: 567890,
  },
  {
    Key: "images/photo2.jpg",
    LastModified: "2023-06-05T16:15:00Z",
    Size: 567890,
  },
  {
    Key: "documents/report1.pdf",
    LastModified: "2023-10-01T10:00:00Z",
    Size: 1234567,
  },
  {
    Key: "images/photo1.jpg",
    LastModified: "2023-09-15T14:30:00Z",
    Size: 234567,
  },
  {
    Key: "videos/video1.mp4",
    LastModified: "2023-08-20T08:45:00Z",
    Size: 3456789,
  },
  {
    Key: "documents/report2.pdf",
    LastModified: "2023-07-10T12:00:00Z",
    Size: 456789,
  },
  {
    Key: "images/photo2.jpg",
    LastModified: "2023-06-05T16:15:00Z",
    Size: 567890,
  },
];

const Media = () => {
  const context = useContext(myContext);
  const { media } = context;

  const getMediaIcon = (key) => {
    const extension = key.split('.').pop().toLowerCase();
    if (extension === 'mp3' || extension === 'wav' || extension === 'aac') {
      return <FaMusic />;
    } else if (extension === 'mp4' || extension === 'avi' || extension === 'mov') {
      return <FaVideo />;
    } else {
      return <IoIosFolderOpen />;
    }
  };

  return (
    <div className="">
      <div className="bg-[#56B8FF] text-white rounded-2xl p-4 mx-auto">
        Media
      </div>
        <Table
        rows={dummyRows}
        />
    </div>
  );
};

export default Media;
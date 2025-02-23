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

  const getTotalSizeInGB = () => {
    let totalSize = 0;
    media.forEach((item) => {
      totalSize += item.Size;
    });

    return (totalSize / (1024 * 1024 * 1024)).toFixed(2); // Convert to GB & keep 2 decimal places
  };

  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex items-end gap-2 pl-3">
        <h1 className="text-slate-500 sm:text-5xl text-3xl font-extrabold">Media</h1>
        <span className="text-slate-500 sm:text-lg text-md font-bold">
          {getTotalSizeInGB()}GB/ 20GB
        </span>
      </div>
      <Table rows={media} />
    </div>
  );
};

export default Media;

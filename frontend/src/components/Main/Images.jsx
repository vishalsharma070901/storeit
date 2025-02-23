import React, { useContext } from "react";
import NormalCard from "../Reusable/NormalCard";
import { IoIosFolderOpen } from "react-icons/io";
import { FaImage, FaVideo } from "react-icons/fa6";
import myContext from "@/Context/MyContext";
import Table from "../Reusable/Table";


const Images = () => {
const context = useContext(myContext);
const { images } = context;


  const getTotalSizeInGB = () => {
    let totalSize = 0;
    images.forEach((item) => {
      totalSize += item.Size;
    });

    return (totalSize / (1024 * 1024 * 1024)).toFixed(2); // Convert to GB & keep 2 decimal places
  };

  return (
    <div className="flex flex-col gap-3 p-2">
    <div className="flex items-end gap-2 pl-3">
      <h1 className="text-slate-500 sm:text-5xl text-3xl font-extrabold">Images</h1>
      <span className="text-slate-500 sm:text-lg text-md  font-bold">
        {getTotalSizeInGB()}GB/ 20GB
      </span>
    </div>
    <Table rows={images} />
  </div>
  );
};

export default Images;

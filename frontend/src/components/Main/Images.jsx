import React, { useContext } from "react";
import NormalCard from "../Reusable/NormalCard";
import { IoIosFolderOpen } from "react-icons/io";
import { FaImage, FaVideo } from "react-icons/fa6";
import myContext from "@/Context/MyContext";
import Table from "../Reusable/Table";


const Images = () => {
const context = useContext(myContext);
const { images } = context;

  return (
    <div>
      <div className="bg-[#56B8FF] text-white  rounded-2xl p-4 mx-auto">
        Images
      </div>
      <Table
        rows={images}
        />
    </div>
  );
};

export default Images;

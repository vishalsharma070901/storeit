import React, { useContext } from "react";
import myContext from "@/Context/MyContext";
import Table from "../Reusable/Table";
const Documents = () => {
  const context = useContext(myContext);
  const { documents } = context;


  const getTotalSizeInGB = () => {
    let totalSize = 0;
    documents.forEach((item) => {
      totalSize += item.Size;
    });

    return (totalSize / (1024 * 1024 * 1024)).toFixed(2); // Convert to GB & keep 2 decimal places
  };
  

  return (
    <div className="flex flex-col gap-3 p-2">
    <div className="flex items-end gap-2 pl-3">
      <h1 className="text-slate-500 sm:text-5xl text-3xl font-extrabold">Documents</h1>
      <span className="text-slate-500 sm:text-lg text-md font-bold">
        {getTotalSizeInGB()}GB/ 20GB
      </span>
    </div>
    <Table rows={documents} />
  </div>
  );
};

export default Documents;
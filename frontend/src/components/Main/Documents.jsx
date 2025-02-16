import React, { useContext } from "react";
import myContext from "@/Context/MyContext";
import Table from "../Reusable/Table";
const Documents = () => {
  const context = useContext(myContext);
  const { documents } = context;

  

  return (
    <div>
      <div className="bg-[#56B8FF] text-white rounded-2xl p-4 mx-auto">
        Documents
      </div>
      <Table
        rows={documents}
        />
    </div>
  );
};

export default Documents;
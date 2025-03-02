import React, { useState } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaRegFileWord } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileImage } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa";
import { MdAudioFile } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import RenameModal from "../Main/RenameModal";
import OtherModal from "./OtherModal";
import DeleteModal from "../Main/DeleteModal";





const Table = ({ rows }) => {
    const [renameModalOpen, setRenameModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const getDocName = (docName) => {
    const name = docName.split("/").pop();
    return decodeURIComponent(name);
  };

  const formatDate = (dataString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
    };
    const date = new Date(dataString);
    return date.toLocaleString("en-US", options);
  };

  const getSize = (size) => {
    if (size > 1000000) {
      return `${(size / 1000000).toFixed(2)} MB`;
    } else if (size > 1000) {
      return `${(size / 1000).toFixed(2)} KB`;
    } else {
      return `${size} bytes`;
    }
  };
  const getIcon = (key) => {
    const extension = key.split('.').pop().toLowerCase();

  
    if (['mp3', 'wav', 'aac'].includes(extension)) {
      return <MdAudioFile className="text-purple-500 text-2xl "/>;
    } else if (['mp4', 'avi', 'mov'].includes(extension)) {
      return <FaFileVideo className="text-green-500 text-xl"/>;
    } else if (extension === 'pdf') {
      return <FaFilePdf className="text-red-500 text-xl" />;
    } else if (['doc', 'docx'].includes(extension)) {
      return <FaRegFileWord className="text-blue-500 text-2xl"  />;
    } else if (['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(extension)) {
      return <FaFileImage className="text-yellow-500 text-2xl" />;
    } else {
      return <IoIosFolderOpen className="text-gray-500"  />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">

      <div className="flex-1 overflow-y-auto  max-h-[calc(100vh-12rem)] scrollbar-hide">
        <table className="w-full rounded-xl">
          <thead className="text-gray-700 sticky top-0 z-10  shadow-md border-t bg-white  border-gray-200">
            <tr>
              <th className="p-3 text-left w-[40%]">Name</th>
              <th className="p-3 text-left hidden md:table-cell w-[30%]">
                Last Modified
              </th>
              <th className="p-3 text-left hidden md:table-cell w-[20%]">
                File Size
              </th>
              <th className="p-3 text-left w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <> 
              
              <tr key={index} className=" border-b border-b-gray-200 hover:bg-gray-50">
                <td className="p-3 w-[40%] truncate max-w-[200px]">
                  <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  <span>
                    {getIcon(row.Key)}
                  </span>
                  <span>
                    {getDocName(row.Key)}
                  </span>
                    </div>
                  
                </td>
                <td className="p-3 text-gray-600 hidden md:table-cell w-[30%]">
                  {formatDate(row.LastModified)}
                </td>
                <td className="p-3 text-gray-600 hidden md:table-cell w-[20%]">
                  {getSize(row.Size)}
                </td>
           
                <td className="p-3 flex justify-end w-[10%] relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <PiDotsThreeOutlineVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white shadow-xl border-none border  border-gray-200 rounded-xl p-2 w-52 ">
                      <DropdownMenuLabel className="p-2"> {getDocName(row.Key)}</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => setRenameModalOpen(true)} className="hover:!bg-[#56B8FF] hover:!text-white cursor-pointer transition-colors">
                        <MdDriveFileRenameOutline/> Rename
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setDeleteModalOpen(true)}  className="hover:!bg-[#56B8FF] hover:!text-white cursor-pointer transition-colors">
                      <MdDeleteOutline /> Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => console.log("Option 2 clicked")}  className="hover:!bg-[#56B8FF] hover:!text-white cursor-pointer transition-colors">
                      <TbListDetails /> Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <OtherModal open={renameModalOpen} setOpen={setRenameModalOpen}>
                <RenameModal fileName={getDocName(row.Key)}/>
              </OtherModal>

              <OtherModal open={deleteModalOpen} setOpen={setDeleteModalOpen}>
                <DeleteModal fileName={getDocName(row.Key)}/>
              </OtherModal>
              </>
            ))}

          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default Table;



import React, { useState } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const Table = ({ rows }) => {
  const [menuVisible, setMenuVisible] = useState(null);

  const toggleMenu = (index) => {
    setMenuVisible(menuVisible === index ? null : index);
  };

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

  return (
    <div className="w-full h-full flex flex-col">
      {/* Table wrapper with scrollable behavior */}
      <div className="flex-1 overflow-y-auto min-h-[200px] max-h-[calc(100vh-12rem)] scrollbar-hide">
        <table className="w-full rounded-lg">
          <thead className="text-gray-700 sticky top-0 z-10 bg-white shadow-sm">
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
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3 w-[40%] truncate max-w-[200px]">
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                    {getDocName(row.Key)}
                  </span>
                </td>
                <td className="p-3 text-gray-600 hidden md:table-cell w-[30%]">
                  {formatDate(row.LastModified)}
                </td>
                <td className="p-3 text-gray-600 hidden md:table-cell w-[20%]">
                  {getSize(row.Size)}
                </td>
                <td className="p-3 flex justify-end w-[10%] relative">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={(event) => toggleMenu(index, event)}
                  >
                    <PiDotsThreeOutlineVertical />
                  </button>

                  {menuVisible === index && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-50">
                      <ul className="py-1">
                        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Option 1
                        </li>
                        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Option 2
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

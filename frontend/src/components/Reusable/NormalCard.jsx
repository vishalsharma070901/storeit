import React, { useState } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const NormalCard = ({ title, description, icon, size }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMouseEnter = () => setOpenMenu(true);
  const handleMouseLeave = () => setOpenMenu(false);

const getDocName = (docName) => {
    const name = docName.split("/").pop(); // Extract only the file name
    return decodeURIComponent(name); // Decode the URL-encoded file name
  };

  const formatDate = (dataString) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true, day: '2-digit', month: 'short' };
    const date = new Date(dataString);
    return date.toLocaleString('en-US', options);
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
    <div
      className="w-full p-5 bg-white border border-gray-200 shadow-sm rounded-2xl relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between">
        <div className="text-3xl">{icon}</div>
        <div
          className="flex flex-col items-center gap-1"
          onMouseEnter={handleMouseEnter} 
        >
          <div className="text-2xl">
            <button>
              <PiDotsThreeOutlineVertical />
            </button>
          </div>
          <div className="text-sm">{getSize(size)}</div>
        </div>
      </div>

      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {getDocName(title)}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {formatDate(description)}
      </p>
      <div
        className={`${
          openMenu ? "visible" : "hidden"
        } absolute top-8 right-3 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="dropdown-user"
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            Neil Sims
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            neil.sims@flowbite.com
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300 dark:hover:text-white"
              role="menuitem"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300 dark:hover:text-white"
              role="menuitem"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300 dark:hover:text-white"
              role="menuitem"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300 dark:hover:text-white"
              role="menuitem"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NormalCard;
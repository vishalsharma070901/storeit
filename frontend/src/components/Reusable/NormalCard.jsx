import React, { useState } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const NormalCard = ({ key, title, description, icon }) => {
  const [openMenue, setOpenMenue] = useState(false);
  const handleMouseEnter = () => setOpenMenue(true);
  const handleMouseLeave = () => setOpenMenue(false);

  return (
    <div
      class=" w-full p-5 bg-white border border-gray-200  shadow-sm rounded-2xl relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between ">
        <div className="text-3xl">{icon}</div>
        <div
          className="flex flex-col items-center gap-4"
          onMouseEnter={handleMouseEnter} // Open menu on hover
        >
          <div className="text-2xl">
            <button>
              <PiDotsThreeOutlineVertical />
            </button>
          </div>
          <div>2GB</div>
        </div>
      </div>

      <a href="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div
        className={` ${
          openMenue ? "visible" : "hidden"
        } absolute top-8 right-3 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
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
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white"
              role="menuitem"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white"
              role="menuitem"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white"
              role="menuitem"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white"
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

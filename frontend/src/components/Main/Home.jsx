import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { FaFolder } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaImages } from "react-icons/fa";

import { MdPermMedia } from "react-icons/md";





const Home = () => {
    const [openMenue, setOpenMenue] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)
    
    const handleMenue=()=>{
        setOpenMenue(!openMenue);
    }

    const handleSideBar = () =>{
        setOpenSideBar(!openSideBar)
    }

  return (
<>
<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button 
        onClick={handleSideBar}
        data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="/" className="flex ms-2 md:me-24">
          <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Store-It</span>
        </a>
      </div>
      <div className="flex items-center relative">
          <div className="flex items-center ms-3">
            <div>
              <button 
              onClick={handleMenue}
              type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={logo} alt="user photo"/>
              </button>
            </div>
            <div className={` ${openMenue ? "visible" :"hidden" } absolute top-8 right-3 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className={` ${openSideBar ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 z-40 w-[20%] h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-full  dark:text-white hover:bg-[#56B8FF] hover:text-white  group">
            <span className='text-2xl'>  <MdDashboard /> </span>
               <span className="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-700 rounded-full dark:text-white hover:bg-[#56B8FF] hover:text-white group ">
              <span className='text-2xl'>  <FaFolder/> </span>
               <span className="flex-1 ms-3 whitespace-nowrap">Documents</span>
               
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-full  dark:text-white hover:bg-[#56B8FF] hover:text-white  group">
            <span className='text-2xl'>   <FaImages /> </span>

               <span className="flex-1 ms-3 whitespace-nowrap">Images</span>
             
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-full  dark:text-white hover:bg-[#56B8FF] hover:text-white  group">
            <span className='text-2xl'>   <MdPermMedia /> </span>

               <span className="flex-1 ms-3 whitespace-nowrap">Media</span>
            </a>
         </li>

    
        
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
   <div
onClick={()=> setOpenSideBar(false)}
   className="p-4  bg-blue-100 h-screen rounded-lg dark:border-gray-700 mt-14">
    
     
   

   </div>
</div>

    </>
  )
}

export default Home
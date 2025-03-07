import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaFolder } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "../../App.css";
import myContext from "@/Context/MyContext";
import axios from "axios";
import { IoCloudOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";



const Home = ({ children }) => {
    const initialSize = Number(localStorage.getItem("user-total-size")) || 0;
    const usedSize = Number(localStorage.getItem("user-used-size")) || 0;
  
    const percentage = initialSize > 0 ? ((usedSize / initialSize) * 100).toFixed(2) : 0;
  
    useEffect(() => {}, [percentage, initialSize, usedSize]);
  const navigate = useNavigate();
  const context = useContext(myContext);
  const [openMenue, setOpenMenue] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const {
    setDocuments,
    setImages,
    setMedia,
    setImagesSize,
    setMediaSize,
    setDocumenstSize,
    setMediaLoading,
    setDocumentLoading,
    setImageLoading
  } = context;

  const handleMenue = () => {
    setOpenMenue(!openMenue);
  };

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  const isActive = (path) => location.pathname === path;

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setMessage("");

    try {
      const fileName = encodeURIComponent(file.name);
      const fileType = file.type;

      console.log(fileType);
      const response = await fetch(
        "http://localhost:8000/api/upload-files/upload",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName, fileType }),
        }
      );

      if (!response.ok) console.log("Failed to get presigned URL");

      const { url } = await response.json();

      const uploadResponse = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": fileType },
        body: file,
      });

      if (!uploadResponse.ok) throw new Error("Upload failed");

      setMessage("File uploaded successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await loadDocuments();
      await loadImages();
      await loadMedia();
    };

    fetchData();
  }, []);

  const userName = localStorage.getItem("user-name");
  const userEmail = localStorage.getItem("user-email");


  const loadDocuments = async () => {
    try {
      setDocumentLoading(true);
      if (!userName) {
        return;
      }

      const response = await axios.get(
        `http://localhost:8000/api/getFile/get-objects/${userName}/documents`
      );

      if (response.status === 200) {
        const data = response.data;
        setDocuments(data);
        let totalSize = data.reduce((acc, item) => acc + item.Size, 0);
        setDocumenstSize(totalSize);
        setDocumentLoading(false);
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const loadImages = async () => {
    try {
      setImageLoading(true);
      if (!userName) {
        return;
      }
      const response = await axios.get(
        `http://localhost:8000/api/getFile/get-objects/${userName}/images`
      );
      if (response.status === 200) {
        const data = response.data;
        setImages(data);
        let totalSize = 0;
        response.data.forEach((item) => {
          totalSize += item.Size;
        });
        setImagesSize(totalSize);
        setImageLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loadMedia = async () => {
    try {
      setMediaLoading(true);
      if (!userName) {
        return;
      }
      const response = await axios.get(
        `http://localhost:8000/api/getFile/get-objects/${userName}/media`
      );

      if (response.status === 200) {
        const data = response.data;
        setMedia(data);
        let totalSize = data.reduce((acc, item) => acc + item.Size, 0);
        setMediaSize(totalSize);
        setMediaLoading(false);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };
  
  const handleSignout = () => {
    navigate("/login");
    context.logout();
  }
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={handleSideBar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Store-It
                </span>
              </a>
            </div>
            <div className="flex items-center relative">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={handleMenue}
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={logo}
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={` ${
                    openMenue ? "visible" : "hidden"
                  } absolute top-8 right-3 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Hi!{" "}{userName}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                     {userEmail}
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
                        onClick={handleSignout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#56B8FF] dark:text-gray-300  dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={` ${
          openSideBar ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className=" font-medium gap-5 flex flex-col">
            <Link to={"/dashboard"}>
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-full ${
                    isActive("/dashboard")
                      ? "bg-[#56B8FF] text-white"
                      : "text-gray-900 dark:text-white hover:bg-[#56B8FF] hover:text-white"
                  }`}
                >
                  <span className="text-2xl">
                    {" "}
                    <MdDashboard />{" "}
                  </span>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
            </Link>
            <Link to={"/documents"}>
              <li onClick={loadDocuments}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-full ${
                    isActive("/documents")
                      ? "bg-[#56B8FF] text-white"
                      : "text-gray-900 dark:text-white hover:bg-[#56B8FF] hover:text-white"
                  }`}
                >
                  <span className="text-2xl">
                    {" "}
                    <FaFolder />{" "}
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Documents
                  </span>
                </a>
              </li>
            </Link>
            <Link to={"/images"}>
              <li onClick={loadImages}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-full ${
                    isActive("/images")
                      ? "bg-[#56B8FF] text-white"
                      : "text-gray-900 dark:text-white hover:bg-[#56B8FF] hover:text-white"
                  }`}
                >
                  <span className="text-2xl">
                    {" "}
                    <FaImages />{" "}
                  </span>

                  <span className="flex-1 ms-3 whitespace-nowrap">Images</span>
                </a>
              </li>
            </Link>
            <Link to={"/media"}>
              <li onClick={loadMedia}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-full ${
                    isActive("/media")
                      ? "bg-[#56B8FF] text-white"
                      : "text-gray-900 dark:text-white hover:bg-[#56B8FF] hover:text-white"
                  }`}
                >
                  <span className="text-2xl">
                    {" "}
                    <MdPermMedia />{" "}
                  </span>

                  <span className="flex-1 ms-3 whitespace-nowrap">Media</span>
                </a>
              </li>
            </Link>
            {location.pathname !== "/dashboard" && (
              <li>
                <a href="#" className={`flex flex-col gap-4 p-2 rounded-full`}>
                  <div className="flex">
                    <span className="text-2xl">
                      <IoCloudOutline />
                    </span>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Storage
                    </span>
                  </div>

                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-[#56B8FF] h-2.5 rounded-full"
                      style={{ width: percentage + "%" }}
                    ></div>
                    <span className="font-normal text-gray-900 text-sm">
                    {(usedSize / (1024 * 1024 * 1024)).toFixed(2)} GB / {(initialSize / (1024 * 1024 * 1024)).toFixed(2)} GB

                    </span>
                  </div>
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

      <div
        onClick={() => {
          setOpenMenue(false);
          setOpenSideBar(false);
        }}
        className=" sm:ml-64 rounded-lg"
      >
        <div className="  bg-white dark:bg-gray-800 p-4 flex justify-between  items-center">
          <div className="p-2 px-3 rounded-full flex items-center w-[50%] border-2 border-[#56B8FF]">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full"
              placeholder="Search here"
            />
            <span>
              <FaMagnifyingGlass />
            </span>
          </div>

          <div className="bg-[#56B8FF] text-white w-44 flex px-10 py-3 justify-center rounded-full cursor-pointer relative">
            <span className="text-2xl">
              <FaCloudUploadAlt />
            </span>
            <input
              onChange={handleFileUpload}
              type="file"
              id="fileInput"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <span className="ml-1 font-medium">
              {uploading ? "Uploading..." : "Upload"}
            </span>
          </div>
        </div>

        <div className=" w-full rounded-3xl max-h-[calc(100vh-8rem)] p-3 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Home;

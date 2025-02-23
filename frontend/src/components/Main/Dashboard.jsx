import React, { useEffect, useState, useContext } from "react";
import Card from "../Reusable/DashboardCard"; // Make sure this path is correct
import { IoIosFolderOpen } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { IoPieChartSharp } from "react-icons/io5";
import Chart from "./Chart"; // Make sure this path is correct
import axios from "axios";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FaRegFileWord, FaFilePdf, FaFileImage, FaFileVideo } from "react-icons/fa6";
import { MdAudioFile } from "react-icons/md";
import myContext from "@/Context/MyContext"; // Make sure this path is correct

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);
  const { imagesSize, mediaSize, documentsSize, imageLoading, documentLoading,mediaLoading } = context;
  const [cardsLoading, setCardsLoading] = useState(true);

  const cardDetails = [
    { id: 1, title: "Images", icon: <FaFileImage />, totalSize: imagesSize },
    { id: 2, title: "Documents", icon: <IoIosFolderOpen />, totalSize: documentsSize },
    { id: 3, title: "Media", icon: <FaVideo />, totalSize: mediaSize },
    { id: 4, title: "Others", icon: <IoPieChartSharp />, totalSize: 46634728 },
  ];

  const userName = localStorage.getItem("user-name");

  const getAllFiles = async () => {
    try {
      setLoading(true);
      if (!userName) return;
      const response = await axios.get(
        `http://localhost:8000/api/getFile/get-all-objects/${userName}`
      );
      if (response.status === 200) {
        const sortedFiles = response.data
          .sort((a, b) => new Date(b.LastModified) - new Date(a.LastModified))
          .slice(0, 7);
        setFiles(sortedFiles);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFiles();
  }, [userName]);

  const getDocName = (docName) => decodeURIComponent(docName.split("/").pop());

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
    });

  const getIcon = (key) => {
    const extension = key.split(".").pop().toLowerCase();
    if (["mp3", "wav", "aac"].includes(extension))
      return <MdAudioFile className="text-purple-500 text-xl" />;
    if (["mp4", "avi", "mov"].includes(extension))
      return <FaFileVideo className="text-green-500 text-xl" />;
    if (extension === "pdf") return <FaFilePdf className="text-red-500 text-xl" />;
    if (["doc", "docx"].includes(extension))
      return <FaRegFileWord className="text-blue-500 text-xl" />;
    if (["jpg", "jpeg", "png", "gif", "svg"].includes(extension))
      return <FaFileImage className="text-yellow-500 text-xl" />;
    return <IoIosFolderOpen className="text-gray-500" />;
  };

  useEffect(() => {
    setTimeout(() => {
      setCardsLoading(false);
    }, 5000);
  }, []);

  const renderCardSkeleton = () => (
    <div className="w-full h-32 bg-gray-300 rounded-xl animate-pulse flex flex-col justify-center items-center">
      <div className="w-16 h-16 bg-gray-400 rounded-full mb-2"></div>
      <div className="w-32 h-4 bg-gray-400 rounded-md mb-1"></div>
      <div className="w-24 h-3 bg-gray-400 rounded-md"></div>
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-col md:w-[45%] w-full gap-3">
        <Chart />
        <div className="flex gap-3">
          {cardsLoading ? (
            <>
              {renderCardSkeleton()}
              {renderCardSkeleton()}
            </>
          ) : (
            cardDetails.slice(0, 2).map((card) => (
              <Card key={card.id} title={card.title} icon={card.icon} size={card.totalSize} />
            ))
          )}
        </div>
        <div className="flex gap-3">
          {cardsLoading ? (
            <>
              {renderCardSkeleton()}
              {renderCardSkeleton()}
            </>
          ) : (
            cardDetails.slice(2, 4).map((card) => (
              <Card key={card.id} title={card.title} icon={card.icon} size={card.totalSize} />
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col md:w-[55%] w-full border-gray-200 border rounded-2xl p-3">
        <h1 className="md:text-3xl text-2xl font-extrabold text-slate-700">
          Recently Uploaded Files
        </h1>
        {loading ? (
          <ul className="mt-3 flex flex-col">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className="w-full hover:bg-gray-100 p-3 flex items-center gap-2 rounded-xl justify-between animate-pulse"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                    <div className="flex flex-col">
                      <span className="w-32 h-4 bg-gray-300 rounded-md"></span>
                      <span className="w-20 h-3 bg-gray-200 rounded-md mt-1"></span>
                    </div>
                  </div>
                  <div>
                    <PiDotsThreeOutlineVertical className="text-gray-400" />
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <ul className="mt-3 flex flex-col">
            {files.map((file) => (
              <li
                key={file.Key}
                className="w-full hover:bg-gray-100 p-3 flex items-center gap-2 rounded-xl justify-between"
              >
                <div className="flex items-center gap-2">
                  <div>{getIcon(file.Key)}</div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 text-md">
                      {getDocName(file.Key)}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {formatDate(file.LastModified)}
                    </span>
                  </div>
                </div>
                <div>
                  <PiDotsThreeOutlineVertical />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
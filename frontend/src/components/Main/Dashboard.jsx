import React from "react";
import Card from "../Reusable/DashboardCard";
import { IoIosFolderOpen } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { IoPieChartSharp } from "react-icons/io5";
import Chart from "./Chart";





const cardDetails = [
  { id: 1, title: "Card 1", description: "This is the first card", icon:<IoIosFolderOpen /> },
  { id: 2, title: "Card 2", description: "This is the second card", icon:<FaImage />},
  { id: 3, title: "Card 3", description: "This is the third card", icon:<FaVideo />},
  { id: 4, title: "Card 4", description: "This is the fourth card", icon:<IoPieChartSharp />},
  

];

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-4">
  
      <div className="flex flex-col md:w-[45%] w-full gap-3">
        {/* <div>
          <Chart/>
        </div> */}
        <div className="flex gap-3">
          {cardDetails.slice(0, 2).map((card) => (
            <Card key={card.id} title={card.title} description={card.description}  icon={card.icon} />
          ))}
        </div>
        <div className="flex gap-3">
          {cardDetails.slice(2 ,4).map((card) => (
            <Card key={card.id} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>

      <div className="flex  md:w-[55%] w-full bg-blue-200 rounded-2xl ">
        recent uploads
      </div>
    </div>
  );
};

export default Dashboard;

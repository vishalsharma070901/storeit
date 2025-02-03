import React from "react";
import NormalCard from "../Reusable/NormalCard";
import { IoIosFolderOpen } from "react-icons/io";
import { FaImage, FaVideo } from "react-icons/fa6";
import { IoPieChartSharp } from "react-icons/io5";

const cardDetails = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    icon: <IoIosFolderOpen />,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    icon: <FaImage />,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    icon: <FaVideo />,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the sixth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the seventh card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the eighth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the ninth card",
    icon: <IoIosFolderOpen />,
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is the tenth card",
    icon: <FaImage />,
  },
  {
    id: 11,
    title: "Card 11",
    description: "This is the eleventh card",
    icon: <FaVideo />,
  },
  {
    id: 12,
    title: "Card 12",
    description: "This is the twelfth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 13,
    title: "Card 1",
    description: "This is the first card",
    icon: <IoIosFolderOpen />,
  },
  {
    id: 14,
    title: "Card 2",
    description: "This is the second card",
    icon: <FaImage />,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    icon: <FaVideo />,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the sixth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the seventh card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the eighth card",
    icon: <IoPieChartSharp />,
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the ninth card",
    icon: <IoIosFolderOpen />,
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is the tenth card",
    icon: <FaImage />,
  },
  {
    id: 11,
    title: "Card 11",
    description: "This is the eleventh card",
    icon: <FaVideo />,
  },
  {
    id: 12,
    title: "Card 12",
    description: "This is the twelfth card",
    icon: <IoPieChartSharp />,
  },
];

const Images = () => {
  return (
    <div>
      <div className="bg-[#56B8FF] text-white  rounded-2xl p-4 mx-auto">
        Images
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 ">
        {cardDetails.map((card, index) => (
          <NormalCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;

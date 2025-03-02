import React from "react";

const Card = ({ key, title, description, icon, size }) => {

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
    <div className="w-full p-5 bg-white border border-gray-200 shadow-sm rounded-2xl relative">
      <div className="flex justify-between">
        <div className="text-3xl">{icon}</div>
        <div className="flex flex-col items-center gap-1">
       
          <div className="text-sm">{getSize(size)}</div>
        </div>
      </div>

      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {formatDate(description)}
      </p>
    </div>
  );
};

export default Card;

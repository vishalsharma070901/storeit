import React from "react";


const Card = ({key, title, description, icon}) => {
  return (
    <div class=" w-full p-6 bg-white border border-gray-200  shadow-sm rounded-2xl">
     {icon}
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {description}
      </p>
      
    </div>
  );
};

export default Card;

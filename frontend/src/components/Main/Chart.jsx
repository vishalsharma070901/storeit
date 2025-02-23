"use client";
import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Chart = () => {
  const initialSize = localStorage.getItem("user-total-size");
  const usedSize = localStorage.getItem("user-used-size");
  const percentage = (usedSize / initialSize) * 100;
  
  useEffect(() => {
  }, [percentage, initialSize, usedSize]);
  return (
    <Card className="flex  items-center w-full bg-[#56B8FF] rounded-xl border-none p-5">
      <CardContent className="flex justify-center items-center">
        <div className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-44">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}% `}
            circleRatio={0.75} 
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8, 
              strokeLinecap: "round", 
              pathColor: "#ffffff",
              trailColor: "#d6d6d6", 
              textColor: "#ffffff", 
            })}
          />
        </div>
      </CardContent>
      <CardHeader className="text-center mt-4">
        <CardTitle className="text-white text-lg md:text-2xl">Available Storage</CardTitle>
        <CardDescription className="text-white text-sm md:text-lg">
          {!usedSize ? 0: usedSize / (1024 * 1024 * 1024 )}GB / {!initialSize ? "0GB": initialSize / (1024 * 1024 * 1024)} GB
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Chart;

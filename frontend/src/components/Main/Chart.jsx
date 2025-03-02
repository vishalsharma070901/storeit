"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Chart = () => {

  const initialSize = Number(localStorage.getItem("user-total-size")) || 0;
  const usedSize = Number(localStorage.getItem("user-used-size")) || 0;

  const percentage = initialSize > 0 ? ((usedSize / initialSize) * 100).toFixed(2) : 0;

  useEffect(() => {}, [percentage, initialSize, usedSize]);

  return (
    <Card className="flex items-center w-full bg-[#56B8FF] rounded-xl border-none p-5">
      <CardContent className="flex justify-center items-center">
        <div className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-44">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
          {(usedSize / (1024 * 1024 * 1024)).toFixed(2)} GB / {(initialSize / (1024 * 1024 * 1024)).toFixed(2)} GB
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Chart;

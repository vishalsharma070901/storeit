"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import {
    Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { browser: "safari", visitors: 200, }, // Use a static color
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#56B8FF",
  },
};

const Chart = () => {
  return (
    <Card className=" flex items-center w-full bg-[#56B8FF] ">
    
      <CardContent className=" pb-0">
        <div className="mx-auto">
          <RadialBarChart
            data={chartData}
            width={250}
            height={250}
            startAngle={10}
            endAngle={200}
            innerRadius={80}
            outerRadius={110}
            
            
          >
            
            <PolarGrid           
             gridType="circle"
              radialLines={false}
              stroke="none"
              className="bg-gray-500"
              polarRadius={[86, 74]} />
            <RadialBar
              dataKey="visitors"
              background
              cornerRadius={10}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}> 
            <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Space Used
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </div>
      </CardContent>
      <CardHeader className="">
        <CardTitle className="chart-title">Available Storage</CardTitle>
        <CardDescription className="chart-description">
          2GB / 2GB
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Chart;

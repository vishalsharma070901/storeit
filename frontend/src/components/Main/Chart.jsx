"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import {
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
  { browser: "safari", visitors: 200, fill: "#56B8FF" }, // Use a static color
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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
      <div style={{ width: 250, height: 250 }} className="mx-auto">
  <RadialBarChart
    data={chartData}
    width={250}
    height={250}
    startAngle={90}
    endAngle={450}
    innerRadius={80}
    outerRadius={110}
  >
    <PolarGrid gridType="circle" radialLines={false} stroke="none" />
    <RadialBar
      dataKey="visitors"
      background={{ fill: "#F0F0F0" }}
      cornerRadius={10}
    />
    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false} />
  </RadialBarChart>
</div>

      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default Chart;

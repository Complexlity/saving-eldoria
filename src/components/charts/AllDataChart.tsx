// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import initialData from '../../data/pokemon_initial.json'
import { convertDataToTypeCount } from "../../utils";



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = convertDataToTypeCount(initialData)
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function AllDataChart() {
  return (
    <PieChart width={10000} height={1000}>
      <Pie
        width={800}
        height={800}
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="count"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}


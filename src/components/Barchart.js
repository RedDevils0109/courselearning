import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const lectureData = [
  {
    name: "Aprile",
    Lecture: 20,
    Assignment: 12,
  },
  {
    name: "May",
    Lecture: 9,
    Assignment: 13,
  },
  {
    name: "June",
    Lecture: 14,
    Assignment: 28,
  },
  {
    name: "July",
    Lecture: 20,
    Assignment: 32,
  },
  {
    name: "August",
    Lecture: 17,
    Assignment: 22,
  },
  {
    name: "September",
    Lecture: 10,
    Assignment: 9,
  },
];

const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={lectureData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* Use the correct data keys */}
        <Bar dataKey="Lecture" fill="#2563eb" />
        <Bar dataKey="Assignment" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Lecture
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Assignment
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default Barchart;

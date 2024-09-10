import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { learningData } from '../utils/progress';
import { RiH3 } from 'react-icons/ri';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const totalHours = learningData.reduce(
  (total, entry) => total + entry["Time spent(in hours)"],
  0
);
const renderLabel = ({ name, value }) => {
  const percent = ((value / totalHours) * 100).toFixed(1);
  return `${name}: ${percent}%`;
};
const MyPieChart = () => {
  return (
    <>
    <h3>Knowledge gained</h3>
    <ResponsiveContainer width="100%" height={400} >
    
    <PieChart>
      <Pie
        data={learningData}
        dataKey="Time spent(in hours)"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={renderLabel}
      >
        {learningData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
 </>
  )
}

export default MyPieChart
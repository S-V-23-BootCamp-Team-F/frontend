import React from "react";
import { CartesianGrid, XAxis, YAxis, BarChart, Bar, Legend, Tooltip } from 'recharts';


const Cropchart = () => {
  const data = [
    {
      "name": "고추",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "포도",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "딸기",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "오이",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "파프리카",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "토마토",
      "uv": 2390,
      "pv": 3800
    },
  ]
  return (
    <BarChart width={768} height={360} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
  );
};

export default Cropchart;
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Periodchart = () => {
    const grapedata = [
        {
          "name": "1월",
          "포도탄저병": 4000,
          "포도노균병": 2400,
          "포도축과병": 1245,
          "포도일소병": 2246,
        },
        {
          "name": "2월",
          "포도탄저병": 3000,
          "포도노균병": 1398,
          "포도축과병": 2634,
          "포도일소병": 2430,
        },
        {
          "name": "3월",
          "포도탄저병": 2000,
          "포도노균병": 9800,
          "포도축과병": 5817,
          "포도일소병": 6348,
        },
        {
          "name": "4월",
          "포도탄저병": 2780,
          "포도노균병": 3908,
          "포도축과병": 4127,
          "포도일소병": 5931,
        },
        {
          "name": "5월",
          "포도탄저병": 1890,
          "포도노균병": 4800,
          "포도축과병": 942,
          "포도일소병": 5483,
        },
        {
          "name": "6월",
          "포도탄저병": 2390,
          "포도노균병": 3800,
          "포도축과병": 5835,
          "포도일소병": 9832,
        },
        {
            "name": "7월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 8722,
            "포도일소병": 8873,
        },
          {
            "name": "8월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 9283,
            "포도일소병": 4875,
          },
          {
            "name": "9월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 2713,
            "포도일소병": 8448,
          },
          {
            "name": "10월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 2316,
            "포도일소병": 8433,
          },
          {
            "name": "11월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 8721,
            "포도일소병": 2381,
          },
          {
            "name": "12월",
            "포도탄저병": 2390,
            "포도노균병": 3800,
            "포도축과병": 4587,
            "포도일소병": 7326,
          },
      ]
      
  return (
    <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
        <LineChart data={grapedata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="포도탄저병" stroke="#82ca9d" />
              <Line type="monotone" dataKey="포도노균병" stroke="#8884d8" />
              <Line type="monotone" dataKey="포도축과병" stroke="#000000" />
              <Line type="monotone" dataKey="포도일소병" stroke="#124fa1" />
          </LineChart>
          </ResponsiveContainer>
          </div>
  );
};

export default Periodchart;
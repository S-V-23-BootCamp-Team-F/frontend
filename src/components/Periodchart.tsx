import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Periodchart = () => {
  const [perioddata,setPerioddata] = useState<any[]>([]);
        {
          "name": "1월",
          "포도탄저병": 4000,
          "포도노균병": 2400,
    useEffect(() => {
      (async () => {
        await axios
          .get("http://127.0.0.1:8000/api/v1/plants/linechart/",{
            params : {
              type : index
            }
          })
          .then((res) => {
            setPerioddata(perioddata => res.data.result);
            console.log(perioddata);
          }) // 응답
          .catch((error) => {
            console.log(error);
          });
      })();
    }, [index]);

  return (
      <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="고추탄저병" stroke="#82ca9d" />
            <Line type="monotone" dataKey="시설포도탄저병" stroke="#124fa1" />
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#8884d8" />
            <Line type="monotone" dataKey="시설포도노균병" stroke="#000000" />
            <Line type="monotone" dataKey="칼슘결핍" stroke="#124fa1" />
            <Line type="monotone" dataKey="파프리카흰가루병" stroke="#124fa1" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Periodchart;
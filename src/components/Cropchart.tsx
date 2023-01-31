import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router";

const Cropchart = () => {
  const [cropdata, setCropdata] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await axios
        .get("https://api.cropdoctor.shop/api/v1/plants/barchart/")
        .then((res) => {
          setCropdata((cropdata) => res.data.result);
          console.log(cropdata);
        })
        .catch((error) => {
          console.log(error);
          alert("차트데이터 불러오기 실패.");
          navigate('/');
        });
    })();
  }, []);

  return (
    <div className="mt-10 ml-4 h-80 w-800">
      <BarChart
        data={cropdata}
        width={600}
        height={400}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar stackId="a" dataKey="고추탄저병" fill="#3E6A1D" opacity={1.0} />
        <Bar stackId="a" dataKey="칼슘결핍" fill="#3E6A1D" opacity={0.4} />
        <Bar stackId="a" dataKey="고추흰가루병" fill="#85c200" opacity={0.4} />
        <Bar stackId="a" dataKey="오이노균병" fill="#85c200" opacity={1.0} />
        <Bar stackId="a" dataKey="냉해피해" fill="#85c200" opacity={0.6} />
        <Bar stackId="a" dataKey="오이흰가루병" fill="#85c200" opacity={0.4} />
        <Bar
          stackId="a"
          dataKey="토마토잿빛곰팡이병"
          fill="#ff6f51"
          opacity={0.6}
        />
        <Bar stackId="a" dataKey="열과" fill="#ff6f51" opacity={1.0} />
        <Bar
          stackId="a"
          dataKey="토마토흰가루병"
          fill="#ff6f51"
          opacity={0.8}
        />
        <Bar
          stackId="a"
          dataKey="시설포도탄저병"
          fill="#924A70"
          opacity={0.8}
        />
        <Bar
          stackId="a"
          dataKey="시설포도노균병"
          fill="#924A70"
          opacity={0.6}
        />
        <Bar stackId="a" dataKey="일소피해" fill="#924A70" opacity={0.4} />
        <Bar stackId="a" dataKey="축과병" fill="#924A70" opacity={1.0} />
        <Bar
          stackId="a"
          dataKey="파프리카흰가루병"
          fill="#df4843"
          opacity={0.9}
        />
        <Bar
          stackId="a"
          dataKey="파프리카잘록병"
          fill="#df4843"
          opacity={0.7}
        />
        <Bar
          stackId="a"
          dataKey="다량원소결핍 (N)"
          fill="#dc4343"
          opacity={0.6}
        />
        <Bar
          stackId="a"
          dataKey="다량원소결핍 (P)"
          fill="#df4843"
          opacity={0.2}
        />
        <Bar
          stackId="a"
          dataKey="다량원소결핍 (K)"
          fill="#dc4043"
          opacity={0.9}
        />
      </BarChart>
    </div>
  );
};

export default Cropchart;

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
import * as Sentry from "@sentry/react";

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
          navigate("/");
        });
    })();
  }, []);

  return (
    <div className="h-300 w-600 sm:h-350 sm:w-700 md:h-400 md:w-800 lg:h-500 lg:w-1000">
      <ResponsiveContainer>
        <BarChart data={cropdata} maxBarSize={50}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar stackId="a" dataKey="고추탄저병" fill="#009000" opacity={1.0} />
          <Bar
            stackId="a"
            dataKey="고추흰가루병"
            fill="#009000"
            opacity={0.7}
          />
          <Bar stackId="a" dataKey="오이노균병" fill="#85c200" opacity={1.0} />
          <Bar
            stackId="a"
            dataKey="오이흰가루병"
            fill="#85c200"
            opacity={0.7}
          />
          <Bar
            stackId="a"
            dataKey="토마토잿빛곰팡이병"
            fill="#ff6f51"
            opacity={1.0}
          />
          <Bar
            stackId="a"
            dataKey="토마토흰가루병"
            fill="#ff6f51"
            opacity={0.8}
          />
          <Bar stackId="a" dataKey="열과" fill="#ff6f51" opacity={0.6} />
          <Bar
            stackId="a"
            dataKey="시설포도탄저병"
            fill="#924A70"
            opacity={1.0}
          />
          <Bar
            stackId="a"
            dataKey="시설포도노균병"
            fill="#924A70"
            opacity={0.8}
          />
          <Bar stackId="a" dataKey="일소피해" fill="#924A70" opacity={0.6} />
          <Bar
            stackId="a"
            dataKey="축과병"
            fill="#924A70"
            opacity={0.4}
            radius={[15, 15, 0, 0]}
          />
          <Bar
            stackId="a"
            dataKey="파프리카흰가루병"
            fill="#ff9c00"
            opacity={1.0}
          />
          <Bar
            stackId="a"
            dataKey="파프리카잘록병"
            fill="#ff9c00"
            opacity={0.8}
          />
          <Bar
            stackId="a"
            dataKey="딸기잿빛곰팡이병"
            fill="#ED1B24"
            opacity={1.0}
          />
          <Bar
            stackId="a"
            dataKey="딸기흰가루병"
            fill="#ED1B24"
            opacity={0.8}
          />
          <Bar stackId="a" dataKey="냉해피해" fill="#0033CC" opacity={0.6} />
          <Bar stackId="a" dataKey="칼슘결핍" fill="#BBBBBB" opacity={0.6} />
          <Bar
            stackId="a"
            dataKey="다량원소결핍 (P)"
            fill="#CAA6FE"
            opacity={0.6}
          />
          <Bar
            stackId="a"
            dataKey="다량원소결핍 (K)"
            fill="#FFD400"
            opacity={0.6}
          />
          <Bar
            stackId="a"
            dataKey="다량원소결핍 (N)"
            fill="#50BCDF"
            opacity={0.6}
            radius={[15, 15, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sentry.withProfiler(Cropchart);

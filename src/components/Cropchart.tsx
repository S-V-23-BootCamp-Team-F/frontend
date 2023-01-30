import React from "react";
import { CartesianGrid, XAxis, YAxis, BarChart, Bar, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Cropchart = () => {
  const data = [
    {
      "name": "고추",
      "고추탄저병": 4000,
      "고추흰가루병": 2400,
      "고추칼슘결핍": 2578,
    },
    {
      "name": "포도",
      "포도탄저병": 2390,
      "포도노균병": 3800,
      "포도축과병": 8721,
      "포도일소병": 2381,
    },
    {
      "name": "딸기",
      "딸기잿빛곰팡이": 2000,
      "딸기흰가루병": 9800,
      "딸기냉해피해": 1232,
    },
    {
      "name": "오이",
      "오이노균병": 2780,
      "오이흰가루병": 3908,
      "오이다량원소결핍": 1287,
      "오이냉해피해":1587
    },
    {
      "name": "파프리카",
      "모잘록병": 1890,
      "파프리카흰가루병": 4800,
      "파프리카다량원소결핍": 2476,
      "파프리카칼슘결핍":2487
    },
    {
      "name": "토마토",
      "토마토잿빛곰팡이병": 2390,
      "토마토흰가루병": 3800,
      "토마토질소결핍": 4287,
      "토마토인결핍": 2487,
      "토마토칼륨결핍": 5782
    },
  ]
  return (
    <div className="mt-10 ml-4 w-800 h-80">
    <ResponsiveContainer>
    <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="고추탄저병" stackId="a" fill="#3E6A1D" opacity={1.0}/>
    <Bar dataKey="고추흰가루병" stackId="a" fill="#3E6A1D" opacity={0.7}/>
    <Bar dataKey="고추칼슘결핍" stackId="a" fill="#3E6A1D" opacity={0.4}/>

    <Bar dataKey="포도탄저병" stackId="a" fill="#924A70" opacity={1.0}/>
    <Bar dataKey="포도노균병" stackId="a" fill="#924A70" opacity={0.8}/>
    <Bar dataKey="포도축과병" stackId="a" fill="#924A70" opacity={0.6}/>
    <Bar dataKey="포도일소병" stackId="a" fill="#924A70" opacity={0.4}/>

    <Bar dataKey="딸기잿빛곰팡이" stackId="a" fill="#ED1B24" opacity={1.0}/>
    <Bar dataKey="딸기흰가루병" stackId="a" fill="#ED1B24" opacity={0.7}/>
    <Bar dataKey="딸기냉해피해" stackId="a" fill="#ED1B24" opacity={0.4}/>

    <Bar dataKey="오이노균병" stackId="a" fill="#92C002" opacity={1.0}/>
    <Bar dataKey="오이흰가루병" stackId="a" fill="#92C002" opacity={0.8}/>
    <Bar dataKey="오이다량원소결핍" stackId="a" fill="#92C002" opacity={0.6}/>
    <Bar dataKey="오이냉해피해" stackId="a" fill="#92C002" opacity={0.4}/>

    <Bar dataKey="모잘록병" stackId="a" fill="#CE534A" opacity={1.0}/>
    <Bar dataKey="파프리카흰가루병" stackId="a" fill="#CE534A" opacity={0.8}/>
    <Bar dataKey="파프리카다량원소결핍" stackId="a" fill="#CE534A" opacity={0.6}/>
    <Bar dataKey="파프리카칼슘결핍" stackId="a" fill="#CE534A" opacity={0.4}/>

    <Bar dataKey="토마토잿빛곰팡이병" stackId="a" fill="#F6795B" opacity={1.0}/>
    <Bar dataKey="토마토흰가루병" stackId="a" fill="#F6795B" opacity={0.9}/>
    <Bar dataKey="토마토질소결핍" stackId="a" fill="#F6795B" opacity={0.7}/>
    <Bar dataKey="토마토인결핍" stackId="a" fill="#F6795B" opacity={0.5}/>
    <Bar dataKey="토마토칼륨결핍" stackId="a" fill="#F6795B" opacity={0.4}/>
  </BarChart>
  </ResponsiveContainer>
  </div>
  );
};

export default Cropchart;
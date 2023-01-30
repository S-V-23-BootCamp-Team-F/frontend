import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Periodchart = () => {
  const [perioddata,setPerioddata] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(1);
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  };
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
    <div className="flex flex-col">
      <select
        className="m-auto mr-4 w-auto bg-background text-center font-kor-bold text-2xl md:mt-0"
        onChange={indexHandler}
      >
        <option value="1">고추</option>
        <option value="2">포도</option>
        <option value="3">딸기</option>
        <option value="4">오이</option>
        <option value="5">파프리카</option>
        <option value="6">토마토</option>
      </select>
      <div className="ml-4 w-800 h-80">
        <ResponsiveContainer>
          <LineChart data={perioddata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="고추탄저병" stroke="#3E6A1D" opacity={1.0}/>
            <Line type="monotone" dataKey="고추흰가루병" stroke="#3E6A1D" opacity={0.4} />

            <Line type="monotone" dataKey="시설포도탄저병" stroke="#924A70" opacity={1.0}/>
            <Line type="monotone" dataKey="시설포도노균병" stroke="#924A70" opacity={0.7}/>
            <Line type="monotone" dataKey="축과병" stroke="#924A70" opacity={0.4}/>

            <Line type="monotone" dataKey="딸기잿빛곰팡이병" stroke="#ED1B24" opacity={1.0}/>
            <Line type="monotone" dataKey="딸기흰가루병" stroke="#ED1B24" opacity={0.4}/>

            <Line type="monotone" dataKey="오이노균병" stroke="#92C002" opacity={1.0}/>
            <Line type="monotone" dataKey="오이흰가루병" stroke="#92C002" opacity={0.4}/>

            <Line type="monotone" dataKey="토마토잿빛곰팡이병" stroke="#F6795B" opacity={1.0}/>
            <Line type="monotone" dataKey="토마토흰가루병" stroke="#F6795B" opacity={0.4}/>

            <Line type="monotone" dataKey="파프리카흰가루병" stroke="#CE534A" opacity={1.0}/>
            <Line type="monotone" dataKey="파프리카잘록병" stroke="#CE534A" opacity={0.4}/>

            <Line type="monotone" dataKey="열과" stroke="#8B0000" opacity={1.0}/>
            <Line type="monotone" dataKey="칼슘결핍" stroke="#BC8F8F" opacity={1.0}/>
            <Line type="monotone" dataKey="일소피해" stroke="#FF6347" opacity={1.0}/>
            <Line type="monotone" dataKey="냉해피해" stroke="#00BFFF" opacity={1.0}/>

            <Line type="monotone" dataKey="다량원소결핍 (P)" stroke="#000080" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (K)" stroke="#7B86EE" opacity={1.0}/>
            <Line type="monotone" dataKey="다량원소결핍 (N)" stroke="#00FF7F" opacity={1.0}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Periodchart;
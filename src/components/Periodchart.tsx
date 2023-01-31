import React, { useEffect, useState } from "react";
import axios from "axios";
import Periodline from "src/components/Periodline";
import { useNavigate } from "react-router";

const Periodchart = () => {
  const [perioddata,setPerioddata] = useState<any[]>([]);
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(1);
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  };
    useEffect(() => {
      (async () => {
        await axios
          .get("https://api.cropdoctor.shop/api/v1/plants/linechart/",{
            params : {
              type : index
            }
          })
          .then((res) => {
            setPerioddata(perioddata => res.data.result);
          }) // 응답
          .catch((error) => {
            console.log(error);
            alert("차트데이터 불러오기 실패.");
            navigate('/');
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
      <Periodline perioddata={perioddata} index={index}/>
    </div>
  );
};

export default Periodchart;
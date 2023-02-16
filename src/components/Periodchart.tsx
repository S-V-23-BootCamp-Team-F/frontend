import React, { useEffect, useState } from "react";
import axios from "axios";
import Periodline from "src/components/Periodline";
import { useNavigate } from "react-router";
import * as Sentry from "@sentry/react";

const Periodchart = () => {
  const [perioddata, setPerioddata] = useState<any[]>([]);
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(1);
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  };
  useEffect(() => {
    (async () => {
      await axios
        .get("https://api.cropdoctor.shop/api/v1/plants/linechart/", {
          params: {
            type: index,
          },
        })
        .then((res) => {
          setPerioddata((perioddata) => res.data.result);
        }) // 응답
        .catch((error) => {
          console.log(error);
          alert("차트데이터 불러오기 실패.");
          navigate("/");
        });
    })();
  }, [index]);

  function Summary() {
    if (index == 1) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 고추의 병은 고추탄저병이에요."
        </span>
      );
    } else if (index == 2) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 포도의 병은 시설포도탄저병이에요."
        </span>
      );
    } else if (index == 3) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 딸기의 병은 딸기흰가루병이에요."
        </span>
      );
    } else if (index == 4) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 오이의 병은 오이노균병이에요."
        </span>
      );
    } else if (index == 5) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 파프리카의 병은 파프리카잘록병이에요."
        </span>
      );
    } else if (index == 6) {
      return (
        <span className="mt-12 ml-8 font-kor-bold text-xl md:text-2xl">
          "2월에 가장 많이 발생한 토마토의 병은 다량원소결핍 (N)이에요."
        </span>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="m-auto flex flex-col items-center">
      <Summary />
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
      <Periodline perioddata={perioddata} index={index} />
      <span className="mt-4 ml-4 font-kor-bold text-xl">
        기간 별 작물 질병건수
      </span>
    </div>
  );
};

export default Sentry.withProfiler(Periodchart);

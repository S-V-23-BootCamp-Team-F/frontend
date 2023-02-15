import React, { useEffect, useState } from "react";

import Navbar from "src/components/Navbar";
import Cropchart from "src/components/Cropchart";
import Periodchart from "src/components/Periodchart";
import * as Sentry from "@sentry/react";

const StatisticsPage = () => {
  const [seeperiod, setSeeperiod] = useState<boolean>(false);

  function Barswitch() {
    setSeeperiod(false);
  }

  function Lineswitch() {
    setSeeperiod(true);
  }

  function Chart() {
    if (seeperiod == false) {
      return (
        <div className="flex flex-col items-center">
          <span className="mt-12 mb-6 ml-4 font-kor-bold text-xl md:text-2xl">
            "가장 많이 조회된 병해 작물은 토마토입니다."
          </span>
          {/*위 차트*/}
          <div className="m-auto">
            <Cropchart />
          </div>
          <span className="mt-4 ml-4 font-kor-bold text-xl">
            작물 별 질병건수
          </span>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <div className="m-auto">
            <Periodchart />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat pr-12">
      {/*nav바*/}
      <div className="mb-10">
        <Navbar />
      </div>
      {/*내용*/}
      <div className="my-auto px-12 pb-10 pt-4">
        <Chart />
        {/*아래쪽*/}
        {seeperiod == false ? (
          <div className="relative mt-4 mb-10">
            <button
              className="absolute ml-48 border-b-2 border-black font-kor-medium"
              onClick={Barswitch}
            >
              작물 별 질병건수
            </button>
            <button
              className="absolute right-36 font-kor-medium text-gray-600"
              onClick={Lineswitch}
            >
              기간 별 작물 질병건수
            </button>
          </div>
        ) : (
          <div className="relative mt-4 mb-10">
            <button
              className="absolute ml-48 font-kor-medium text-gray-600"
              onClick={Barswitch}
            >
              작물 별 질병건수
            </button>
            <button
              className="absolute right-36 border-b-2 border-black font-kor-medium"
              onClick={Lineswitch}
            >
              기간 별 작물 질병건수
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sentry.withProfiler(StatisticsPage);

function usestate(): [any, any] {
  throw new Error("Function not implemented.");
}

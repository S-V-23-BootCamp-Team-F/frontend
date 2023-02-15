import React from "react";
import nomal from "src/images/nomal.png";
import Navbar from "src/components/Navbar";
import "src/media.css";
import { useLocation } from "react-router-dom";
import * as Sentry from "@sentry/react";

const NomalResultPage = () => {
  const location = useLocation();
  // console.log(state);

  return (
    // 전체
    <div className=" flex min-h-screen w-full flex-col overflow-y-auto bg-background bg-grass bg-no-repeat">
      {/* nav바 */}
      <Navbar />
      {/* 본문 */}
      <div className="mt-40 flex flex-col place-content-evenly content-center items-center px-12 pt-4 md:flex-row ">
        {/* 왼쪽 */}
        <div className="flex items-center ">
          <img
            src={location.state.result.result_picture} //수정 ⭕️
            className="h-356 w-600 rounded-xl object-cover"
          />
        </div>
        {/* 오른쪽 */}
        <div className="place-content-center text-center md:text-left lg:text-left">
          <div className="font-kor-bold text-2xl">
            진단결과&nbsp;
            <span className="font-kor-bold text-disease">정상&nbsp;</span>입니다
            !
          </div>
          <img
            src={location.state.icorn}
            className="h-356 w-600 object-contain"
          />
          <div className="mt-24 font-kor-bold text-2xl md:text-left lg:text-left">
            우리의 {location.state.result.plant.type}는 건강합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentry.withProfiler(NomalResultPage);

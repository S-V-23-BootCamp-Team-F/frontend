import React from "react";
import tomato from "src/images/tomato.jpg";
import tomato2 from "src/images/tomato2.jpg";
import tomato3 from "src/images/tomato3.jpg";
import die from "src/images/dietomato.png";
import "src/media.css";
import Navbar from "src/components/Navbar";
import { useLocation } from "react-router-dom";

const AbnomalResultPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    // 전체
    <div className="relative flex max-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat">
      {/* nav바 */}
      <Navbar />

      {/* 본문 */}
      <div className="flex flex-col place-content-evenly items-center px-12 pt-4 md:flex-row ">
        {/* 본문 왼쪽 */}
        <div className="content-center pt-24">
          <div className="flex flex-col ">
            <img
              src={location.state.result_url}
              className="sub_tomato1 h-356 w-600 rounded-xl object-cover"
            />
            <div className="mt-2  flex flex-col items-center font-kor-bold text-xl  ">
              {location.state.disease_name}
            </div>
          </div>
          <div className="mt-5 h-356 w-600 object-cover">
            <div className="flex ">
              <img
                src={tomato3}
                className="sub_tomato2 mr-2.5 h-356 w-72 rounded-xl object-cover"
              />
              <img
                src={tomato2}
                className="sub_tomato3 ml-2.5 h-356 w-72 rounded-xl object-cover"
              />
            </div>
            <div className="mt-2 flex flex-col items-center font-kor-bold text-xl">
              관련 사진
            </div>
          </div>
        </div>
        {/* 본문 오른쪽 */}
        <div className="pl-4 pt-24">
          <div className="">
            <div className="font-kor-bold text-2xl">
              진단결과&nbsp;&nbsp;
              <span className="font-kor-bold text-disease">
                {location.state.disease_name}
              </span>
              으로 의심됩니다.
            </div>
            <div className="flex">
              <img src={die} className="die_tomato"></img>
              <div className="flex place-items-end font-kor-medium">
                우리의 {location.state.plant_name}는 가셨습니다..
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="place-content-between">
              <div className="mb-2 font-eng-bold text-2xl">Causation</div>
              <div className="font-kor-regula mb-7 h-130 max-w-2xl overflow-y-auto border-black text-xl">
                {location.state.feature}
              </div>
            </div>
            <div>
              <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
                {location.state.plant_explaination}
              </div>
            </div>
            <div>
              <div className="mb-2  font-eng-bold text-2xl">Cure</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
                {location.state.solution}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbnomalResultPage;

import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "src/components/Navbar";
import "src/media.css";

const AbnomalResultPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    // 전체
    <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat">
      {/* nav바 */}
      <div className="mb-28">
        <Navbar />
      </div>

      {/* 본문 */}
      <div className=" flex flex-col place-content-evenly items-center px-12 md:flex-row">
        {/* 본문 왼쪽 */}
        <div className="">
          <div className="max-md:pt-30 mr-14 flex flex-col max-sm:pt-28">
            <img
              src={location.state.result.result_picture} // 수정 ⭕️
              className="h-356 w-600 rounded-xl object-cover"
            />
            <div className="mt-2 flex flex-col items-center font-kor-bold text-xl  ">
              {location.state.result.disease.name}
            </div>
          </div>
          <div className="mt-5 h-356 w-600 object-cover">
            <div className="mt-8 flex ">
              <img
                src={location.state.result.disease.example}
                className="mr-2.5 h-356 w-72 rounded-xl object-cover"
              />
              <img
                src={location.state.result.disease.example2}
                className="ml-2.5 h-356 w-72 rounded-xl object-cover"
              />
            </div>
            <div className="mt-2 flex flex-col items-center font-kor-bold text-xl">
              관련 사진
            </div>
          </div>
        </div>
        {/* 본문 오른쪽 */}
        <div className=" place-content-center pt-12 max-lg:ml-[10px] max-md:ml-[-20px] max-md:pt-28 max-sm:ml-[-40px] ">
          <div className="">
            <div className="font-kor-bold text-2xl">
              진단결과&nbsp;&nbsp;
              <span className="font-kor-bold text-disease">
                {location.state.result.disease.name}
              </span>
              으로 의심됩니다.
            </div>
            <div className="flex">
              <img
                src={location.state.icorn}
                className="h-30 w-28 bg-contain"
              ></img>
              <div className="ml-3 flex place-items-end bg-contain font-kor-medium">
                우리의 {location.state.result.plant.type}는 가셨습니다...
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="place-content-between">
              <div className="mb-2 font-eng-bold text-2xl">Causation</div>
              <div className="h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
                {location.state.result.disease.cause}
              </div>
            </div>
            <div>
              <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
                {location.state.result.disease.feature}
              </div>
            </div>
            <div>
              <div className="mb-2  font-eng-bold text-2xl">Cure</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
                {location.state.result.disease.solution}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbnomalResultPage;

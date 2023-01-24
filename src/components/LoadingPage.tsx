import React from "react";
import DotLoader from "react-spinners/DotLoader";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto bg-background pb-20">
      <div>
        <div className="mb-20 pb-10 text-center font-eng-bold text-4xl text-button">
          Welcome to the Crop Doctor !
        </div>
        <DotLoader color="#7AC35A" className="mt-8 mb-8 ml-48">
          스피너
        </DotLoader>
        <div className="mt-20 pt-10 text-center font-kor-bold text-2xl">
          AI 분석 결과를 불러오는 중입니다. . .
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

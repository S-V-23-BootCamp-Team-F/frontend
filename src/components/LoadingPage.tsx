import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto bg-background">
      <div>
        <div className="font-eng-bold text-4xl text-button">
          Welcome to the Crop Doctor !
        </div>
        <div className="font-kor-bold text-2xl">
          AI 분석 결과를 불러오는 중입니다. . .
        </div>
      </div>
      <div>스피너</div>
    </div>
  );
};

export default LoadingPage;

import React from "react";
import Healthy from "src/components/Healthy";
import Diseased from "src/components/Diseased";
import Navbar from "src/components/Navbar";
import Userhistory from "src/components/Userhistory";

const HistoryPage = () => {
  return (
    <div className="box-border h-screen w-screen overflow-x-hidden bg-background bg-grass bg-no-repeat">
      {/*nav바*/}
      <Navbar />
      <div className="flex flex-col pt-32">
        {/*카테고리*/}
        <select className="m-auto mr-5 mb-3 w-auto bg-background text-center text-2xl font-bold">
          <option value="카테고리">카테고리</option>
          <option value="strawberry">딸기</option>
          <option value="grape">포도</option>
          <option value="tomato">토마토</option>
          <option value="cucumber">오이</option>
          <option value="chillypepper">고추</option>
          <option value="paprika">파프리카</option>
        </select>
        {/*내용*/}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap">
            <div className="m-auto w-80 h-80">
              <Userhistory />
            </div>
            <div className="m-auto w-80 h-80">
              <Diseased />
            </div>
            <div className="m-auto w-80 h-80">
              <Healthy />
            </div>
            <div className="m-auto w-80 h-80">
              <Diseased />
            </div>
            <div className="m-auto w-80 h-80">
              <Healthy />
            </div>
            <div className="m-auto w-80 h-80">
              <Diseased />
            </div>
            <div className="m-auto w-80 h-80">
              <Healthy />
            </div>
            <div className="m-auto w-80 h-80">
              <Diseased />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

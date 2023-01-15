import React from "react";
import Healthy from "src/assets/components/Healthy";
import Diseased from "src/assets/components/Diseased";
import Logo from "src/assets/images/logo.svg";
import Category from "src/assets/images/category.svg";

const HistoryPage = () => {
  return (
    <div className="box-border h-screen w-screen overflow-x-hidden bg-background bg-grass bg-no-repeat">
      {/*nav바*/}
      <div className="mb-10 h-auto w-screen">
        {/*임시로고*/}
        <img className="" src={Logo} alt="CropDRLogo" />
      </div>
      <div className="flex flex-col">
        {/*임시카테고리*/}
        <img className="ml-auto" src={Category} />
        {/*내용*/}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap">
            <Healthy />
            <Diseased />
            <Healthy />
            <Diseased />
            <Healthy />
            <Diseased />
            <Healthy />
            <Diseased />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

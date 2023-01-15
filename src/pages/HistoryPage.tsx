import React from "react";
import Healthy from "src/assets/components/Healthy";
import Diseased from "src/assets/components/Diseased";
import Logo from "src/assets/images/logo.svg";
import Category from "src/assets/images/category.svg";

const HistoryPage = () => {
  return (
    <div className='w-screen h-screen box-border bg-background bg-grass bg-no-repeat overflow-x-hidden'>
        {/*nav바*/}
        <div className='w-screen h-auto mb-10'>
            {/*임시로고*/}
            <img className='' src={Logo} alt="CropDRLogo"/>
        <select className="w-auto m-auto mr-5 mb-3 bg-background font-bold text-2xl text-center">
              <option value="카테고리">카테고리</option>
              <option value="strawberry">딸기</option>
              <option value="grape">포도</option>
              <option value="tomato">토마토</option>
              <option value="cucumber">오이</option>
              <option value="chillypepper">고추</option>
              <option value="paprika">파프리카</option>
            </select>
          {/*내용*/}
          <div className='flex flex-col items-center'>
            <div className='flex flex-wrap'>
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
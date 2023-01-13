import React from "react";
import Healthy from "@/assets/components/Healthy";
import Diseased from "@/assets/components/Diseased";

const HistoryPage = () => {
  return (
    <div className=' w-screen h-screen box-border bg-background'>
        {/*nav바 */}
        <div>
            {/*임시로고*/}
            <img className='' src="src/assets/images/logo.svg" alt="CropDRLogo"/>
        </div>
        <div className='items-center'>
        {/*임시카테고리*/}
        <img className='mr-0' src='src/assets/images/category.svg'/>
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
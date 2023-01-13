import React from "react";
import Healthy from "src/assets/components/Healthy";
import Diseased from "src/assets/components/Diseased";

const HistoryPage = () => {
  return (
    <div className='w-screen h-screen box-border bg-background bg-grass bg-no-repeat overflow-x-hidden'>
        {/*nav바 */}
        <div className='w-screen h-auto mb-10'>
            {/*임시로고*/}
            <img className='' src="src/assets/images/logo.svg" alt="CropDRLogo"/>
        </div>
        <div className='flex flex-col'>
        {/*임시카테고리*/}
          <img className='ml-auto' src='src/assets/images/category.svg'/>
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
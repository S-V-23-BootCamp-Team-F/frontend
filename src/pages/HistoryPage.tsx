import React from "react";
import Healthy from "@/assets/components/Healthy";
import Diseased from "@/assets/components/Diseased";

const HistoryPage = () => {
  return (
    <div className=' w-screen h-screen box-border bg-background'>
        {/*헤더 */}
        <div>
            {/*임시로고*/}
            <img className='' src="src/assets/images/logo.svg" alt="CropDRLogo"/>
        </div>
        <div className='flex justify-center items-center'>
        {/*임시카테고리*/}
        <img className='' src='src/assets/images/category.svg'/>
        {/*히스토리 컴포넌트*/}
        <div>
            <Healthy />
            <Diseased />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
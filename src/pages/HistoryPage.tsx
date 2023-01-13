import React from "react";

const HistoryPage = () => {
  return (
    <div className=' w-screen h-screen box-border'>
        {/*헤더 */}
        <div>
            {/*임시로고*/}
            <img className='' src="src/assets/images/logo.svg" alt="CropDRLogo"/>
        </div>
        <div className='flex justify-center items-center'>
        {/*제목*/}
        <span>히스토리</span>
        {/*임시카테고리*/}
        <img className='' src='src/assets/images/category.svg'/>
        {/*히스토리 컴포넌트*/}
        <div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
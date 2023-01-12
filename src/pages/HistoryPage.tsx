import React from "react";
import History from "src/assets/components/History";

const HistoryPage = () => {
  return (
    <div className='box-border w-full flex justify-center items-center'>
      {/*메뉴*/}
      <img className='top-5 left-5 w-8 h-8 absolute' src="/src/assets/images/menu.svg" alt="CropDRMenu"/>
      {/*로고*/}
      <img className='top-4 left-16 w-40 h-12 absolute' src="/src/assets/images/logo.svg" alt="CropDRLogo"/>
      {/*제목*/}
      <span className='font-title top-12 w-40 absolute text-4xl text-lime-600'>히스토리</span>
      {/*히스토리 컴포넌트*/}
      <div className="top-40 absolute">
        <History />
      </div>
    </div>
  );
};

export default HistoryPage;

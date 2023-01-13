import React from "react";
import History from "src/assets/components/History";

const HistoryPage = () => {
  return (
    <div className='box-border w-screen h-screen bg-green-50 flex justify-center items-center'>
      {/*배경이미지*/}
      <img className='top-16 left-0 absolute' src="src/assets/images/Backgroundgrass.svg"/>
      <img className='bottom-0 right-0 absolute' src="src/assets/images/Backgroundtree.png"/>
      {/*메뉴*/}
      <img className='top-5 left-5 w-8 h-8 absolute' src="src/assets/images/menu.svg" alt="CropDRMenu"/>
      {/*로고*/}
      <img className='top-4 left-16 w-40 h-12 absolute' src="src/assets/images/logo.svg" alt="CropDRLogo"/>
      {/*제목*/}
      <span className='font-title text-project-green top-24 w-40 absolute text-4xl'>히스토리</span>
      {/*히스토리 컴포넌트*/}
      <div className="top-40 absolute justify-center grid sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-stretch">
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
        <div><History /></div>
      </div>
    </div>
  );
};

export default HistoryPage;

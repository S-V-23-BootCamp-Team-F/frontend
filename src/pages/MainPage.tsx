import React from "react";

// background images
import bg_tree1 from "../assets/images/bg_tree1.svg";
import bg_tree2 from "../assets/images/bg_tree2.svg";

// selectimages
import strawberry from "../assets/images/strawberry.svg";
import tomato from "../assets/images/tomato.svg";
import cucumber from "../assets/images/cucumber.svg";
import paprika from "../assets/images/paprika.svg";
import grape from "../assets/images/grape.svg";
import chillypepper from "../assets/images/chillypepper.svg";

const MainPage = () => {
  return (
    // Content 전체 감싸는 div
    <div id="content" className="min-h-screen w-screen bg-[#EFF6F0] text-black">
      {/** 여기에 헤더 넣기 */}
      <div>header</div>
      <div id="what2do" className="border-2 text-center">
        what2do
      </div>
      <div id="select-fruit" className="border-2 flex mt-2 justify-center">
        <img src={strawberry} className="h-fit" />
        <img src={tomato} className="h-fit" />
        <img src={cucumber} className="h-fit" />
        <img src={paprika} className="h-fit" />
        <img src={grape} className="h-fit" />
        <img src={chillypepper} className="h-fit" />
      </div>
      {/** 배경 나무들 넣기 */}
      <div></div>
      <div></div>
    </div>
  );
};

export default MainPage;

import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <div className="font-press-medium text-blue-900">
      <div id="navbar">
        <Navbar />
      </div>
      {/** main 전체 묶음 */}
      <>
        <div id="main-wrap" className="flex flex-row w-full">
          <div id="upload-image-wrap" className=" box-border border-2 w-9/12">
            이미지 업로드 묶음
          </div>
          <div id="tutorial-wrap" className=" box-border border-2 w-full">
            {" "}
            튜토리얼 묶음
          </div>
        </div>
      </>
    </div>
  );
};

export default MainPage;

import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <div className="font-press-medium text-blue-900">
      <div id="navbar">
        <Navbar />
      </div>
      <>
        {/** main 전체 시작 */}
        <div id="main-wrap" className="flex lg:flex-row flex-col w-full">
          {/** 이미지 업로드 부분 시작 */}
          <div
            id="upload-image-wrap"
            className=" box-border border-2 lg:w-9/12 w-full lg:h-[700px]"
          >
            <select name="plant" id="plant" className=" text-center">
              <option value="카테고리">카테고리</option>
              <option value="strawberry">딸기</option>
              <option value="grape">포도</option>
              <option value="tomato">토마토</option>
              <option value="cucumber">오이</option>
              <option value="chillypepper">고추</option>
              <option value="paprika">파프리카</option>
            </select>
            <div
              id="upload-image"
              className="box-border border-4 border-dashed border-black lg:h-[500px] h-[400px] xl:mx-30 lg:mx-12 md:mx-40 mx-12"
            >
              이미지 업로드
            </div>
          </div>
          {/** 이미지 업로드 부분 끝 */}
          {/** 튜토리얼 부분 시작 */}
          <div
            id="tutorial-wrap"
            className=" box-border border-2 w-full lg:h-[700px]"
          >
            {" "}
            튜토리얼 묶음
          </div>
          {/** 튜토리얼 부분 시작 */}
        </div>
        {/** main 전체 끝 */}
      </>
    </div>
  );
};

export default MainPage;

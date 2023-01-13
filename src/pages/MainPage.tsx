import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";

// images
import uploadImage from "../images/uploadImage.svg";

// exampleimages
import example1 from "../images/example1.png";
import example2 from "../images/example2.png";
import example3 from "../images/example3.png";

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
          <div id="upload-image-wrap" className="lg:w-9/12 w-full lg:h-[700px]">
            <select
              name="plant"
              id="plant"
              className=" mt-12 text-centermt-10 xl:ml-30 lg:ml-12 md:ml-40 ml-12 font-bold"
            >
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
              className="box-border border-4 border-dashed border-black lg:h-[500px] h-[400px] xl:mx-30 lg:mx-12 md:mx-40 mx-12 bg-uploadImage"
            >
              <img
                src={uploadImage}
                className="w-full h-full object-scale-down"
              />
            </div>
            <div
              id="diagnose-button"
              className="w-full mt-6 text-center xl:px-30 lg:px-12 md:px-40 px-12"
            >
              <button className="text-white bg-button rounded-lg h-10 w-full">
                <b>진단하기</b>
              </button>
            </div>
          </div>
          {/** 이미지 업로드 부분 끝 */}
          {/** 튜토리얼 부분 시작 */}
          <div
            id="tutorial-wrap"
            className="w-full lg:h-[700px] mt-10 lg:ml-12 md:ml-40 ml-12 text-black"
          >
            <>
              <b>Explanation</b> <br />
              식물의 이상 부위를 분석해 질병 및 방제방법을 알려줍니다
              <br />
              <br />
              <br />
              <b>Flow</b> <br />
              1. 식물의 이상 부위로 의심되는 곳을 촬영합니다 <br />
              2. 사진 붙히는 곳 위에 식물 카테고리를 선택합니다 <br />
              3. 촬영한 사진을 업로드 합니다 <br />
              4. <b>'진단하기'</b> 버튼을 누르고 기다립니다 <br />
              5. 분석된 정보를 바탕으로 작물에게 조치를 해 주시면 됩니다 <br />
              <br />
              <br />
            </>
            <>
              <b>Expectation</b>
              <div
                id="expectation-wrap"
                className="flex flex-row box-border border-2 border-button rounded-xl xl:mr-40 lg:mr-12 md:mr-80 mr-32"
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    <img src={example1} />
                  </div>
                  <div className="flex flex-row">
                    <img src={example2} />
                    <img src={example3} />
                  </div>
                </div>
                <div
                  id="expectation-text"
                  className="flex flex-col justify-center"
                >
                  <b>원인</b>
                  이 질병은 '어떠한 이유'로 인해 발생해요 <br />
                  <br />
                  <b>질병</b>
                  이 질병은 '이런 증상'을 나타내요 <br />
                  <br />
                  <b>치료</b>
                  이 질병은 '이런 방법'으로 치료해야 해요 <br />
                </div>
              </div>
            </>
          </div>
          {/** 튜토리얼 부분 시작 */}
        </div>
        {/** main 전체 끝 */}
      </>
    </div>
  );
};

export default MainPage;

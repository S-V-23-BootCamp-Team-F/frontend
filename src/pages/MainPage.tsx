import React, { useState, useRef, useEffect } from "react";

// background images
import bg_tree1 from "../images/bg_tree1.svg";
import bg_tree2 from "../images/bg_tree2.svg";

// selectimages
import strawberry from "../images/strawberry.svg";
import tomato from "../images/tomato.svg";
import cucumber from "../images/cucumber.svg";
import paprika from "../images/paprika.svg";
import grape from "../images/grape.svg";
import chillypepper from "../images/chillypepper.svg";

// uploadimage
import uploadimage from "../images/uploadimage.svg";

// image preview function
const imageMimeType = /image\/(png|jpg|jpeg|svg)/i;

const MainPage = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const activeList = {
    isActive1: Boolean,
    isActive2: Boolean,
    isActive3: Boolean,
    isActive4: Boolean,
    isActive5: Boolean,
    isActive6: Boolean,
  };

  const setActiveList = {
    setIsActive1: Boolean,
    setIsActive2: Boolean,
    setIsActive3: Boolean,
    setIsActive4: Boolean,
    setIsActive5: Boolean,
    setIsActive6: Boolean,
  };
  // for (let i=0; i<6; i++){
  //   const [activeList(i)]
  // }

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleClick1 = (event: any) => {
    setIsActive1((current) => !current);
  };
  const handleClick2 = (event: any) => {
    setIsActive2((current) => !current);
  };
  const handleClick3 = (event: any) => {
    setIsActive3((current) => !current);
  };
  const handleClick4 = (event: any) => {
    setIsActive4((current) => !current);
  };
  const handleClick5 = (event: any) => {
    setIsActive5((current) => !current);
  };
  const handleClick6 = (event: any) => {
    setIsActive6((current) => !current);
  };

  return (
    // Content 전체 감싸는 div
    <div id="content" className="min-h-screen w-screen bg-[#EFF6F0] text-black">
      {/** 여기에 test code 넣기 */}

      {/** 여기에 헤더 넣기 */}
      <div>header</div>
      <div id="what2do" className="text-center">
        식물 진단
      </div>
      <div
        id="select-fruit"
        className="md:flex flex-none mt-2 justify-center md:gap-4"
      >
        <div id="left-fruit" className="flex md:gap-4 gap-2 justify-center">
          <img
            src={strawberry}
            typeof="button"
            className={
              isActive1
                ? "hover:cursor-pointer shadow-xl bg-[#F8766B] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick1}
          />
          <img
            src={tomato}
            className={
              isActive2
                ? "hover:cursor-pointer shadow-xl bg-[#F7795B] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick2}
          />
          <img
            src={cucumber}
            className={
              isActive3
                ? "hover:cursor-pointer shadow-xl bg-[#ABC25C] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick3}
          />
        </div>
        <div id="right-fruit" className="flex md:gap-4 gap-2 justify-center">
          <img
            src={paprika}
            className={
              isActive4
                ? "hover:cursor-pointer shadow-xl bg-[#CE534A] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick4}
          />
          <img
            src={grape}
            className={
              isActive5
                ? "hover:cursor-pointer shadow-xl bg-[#B6B3BF] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick5}
          />
          <img
            src={chillypepper}
            className={
              isActive6
                ? "hover:cursor-pointer shadow-xl bg-[#F47775] rounded-lg"
                : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg"
            }
            onClick={handleClick6}
          />
        </div>
      </div>
      {/** Upload Contents */}
      <div
        id="contents-wrap"
        className="box-border flex flex-col md:flex-row items-center mt-2"
      >
        <div id="upload-here" className="h-full  w-8/12 mt-4">
          <div
            id="upload-place"
            className=" box-border border-8 border-dotted border-[#3CB65A] md:mx-12"
          >
            {/** preview image */}
            {fileDataURL ? (
              <p className="img-preview-wrapper">
                {<img src={fileDataURL} alt="preview" className="bg-contain" />}
              </p>
            ) : (
              <img src={uploadimage} />
            )}
          </div>
          <div id="buttonwrap" className="flex justify-center">
            <form>
              <p>
                <label htmlFor="image"></label>
                <input
                  type="file"
                  id="image"
                  accept=".png, .jpg, .jpeg, .svg"
                  onChange={changeHandler}
                />
              </p>
              <p>
                <input type="submit" />
              </p>
            </form>
          </div>
        </div>

        <div id="tutorial" className="justify-center w-8/12 h-full text-xl">
          <b>Explanation</b> <br />
          이상이 생긴 식물의 부분을 분석해 <br />
          질병명과 방제 방법을 알려줍니다 <br /> <br /> <br />
          <b>Flow</b> <br />
          1. 이상이 생긴 것으로 의심되는 곳을 촬영합니다 <br />
          2. 분석하고자 하는 식물을 위에서 선택합니다 <br />
          3. 촬영한 사진을 업로드 합니다 <br />
          4. 'Diagnosis'버튼을 누르고 기다립니다 <br />
          5. 분석된 정보를 바탕으로 방제에 도움이 되는 정보를 보여드립니다{" "}
          <br />
        </div>
      </div>

      {/** 배경 나무들 넣기 */}
      <div></div>
      <div></div>
    </div>
  );
};

export default MainPage;

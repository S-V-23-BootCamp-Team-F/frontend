import React, { useState, useRef, useEffect } from "react";

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

// uploadimage
import uploadimage from "../assets/images/uploadimage.svg";

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

  return (
    // Content 전체 감싸는 div
    <div id="content" className="min-h-screen w-screen bg-[#EFF6F0] text-black">
      {/** 여기에 test code 넣기 */}
      <>
        <form>
          <p>
            <label htmlFor="image"> Browse images </label>
            <input
              type="file"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={changeHandler}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
        {fileDataURL ? (
          <p className="img-preview-wrapper">
            {<img src={fileDataURL} alt="preview" />}
          </p>
        ) : null}
      </>
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
          <img src={strawberry} className="h-fit hover:cursor-pointer" />
          <img src={tomato} className="h-fit hover:cursor-pointer" />
          <img src={cucumber} className="h-fit hover:cursor-pointer" />
        </div>
        <div id="right-fruit" className="flex md:gap-4 gap-2 justify-center">
          <img src={paprika} className="h-fit hover:cursor-pointer" />
          <img src={grape} className="h-fit hover:cursor-pointer" />
          <img src={chillypepper} className="h-fit hover:cursor-pointer" />
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
            {/** onclick으로 업로드 한 이미지를 띄울 예정 */}
            <img src={uploadimage} className="w-screen hover:cursor-pointer" />
          </div>
          <div id="buttonwrap" className="flex justify-center">
            <form encType="multipart/form-data">
              <label htmlFor="file">이미지 업로드</label>
              <input id="file" type="file" />
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

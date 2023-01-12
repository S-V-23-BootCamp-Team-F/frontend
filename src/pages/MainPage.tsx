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

// 이 코드가 없을 시 이미지 프리뷰 기능이 정상 동작하지 않음
const imageMimeType = /image\/(png|jpg|jpeg|svg)/i;

// 메인페이지 시작
const MainPage = () => {
  let plant = useState([
    strawberry,
    tomato,
    cucumber,
    paprika,
    grape,
    chillypepper,
  ]);
  // file upload, filedata name 필드
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  let fruits = [strawberry, tomato, cucumber, paprika, grape, chillypepper];
  let fruit = ['strawberry', 'tomato', 'cucumber', 'paprika', 'grape', 'chillypepper']
  let [btnActive, setBtnActive] = useState(-1);
  let colorCode = ['F8766B','F7795B', 'ABC25C', 'CE534A','B6B3BF' ,'F47775'];

  const selectPlant = plant.map((number, idx) => {
    console.log(number);
  });

  const toggleActive = (idx:any, e:any) => {
    setBtnActive(idx);
    console.log(fruit[idx])
  };
  // 현재까지의 기능만으로도 line19 이외의 확장자는 선택되지 않지만, 예외상황을 방지하고자 하는 코드
  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    // 파일 확장자 확인 코드
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  // Q. FileReader, e(event)의 타입은 무엇인가?
  // 이미지의 경로를 받아 웹에 미리 볼 수 있도록 하는 코드
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

/*
  const [isActive, setIsActive] = useState({});

  // Q. 현재 방법을 찾지 못해 6갈래로 처참하게 나뉘어있는 상태관리용 TF변수들
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  // Q. 이 또한 마찬가지, 정리를 하고 하나로 묶는 작업이 필요할 듯 하다
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
*/

  return (
    // Content 전체 감싸는 div
    <div id="content" className="min-h-screen w-screen bg-[#EFF6F0] text-black">
      {/** 여기에 test code 넣기 */}

      {/** 여기에 헤더 넣기 */}
      <div>header</div>
      {/** 무엇을 하는 페이지인지를 알려주는 텍스트를 넣는 부분 */}
      <div id="what2do" className="text-center">
        식물 진단
      </div>
      {/** 과일 선택 부분 시작 */}
      <div
        id="select-fruit"
        className="md:flex flex-none mt-2 justify-center md:gap-4"
      >
        <div id="left-fruit" className="flex md:gap-4 gap-2 justify-center">
        {fruits.map((fruit: any, idx : any) => (
                   <img
                   src={fruit}
                   typeof="button"
                   className={ "btn" + 
                    (idx == btnActive
                      ? "hover:cursor-pointer shadow-xl bg-[#"+(colorCode[idx])+"] rounded-lg"
                      : "hover:cursor-pointer bg-slate-400 grayscale rounded-lg")
                  }
                  onClick={(e)=>toggleActive(idx,e)}
                 />
                ))}
        </div>
      </div>
      {/** 과일 선택 부분 끝 */}
      {/** 이미지 업로드, 튜토리얼 부분 시작 */}
      <div
        id="contents-wrap"
        className="box-border flex flex-col md:flex-row items-center mt-2"
      >
        <div id="upload-here" className="h-full  w-8/12 mt-4 flex justify-end">
          {/** preview image start */}
          <div>
            <div
              id="upload-place"
              className=" box-border border-8 border-dotted border-[#3CB65A] md:ml-10 w-10/12"
            >
              {fileDataURL ? (
                <p className="img-preview-wrapper">
                  {
                    <img
                      src={fileDataURL}
                      alt="preview"
                      className=" min-w-full max-h-96 object-contain"
                    />
                  }
                </p>
              ) : (
                <img src={uploadimage} className="min-w-full max-h-96" />
              )}
            </div>
            {/** preview image end */}
            {/** fileupload start */}
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
          {/** fileupload end */}
        </div>

        {/** tutorial start */}
        <div id="tutorial" className="flex justify-start w-8/12 h-full text-xl">
          <div>
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
        {/** tutorial end */}
      </div>
      {/** 이미지 업로드, 튜토리얼 부분 끝 */}

      {/** 배경 나무들 넣기 */}
      <div></div>
      <div></div>
    </div>
  );
};

export default MainPage;
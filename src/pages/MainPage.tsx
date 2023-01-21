import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "src/components/Navbar";
import { FileUploader } from "react-drag-drop-files";
// images
import uploadImage from "src/images/uploadImage.svg";
import bgImage from "src/images/bgImage.svg";
// exampleimages
import example1 from "src/images/example1.png";
import example2 from "src/images/example2.png";
import example3 from "src/images/example3.png";
import axios from "axios";
const MainPage = () => {
  const [imageName, setImageName] = useState<any>(null);
  const [plantIndex, setPlantIndex] = useState<Number>(-1);
  const [image, setImage]: any = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [buttonOn, setButtonOn] = useState(false);
  const navigate = useNavigate();
  const handleFile = async (file: any) => {
    if (plantIndex === -1) {
      alert("카테고리를 선택해 주세요");
      return;
    }
    if (file != null) {
      setButtonOn(true);
    }
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("picture", file);
    await axios({
      method: "post",
      url: "http://54.250.133.67/api/v1/plants/pictures/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response: any) {
        console.log(response.data);
        setImageName(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleOndragOver = (event: any) => {
    event.preventDefault();
  };
  const handleOndrop = (event: any) => {
    //prevent the browser from opening the image
    event.preventDefault();
    event.stopPropagation();
    //let's grab the image file
    const imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };
  // Q. 클릭했을 때 드래그, 드롭부분과 함께
  const handleClick = (event: any) => {
    const imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };
  const changeHandler = (e: any) => {
    console.log(e);
    const file = e.target.files[0];
    handleFile(file);
  };
  const getResult = async () => {
    await axios
      .get("http://18.179.229.39/api/v1/plants/ais/", {
        params: { picture: imageName, type: plantIndex },
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.disease_name === "정상") {
          navigate("/nomalresult", { state: res.data });
        } else {
          navigate("/abnomalresult", { state: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const plantIndexHandler = (e: any) => {
    setPlantIndex(e.target.value); // 작물 인덱스
  };
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden bg-background bg-grass bg-no-repeat">
      <div id="navbar">
        <Navbar />
      </div>
      <>
        {/** main 전체 시작 */}
        <div
          id="main-wrap"
          className="flex w-full flex-col pt-28 sm:pl-4 md:pl-8 lg:flex-row"
        >
          {/** 이미지 업로드 부분 시작 */}
          <div>
            <div
              id="upload-image-wrap"
              className="lg:w-12/12 w-full lg:h-[700px]"
            >
              <select
                name="plant"
                id="plant"
                className=" xl:ml-30 mt-12 ml-12 bg-background text-center font-bold md:ml-20 lg:ml-12"
                onChange={plantIndexHandler}
                required
              >
                <option value="">카테고리</option>
                <option value="0">고추</option>
                <option value="1">포도</option>
                <option value="2">딸기</option>
                <option value="3">오이</option>
                <option value="4">파프리카</option>
                <option value="5">토마토</option>
              </select>
              <div
                id="upload-image"
                className="xl:mx-30 bg-uploadImage mx-12 box-border h-[400px] border-4 border-dashed border-black bg-background md:mx-20 lg:mx-12 lg:h-[500px]"
              >
                <label htmlFor="drop_zone">
                  <div
                    className="drop_zone relative flex h-full justify-center hover:cursor-pointer"
                    onDragOver={handleOndragOver}
                    onDrop={handleOndrop}
                  >
                    {previewUrl ? (
                      <div className="image flex justify-center">
                        <img
                          src={previewUrl}
                          alt="image"
                          className="max-h-[500px] w-full object-contain max-md:max-h-[392px]"
                        />
                      </div>
                    ) : (
                      <img
                        src={uploadImage}
                        className="h-full w-full object-scale-down"
                      />
                    )}
                  </div>
                  <input
                    id="drop_zone"
                    type="file"
                    className="hidden"
                    onChange={changeHandler}
                    name="files"
                  />
                </label>
              </div>
              <div
                id="diagnose-button"
                className="xl:px-30 mt-6 w-full px-12 text-center md:px-20 lg:px-12"
              >
                {buttonOn ? (
                  <button
                    className="h-10 w-full rounded-lg bg-button text-white"
                    onClick={getResult}
                  >
                    <b>진단하기</b>
                  </button>
                ) : (
                  <button className="h-10 w-full cursor-default rounded-lg bg-gray-500 text-white">
                    <b>진단하기</b>
                  </button>
                )}
              </div>
              <div
                id="buttonwrap"
                className="mt-5 flex flex-row justify-center"
              ></div>
            </div>
            {/** 이미지 업로드 부분 끝 */}
          </div>
          {/** 튜토리얼 부분 시작 */}
          <div
            id="tutorial-wrap"
            className="font-press-medium mt-[62px] ml-12 w-full text-black md:ml-20 lg:ml-12 lg:h-[700px]"
          >
            <>
              <b>Explanation</b> <br />
              식물의 이상 부위를 분석해 질병 및 방제방법을 알려줍니다
              <br />
              <br />
              <b>Flow</b> <br />
              1. 식물의 이상 부위로 의심되는 곳을 촬영합니다 <br />
              2. 사진 붙히는 곳 위에 식물 카테고리를 선택합니다 <br />
              3. 촬영한 사진을 업로드 합니다 <br />
              4. <b>&quot;진단하기&quot;</b> 버튼을 누르고 기다립니다 <br />
              5. 분석된 정보를 바탕으로 작물에게 조치를 해 주시면 됩니다 <br />
              <br />
            </>
            <>
              <b>Expectation</b>
              <div
                id="expectation-wrap"
                className="mr-24 box-border flex flex-row rounded-xl border-2 border-button md:mr-40 lg:mr-12 xl:mr-20"
              >
                <div className="w-1/2 p-6 sm:w-fit">
                  <div className="flex justify-center">
                    <img src={example1} />
                  </div>
                  <div className="flex w-1/2 flex-row sm:w-fit">
                    <img src={example2} />
                    <img src={example3} />
                  </div>
                </div>
                <div
                  id="expectation-text"
                  className="flex flex-col justify-center"
                >
                  <br />
                  <div className=" font-press-bold text-xl">원인</div>
                  <div className=" font-press-medium mt-1 text-sm">
                    이 질병은 &quot;어떠한 이유&quot;로 인해 발생해요
                  </div>
                  <br />
                  <div className=" font-press-bold text-xl">질병</div>
                  <div className=" font-press-medium mt-1 text-sm">
                    이 질병은 &quot;이런 증상&quot;을 나타내요
                  </div>
                  <br />
                  <div className=" font-press-bold text-xl">치료</div>
                  <div className=" font-press-medium mt-1 text-sm">
                    이 질병은 &quot;이런 방법&quot;으로 치료해야 해요
                  </div>
                  <br />
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

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "src/components/Navbar";
import { useEffect } from "react";
import "../Cookie";
// images
import uploadImage from "src/images/uploadImage.svg";
// exampleimages
import example1 from "src/images/example1.png";
import example2 from "src/images/example2.png";
import example3 from "src/images/example3.png";
import LoadingPage from "@/components/LoadingPage";
import { getCookie } from "../Cookie";

const MainPage = () => {
  const [imageName, setImageName] = useState<string | null>(null);
  const [plantIndex, setPlantIndex] = useState<number>(-1);
  const [image, setImage]: any = useState(null);
  const userCookie = getCookie("access");
  const [previewUrl, setPreviewUrl] = useState("");
  const [buttonOn, setButtonOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(Boolean);
  const navigate = useNavigate();

  const handleFile = async (file: any) => {
    if (plantIndex === -1) {
      alert("카테고리를 선택해 주세요");
      return;
    }
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("picture", file);
    await axios({
      method: "post",
      url: "https://api.cropdoctor.shop/api/v1/plants/pictures/", //api 주소
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response: any) {
        console.log(response.data);
        setButtonOn(true);
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
    setLoading(true);
    await axios
      .get("https://api.cropdoctor.shop/api/v1/plants/ais/", {
        params: { picture: imageName, type: plantIndex },
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.result.disease.name === "정상") {
          //수정 ⭕️
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
  return loading ? (
    <LoadingPage />
  ) : (
    // 높이 화면맞춤, y축 오버플로우 시 자동으로 스크롤생기게, x축 오버플루우 숨기기, 배경색 지정, 배경 이미지 삽입, 배경 반복 없음, 사용자 지정 폰트 중간굵기
    <div
      id="full_wrap"
      className="h-screen overflow-y-auto overflow-x-hidden bg-background bg-grass bg-no-repeat font-kor-medium"
    >
      {/* 네비게이션 바 삽입 부분 */}
      <div id="navbar">
        <Navbar />
      </div>
      <>
        {/** main 전체 시작 */}
        {/* 세로정렬, 너비 꽉차게, 중앙정렬, 상단 패딩, lg너비 이상일 때 가로정렬 */}
        <div
          id="main-wrap"
          className="flex w-full flex-col justify-center pt-16 max-lg:pt-32 lg:flex-row"
        >
          {/** 이미지 업로드 부분 시작 */}
          {/* 너비, 높이 지정 */}
          <div
            id="upload-image-wrap"
            className=" mt-8 max-lg:mt-24 max-sm:mt-12 lg:h-[700px] lg:w-6/12"
          >
            <div>
              {/* select css 속성 지정 margin top, 테두리 둥글게, border, 글자 속성 */}
              <select
                name="plant"
                id="plant"
                className=" my-3 mt-3 ml-12 w-3/12 items-center rounded-md bg-button py-1 text-center text-xl text-white md:ml-20 lg:ml-12 lg:mt-8"
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
              {/* upload image here, 드롭다운, 이미지 프리뷰, 클릭 시 반응까지 모두 구현하였다 */}
              <div
                id="upload-image"
                className="xl:mx-30 bg-uploadImage mx-12 box-border h-[400px] border-4 border-dashed border-black bg-background md:mx-20 lg:mx-12 lg:h-[500px]"
              >
                <label htmlFor="drop_zone">
                  {/* drop zone, 이미지 업로드 부분과 너비를 맞췄다, 클릭 시 이미지를 업로드하도록 마우스 포인터 변경 효과를 넣었다 */}
                  <div
                    className="drop_zone relative flex h-full justify-center hover:cursor-pointer"
                    onDragOver={handleOndragOver}
                    onDrop={handleOndrop}
                  >
                    {/* previewUrl이라는 이미지 경로값이 있으면 그 사진을, 없으면 기본 사진을 출력하는 부분 */}
                    {previewUrl ? (
                      <div className="image flex justify-center">
                        <img
                          src={previewUrl}
                          alt="image"
                          className="max-h-[500px] w-full object-contain max-md:max-h-[392px]"
                        />
                      </div>
                    ) : (
                      <div className=" h-full w-full bg-upload_image bg-center bg-no-repeat object-scale-down" />
                    )}
                  </div>
                  {/* input field를 넣어 실제 파일을 올릴 수 있게 해 두었다(클릭 시 작동) */}
                  <input
                    id="drop_zone"
                    type="file"
                    className="hidden"
                    onChange={changeHandler}
                    name="files"
                  />
                </label>
              </div>

              {/* AI에게 분석 요청을 보내고 결과를 받아오는 버튼 */}
              <div
                id="diagnose-button"
                className="xl:px-30 mt-6 w-full px-12 text-center text-2xl md:px-20 lg:px-12"
              >
                {/* 버튼이 활성화 될 만한 상황인 지 파악하여 활성/비활성화시키는 부분 */}
                {buttonOn ? (
                  <button
                    className="mt-6 h-10 w-full rounded-lg bg-button text-white"
                    onClick={getResult}
                  >
                    <b>진단하기</b>
                  </button>
                ) : (
                  <button className="mt-6 h-10 w-full cursor-default rounded-lg bg-gray-500 text-white">
                    <b>진단하기</b>
                  </button>
                )}
              </div>
            </div>
          </div>
          {/** 이미지 업로드 부분 끝 */}
          {/** 튜토리얼 부분 시작 */}
          <div
            id="tutorial-wrap"
            className=" mt-[62px] ml-12 pb-40 text-3xl md:ml-20 lg:ml-12 lg:h-[700px] lg:w-1/2 xl:text-xl"
          >
            <>
              <div className="mr-24 md:mr-40 lg:mr-12 xl:mr-20">
                <b>Explanation</b> <br />
                <div className="mt-2" />
                식물의 이상 부위를 분석해 질병 및 방제방법을 알려줍니다
                <br />
                <div className="mt-4" />
                <b>Flow</b> <br />
                <div className="mt-2" />
                1. 식물의 이상 부위로 의심되는 곳을 촬영합니다 <br />
                <div className="mt-1" />
                2. 사진 붙히는 곳 위에 식물 카테고리를 선택합니다 <br />
                <div className="mt-1" />
                3. 촬영한 사진을 업로드 합니다 <br />
                <div className="mt-1" />
                4. <b>&quot;진단하기&quot;</b> 버튼을 누르고 기다립니다 <br />
                <div className="mt-1" />
                5. 분석된 정보를 바탕으로 작물에게 조치를 해 주시면 됩니다{" "}
                <br />
                <br />
              </div>
            </>
            <>
              <b>Expectation</b>
              <div
                id="expectation-wrap"
                className="mr-20 box-border flex flex-row rounded-xl border-2 border-button md:mr-40 lg:mr-8 xl:mr-16"
              >
                <div className="w-1/2 px-4 sm:w-fit">
                  <div className="flex justify-center p-4">
                    <img src={example1} />
                  </div>
                  <div className="flex w-1/2 flex-row px-4 pb-4 sm:w-fit">
                    <img src={example2} className=" mr-8" />
                    <img src={example3} />
                  </div>
                </div>
                <div
                  id="expectation-text"
                  className="ml-8 flex flex-col justify-center text-lg"
                >
                  <br />
                  <div className=" font-bold ">원인</div>
                  <div className=" font mt-2">
                    이 질병은 &quot;어떠한 이유&quot;로 인해 발생해요
                  </div>
                  <br />
                  <div className=" font-bold">질병</div>
                  <div className=" font mt-2">
                    이 질병은 &quot;이런 증상&quot;을 나타내요
                  </div>
                  <br />
                  <div className=" font-bold">치료</div>
                  <div className=" font mt-2w ">
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

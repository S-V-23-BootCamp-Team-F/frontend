import React, { useState } from "react";
import Delete from "src/images/delete.svg";
import * as Sentry from "@sentry/react";

const DetailModal = (props: any) => {
  const [showModal, setShowModal] = useState<boolean>(false); //모달창 활성화/비활성화
  const resultDate: string = props.items.created_at.substr(0, 10); //날짜 데이터 문자열 잘라서 YYYY-MM-DD형식으로 보이게
  const imagesrc: string = `https://silicon-valley-bootcamp.s3.ap-northeast-2.amazonaws.com/icons/${props.items.plant.id}.png`;
  return (
    <>
      {/*모달창 버튼을 업로드 이미지로*/}
      <button
        onClick={() => setShowModal(true)}
        className="object-fit group relative h-48 w-72 overflow-hidden rounded-lg bg-black shadow-lg"
      >
        <img
          className="h-full w-full transform object-cover backdrop-opacity-100 duration-700"
          src={props.items.picture}
        />
        <div className="absolute inset-y-3/4 mt-8 flex h-full w-full transform place-content-center bg-gradient-to-t from-black pt-12 duration-500 group-hover:-inset-y-0">
          <div className="absolute rounded-lg font-kor-medium text-2xl text-white">
            클릭 시 상세정보 확인
          </div>
        </div>
      </button>
      {/*모달창 활성화/비활성화용 삼항연산자*/}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-30 flex items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70">
            <div className="relative my-6 mx-auto w-auto max-w-6xl">
              <div className="relative mr-4 flex w-full flex-col rounded-lg bg-white shadow-lg">
                <div className="flex border-gray-300 p-5">
                  {/*전체*/}
                  <button
                    className="absolute right-4 mb-10"
                    onClick={() => setShowModal(false)}
                  >
                    <img className="h-6 w-5 md:w-6" src={Delete} />
                  </button>
                  {/*내용*/}
                  <div className="relative flex flex-col items-center md:flex-row">
                    {/*왼쪽*/}
                    <div className="mx-auto my-10 mt-0 mb-10 flex flex-col items-center max-md:pt-28 max-sm:pt-28">
                      {/*결과 이미지*/}
                      <img
                        className="h-auto max-h-96 max-w-sm rounded-lg"
                        src={props.items.result_picture}
                      />
                      {/*이름*/}
                      <div className="mt-2 font-kor-medium text-2xl">
                        {props.items.plant.type}
                      </div>
                      {/*상태*/}
                      <div className="font-kor-medium text-xl text-disease">
                        {props.items.disease.name === "정상" ? (
                          <span className="font-press-medium text-xl text-button">
                            정상
                          </span>
                        ) : (
                          props.items.disease.name
                        )}
                      </div>
                      {/*날짜*/}
                      <div className="font-kor-medium text-xl">
                        {resultDate}
                      </div>
                    </div>
                    {/*오른쪽*/}
                    <div className="ml-10 flex flex-col items-center">
                      {/*병 이름이 정상일때와 비정상일때 다르게 보이게 하기*/}
                      {props.items.disease.name === "정상" ? (
                        <>
                          {/*마스코트*/}
                          <div>
                            <img
                              className="max-w-64 max-h-64 rounded-lg"
                              src={imagesrc}
                            />
                          </div>
                          {/*정상시 멘트*/}
                          <div className="mt-24 font-kor-bold text-2xl md:text-left lg:text-left">
                            우리의 {props.items.plant.type}는 건강합니다.
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="my-4">
                            {/*병 원인*/}
                            <div className="mb-2 font-eng-bold text-2xl">
                              Causation
                            </div>
                            <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                              {props.items.disease.cause}
                            </div>
                          </div>
                          <div>
                            {/*증상*/}
                            <div className="mb-2 font-eng-bold text-2xl">
                              Symptom
                            </div>
                            <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                              {props.items.disease.feature}
                            </div>
                          </div>
                          <div>
                            {/*치료법*/}
                            <div className="mb-2  font-eng-bold text-2xl">
                              Cure
                            </div>
                            <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                              {props.items.disease.solution}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sentry.withProfiler(DetailModal);

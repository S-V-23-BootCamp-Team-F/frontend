import React, { useState } from "react";

import Delete from "src/images/delete.svg";

const DetailModal = (props:any) => {
    const [showModal, setShowModal] = useState<boolean>(false); //모달창 활성화/비활성화
    const resultDate:string = props.items.created_at.substr(0, 10); //날짜 데이터 문자열 잘라서 YYYY-MM-DD형식으로 보이게
    return (
    <>
      {/*모달창 버튼을 업로드 이미지로*/}
      <button onClick={() => setShowModal(true)} className="w-80 h-52 rounded-lg object-fit shadow-lg overflow-hidden bg-black group relative">
        <img className="w-full h-full object-cover transform duration-700 backdrop-opacity-100" src={props.items.picture}/>
        <div className="w-full h-full flex place-content-center mt-8 pt-12 bg-gradient-to-t from-black transform duration-500 inset-y-3/4 group-hover:-inset-y-0 absolute">
          <div className="text-white text-2xl rounded-lg font-kor-medium absolute">클릭 시 상세정보 확인</div>
        </div>
      </button>
      {/*모달창 활성화/비활성화용 삼항연산자*/}
      {showModal ? (
        <>
          <div className="flex items-center overflow-x-hidden overflow-y-auto inset-0 z-30 bg-black bg-opacity-70 fixed">
            <div className="w-auto max-w-6xl my-6 mx-auto relative">
              <div className="w-full mr-4 flex flex-col rounded-lg shadow-lg relative bg-white">
                <div className="p-5 flex border-gray-300">
                  {/*전체*/}
                  <button className="mb-10 right-4 absolute" onClick={() => setShowModal(false)}>
                    <img className="w-5 md:w-6 h-6" src={Delete}/>
                  </button>
                  {/*내용*/}
                  <div className="flex flex-col items-center md:flex-row relative">
                    {/*왼쪽*/}
                    <div className="mt-0 mb-10 mx-auto my-10 max-md:pt-28 max-sm:pt-28 flex flex-col items-center">
                      {/*결과 이미지*/}
                        <img className="h-auto max-w-sm max-h-96 rounded-lg" src={props.items.result_picture}/>
                      {/*이름*/}
                      <div className="mt-2 text-2xl font-kor-medium">{props.items.plant.type}</div>
                      {/*상태*/}
                      <div className="text-xl text-disease font-kor-medium">{props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}</div>
                      {/*날짜*/}
                      <div className="text-xl font-kor-medium">{resultDate}</div>
                    </div>
                    {/*오른쪽*/}
                    <div className="flex flex-col items-center ml-10">
                      {/*병 이름이 정상일때와 비정상일때 다르게 보이게 하기*/}
                      {props.items.disease.name === '정상' ? 
                      <>
                        {/*마스코트*/}
                        <div>
                          <img className="w-64 h-auto rounded-lg" src="src/images/nomal.png" />
                        </div>
                        {/*정상시 멘트*/}
                        <div className="mt-24 font-kor-bold text-2xl md:text-left lg:text-left">
                          우리의 {props.items.plant.type}는 건강합니다.
                        </div>
                      </>
                      :
                      <>
                        <div className="my-4">
                          {/*병 원인*/}
                          <div className="mb-2 font-eng-bold text-2xl">Causation</div>
                            <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                              {props.items.disease.cause}
                            </div>
                          </div>
                          <div>
                            {/*증상*/}
                            <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
                              <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                                {props.items.disease.feature}
                              </div>
                            </div>
                            <div>
                              {/*치료법*/}
                              <div className="mb-2  font-eng-bold text-2xl">Cure</div>
                              <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                                {props.items.disease.solution}
                              </div>
                            </div>
                          </>
                        }
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

export default DetailModal;
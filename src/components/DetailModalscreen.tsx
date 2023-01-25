import React, { useState } from "react";

import Delete from "src/images/delete.svg";

const DetailModal = (props:any) => {
    const [showModal, setShowModal] = useState<boolean>(false); //모달창 활성화/비활성화
    const resultDate:string = props.items.created_at.substr(0, 10); //날짜 데이터 문자열 잘라서 YYYY-MM-DD형식으로 보이게
    return (
    <>
      {/*모달창 버튼을 업로드 이미지로*/}
      <button onClick={() => setShowModal(true)}>
        <img className="w-80 h-52 rounded-lg object-fit shadow-lg" src={props.items.picture}/>
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
                              다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
                            </div>
                          </div>
                          <div>
                            {/*증상*/}
                            <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
                              <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                                다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
                              </div>
                            </div>
                            <div>
                              {/*치료법*/}
                              <div className="mb-2  font-eng-bold text-2xl">Cure</div>
                              <div className="mb-5 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                                다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
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
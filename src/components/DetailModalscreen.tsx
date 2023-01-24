import React, { useState } from "react";
import Delete from "src/images/delete.svg";

const DetailModal = (props:any) => {
    const [showModal, setShowModal] = useState(false);
    let resultDate = props.items.created_at.substr(0, 10);
    return (
    <>
      <button onClick={() => setShowModal(true)}>
        <img className="w-80 h-52 rounded-lg object-fit shadow-lg" src={props.items.picture}/>
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start p-5 border-gray-300">
                  {/*전체*/}
                  <button className="" onClick={() => setShowModal(false)}>
                    <img className="m-auto right-4 absolute w-5 md:w-6 h-auto" src={Delete}/>
                  </button>
                  {/*내용*/}
                  <div className="flex flex-col items-center md:flex-row">
                    {/*왼쪽*/}
                    <div className="mr-14 flex flex-col items-center max-md:pt-28 max-sm:pt-28">
                      {/*결과 이미지*/}
                        <img className="h-auto rounded-lg max-w-sm" src={props.items.result_picture}/>
                      {/*이름*/}
                      <div className="text-2xl font-press-medium mt-2">{props.items.plant.type}</div>
                      {/*상태*/}
                      <div className="text-xl text-disease font-press-medium">{props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}</div>
                      {/*날짜*/}
                      <div className="text-xl font-press-medium">{resultDate}</div>
                    </div>
                    {/*오른쪽*/}
                    <div className="place-content-between">
                      <div>
                        <div className="font-eng-bold text-2xl">Causation</div>
                        <div className="mb-7 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                          다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
                        <div className="mb-7 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                          다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
                        </div>
                      </div>
                      <div>
                        <div className="mb-2  font-eng-bold text-2xl">Cure</div>
                        <div className="mb-7 h-20 max-w-2xl overflow-y-auto border-black font-kor-regular text-lg">
                          다습할 때 발생하는 병해로서 반촉성 재배에 특히 많다. 토마토, 가지, 고추, 딸기 등의 시설재배시 줄기와 잎에도 발생하지만 주로 열매에 발생하여 피해를 나타낸다. 이 병은 저온이나 무가온재배에서 발병이 많고 다량의 분생포자를 형성하기 때문에 발생의 확산이 빠르다.
                        </div>
                      </div>
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
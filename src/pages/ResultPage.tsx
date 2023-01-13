import React from "react";
import tomato from "../images/tomato.jpg";
import tomato2 from "../images/tomato2.jpg";
import tomato3 from "../images/tomato3.jpg";

const ResultPage = () => {
  return (
    // 전체
    <div className=" bg-background w-screen h-full absolute overflow-hidden">
      {/* nav바 */}
      <div>네비게이션 자리</div>

      {/* 본문 */}
      <div>
        {/* 본문 왼쪽 */}
        <div>
          <div>
            <img
              src={tomato2}
              className="sub_tomato1 rounded-xl w-600 h-356 object-cover"
            />
            <div className="font-press-bold">잿빛 곰팡이병</div>
          </div>
          <div>
            <div>
              <img
                src={tomato3}
                className="sub_tomato2 rounded-xl w-72 h-356 object-cover"
              />
              <img
                src={tomato2}
                className="sub_tomato3 rounded-xl w-72 h-356 object-cover"
              />
            </div>
            <div className="font-press-bold">관련 사진</div>
          </div>
        </div>
        {/* 본문 오른쪽 */}
        <div>
          <div>
            <div className="font-press-bold">
              진단결과&nbsp;&nbsp;
              <span className="font-press-bold text-disease">
                토마토 잿빛곰팡이병
              </span>
              으로 의심됩니다.
            </div>
            <div>
              <img src={tomato} className="main_tomato"></img>
              <div className="font-press-medium">
                우리의 토마토는 가셨습니다..
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-press-bold">Causation</div>
              <div className="font-press-medium border-black w-700 h-150">
                ㅎㅇㅎㅇㅎ
              </div>
            </div>
            <div>
              <div className="font-press-bold">Symptom</div>
              <div className="font-press-medium border-black w-700 h-150">
                ㅎㅇㅎㅇ
              </div>
            </div>
            <div>
              <div className="font-press-bold">Cure</div>
              <div className="font-press-medium border-black w-700 h-150">
                ㅎㅇㅎㅇ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

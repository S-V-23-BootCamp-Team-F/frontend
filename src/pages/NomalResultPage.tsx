import React from "react";
import tomato2 from "src/images/tomato2.jpg";
import nomal from "src/images/nomal.png";

const NomalResultPage = () => {
  return (
    // 전체
    <div>
      {/* nav바 */}
      <div>네비게이션 자리</div>
      {/* 본문 */}
      <div className="flex place-content-evenly items-center">
        {/* 왼쪽 */}
        <div>
          <img
            src={tomato2}
            className="sub_tomato1 h-356 w-600 rounded-xl object-cover"
          />
        </div>
        {/* 오른쪽 */}
        <div>
          <div className="font-kor-bold text-2xl">
            진단결과&nbsp;
            <span className="font-kor-bold text-disease">정상&nbsp;</span>입니다
            !
          </div>
          <img src={nomal} className="" />
          <div className="font-kor-bold text-2xl">
            우리의 작물은 건강합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomalResultPage;

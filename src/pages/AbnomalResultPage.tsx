import React from "react";
import tomato from "../images/tomato.jpg";
import tomato2 from "../images/tomato2.jpg";
import tomato3 from "../images/tomato3.jpg";
import die from "../images/dietomato.png";
import leaf from "../images/leaf.png";
import "../media.css";

const ResultPage = () => {
  return (
    // 전체
    <div className="bg-background bg-grass bg-no-repeat max-h-screen w-screen flex flex-col relative overflow-y-auto">
      {/* nav바 */}
      <div className="mb-20">네비게이션 자리</div>

      {/* 본문 */}
      <div className="flex flex-col md:flex-row place-content-evenly mt-16 items-center ">
        <img className="left-0 top-20 absolute" src={leaf} />
        {/* 본문 왼쪽 */}
        <div className="content-center ">
          <div className="flex flex-col ">
            <img
              src={tomato2}
              className="sub_tomato1 rounded-xl w-600 h-356 object-cover"
            />
            <div className="font-press-bold  flex flex-col items-center text-xl mt-2  ">
              잿빛 곰팡이병
            </div>
          </div>
          <div className="mt-5 ">
            <div className="flex ">
              <img
                src={tomato3}
                className="sub_tomato2  rounded-xl w-72 h-356 object-cover mr-2.5"
              />
              <img
                src={tomato2}
                className="sub_tomato3 rounded-xl w-72 h-356 object-cover ml-2.5"
              />
            </div>
            <div className="font-press-bold flex flex-col items-center text-xl mt-2">
              관련 사진
            </div>
          </div>
        </div>
        {/* 본문 오른쪽 */}
        <div className="">
          <div className="">
            <div className="font-press-bold text-2xl">
              진단결과&nbsp;&nbsp;
              <span className="font-press-bold text-disease">
                토마토 잿빛곰팡이병
              </span>
              으로 의심됩니다.
            </div>
            <div className="flex">
              <img src={die} className="die_tomato"></img>
              <div className="font-press-medium place-items-end flex">
                우리의 토마토는 가셨습니다..
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="place-content-between">
              <div className="font-press-bold text-2xl mb-2">Causation</div>
              <div className="font-press-medium border-black max-w-2xl h-130 overflow-y-auto text-xl mb-7 ">
                이 병은 습도가 높으면 발병이 많으므로 시설 내부가 다습하지
                않도록 가능한 관수량을 줄이고 환기를 충분히 실시하여 재배하고,
                저온기 재배시에는 온도조절만이 아니라 난방을 하여 습기를
                제거한다. 불규칙적인 기상조건에서는 난방과 함께 약제살포를
                병행처리하여 방제한다. 약제방제로는 유파렌수화제 600배액,
                포리옥신수화제 1,000배액, 더마니수용제 5,000배액, 톱신수화제
                1,000배액, 프로파수화제 1,000배액을 7∼8일간이 병은 습도가 높으면
                발병이 많으므로 시설 내부가 다습하지 않도록 가능한 관수량을
                줄이고 환기를 충분히 실시하여 재배하고, 저온기 재배시에는
                온도조절만이 아니라 난방을 하여 습기를 제거한다. 불규칙적인
                기상조건에서는 난방과 함께 약제살포를 병행처리하여 방제한다.
                약제방제로는 유파렌수화제 600배액, 포리옥신수화제 1,000배액,
                더마니수용제 5,000배액, 톱신수화제 1,000배액, 프로파수화제
                1,000배액을 7∼8일간이 병은 습도가 높으면 발병이 많으므로 시설
                내부가 다습하지 않도록 가능한 관수량을 줄이고 환기를 충분히
                실시하여 재배하고, 저온기 재배시에는 온도조절만이 아니라 난방을
                하여 습기를 제거한다. 불규칙적인 기상조건에서는 난방과 함께
                약제살포를 병행처리하여 방제한다. 약제방제로는 유파렌수화제
                600배액, 포리옥신수화제 1,000배액, 더마니수용제 5,000배액,
                톱신수화제 1,000배액, 프로파수화제 1,000배액을 7∼8일간
              </div>
            </div>
            <div>
              <div className="font-press-bold text-2xl mb-2">Symptom</div>
              <div className="font-press-medium border-black max-w-2xl h-130 overflow-y-auto text-xl mb-7">
                이 병은 습도가 높으면 발병이 많으므로 시설 내부가 다습하지
                않도록 가능한 관수량을 줄이고 환기를 충분히 실시하여 재배하고,
                저온기 재배시에는 온도조절만이 아니라 난방을 하여 습기를
                제거한다. 불규칙적인 기상조건에서는 난방과 함께 약제살포를
                병행처리하여 방제한다. 약제방제로는 유파렌수화제 600배액,
                포리옥신수화제 1,000배액, 더마니수용제 5,000배액, 톱신수화제
                1,000배액, 프로파수화제 1,000배액을 7∼8일간이 병은 습도가 높으면
                발병이 많으므로 시설 내부가 다습하지 않도록 가능한 관수량을
                줄이고 환기를 충분히 실시하여 재배하고, 저온기 재배시에는
                온도조절만이 아니라 난방을 하여 습기를 제거한다. 불규칙적인
                기상조건에서는 난방과 함께 약제살포를 병행처리하여 방제한다.
                약제방제로는 유파렌수화제 600배액, 포리옥신수화제 1,000배액,
                더마니수용제 5,000배액, 톱신수화제 1,000배액, 프로파수화제
                1,000배액을 7∼8일간이 병은 습도가 높으면 발병이 많으므로 시설
                내부가 다습하지 않도록 가능한 관수량을 줄이고 환기를 충분히
                실시하여 재배하고, 저온기 재배시에는 온도조절만이 아니라 난방을
                하여 습기를 제거한다. 불규칙적인 기상조건에서는 난방과 함께
                약제살포를 병행처리하여 방제한다. 약제방제로는 유파렌수화제
                600배액, 포리옥신수화제 1,000배액, 더마니수용제 5,000배액,
                톱신수화제 1,000배액, 프로파수화제 1,000배액을 7∼8일간
              </div>
            </div>
            <div>
              <div className="font-press-bold text-2xl mb-2">Cure</div>
              <div className="font-press-medium border-black max-w-2xl h-130 overflow-y-auto text-xl mb-7">
                이 병은 습도가 높으면 발병이 많으므로 시설 내부가 다습하지
                않도록 가능한 관수량을 줄이고 환기를 충분히 실시하여 재배하고,
                저온기 재배시에는 온도조절만이 아니라 난방을 하여 습기를
                제거한다. 불규칙적인 기상조건에서는 난방과 함께 약제살포를
                병행처리하여 방제한다. 약제방제로는 유파렌수화제 600배액,
                포리옥신수화제 1,000배액, 더마니수용제 5,000배액, 톱신수화제
                1,000배액, 프로파수화제 1,000배액을 7∼8일간이 병은 습도가 높으면
                발병이 많으므로 시설 내부가 다습하지 않도록 가능한 관수량을
                줄이고 환기를 충분히 실시하여 재배하고, 저온기 재배시에는
                온도조절만이 아니라 난방을 하여 습기를 제거한다. 불규칙적인
                기상조건에서는 난방과 함께 약제살포를 병행처리하여 방제한다.
                약제방제로는 유파렌수화제 600배액, 포리옥신수화제 1,000배액,
                더마니수용제 5,000배액, 톱신수화제 1,000배액, 프로파수화제
                1,000배액을 7∼8일간이 병은 습도가 높으면 발병이 많으므로 시설
                내부가 다습하지 않도록 가능한 관수량을 줄이고 환기를 충분히
                실시하여 재배하고, 저온기 재배시에는 온도조절만이 아니라 난방을
                하여 습기를 제거한다. 불규칙적인 기상조건에서는 난방과 함께
                약제살포를 병행처리하여 방제한다. 약제방제로는 유파렌수화제
                600배액, 포리옥신수화제 1,000배액, 더마니수용제 5,000배액,
                톱신수화제 1,000배액, 프로파수화제 1,000배액을 7∼8일간
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

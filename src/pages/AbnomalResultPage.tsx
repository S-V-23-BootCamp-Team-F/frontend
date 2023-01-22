import React from "react";
import { useLocation } from "react-router-dom";
import tomato2 from "src/images/tomato2.jpg";
import tomato3 from "src/images/tomato3.jpg";
import die from "src/images/dietomato.png";
import Navbar from "src/components/Navbar";
import "src/media.css";

const ResultPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    // 전체
    <div className="relative flex max-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat">
      {/* nav바 */}
      <Navbar />

      {/* 본문 */}
      <div className="flex flex-col place-content-evenly items-center px-12 pt-4 md:flex-row ">
        {/* 본문 왼쪽 */}
        <div className="content-center pt-24">
          <div className="flex flex-col ">
            <img
              src={tomato2}
              className="sub_tomato1 h-356 w-600 rounded-xl object-cover"
            />
            <div className="mt-2  flex flex-col items-center font-kor-bold text-xl  ">
              잿빛 곰팡이병
            </div>
          </div>
          <div className="mt-5 h-356 w-600 object-cover">
            <div className="flex ">
              <img
                src={tomato3}
                className="sub_tomato2 mr-2.5 h-356 w-72 rounded-xl object-cover"
              />
              <img
                src={tomato2}
                className="sub_tomato3 ml-2.5 h-356 w-72 rounded-xl object-cover"
              />
            </div>
            <div className="mt-2 flex flex-col items-center font-kor-bold text-xl">
              관련 사진
            </div>
          </div>
        </div>
        {/* 본문 오른쪽 */}
        <div className="pl-4 pt-24">
          <div className="">
            <div className="font-kor-bold text-2xl">
              진단결과&nbsp;&nbsp;
              <span className="font-kor-bold text-disease">
                토마토 잿빛곰팡이병
              </span>
              으로 의심됩니다.
            </div>
            <div className="flex">
              <img src={die} className="die_tomato"></img>
              <div className="flex place-items-end font-kor-medium">
                우리의 토마토는 가셨습니다..
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="place-content-between">
              <div className="mb-2 font-eng-bold text-2xl">Causation</div>
              <div className="font-kor-regula mb-7 h-130 max-w-2xl overflow-y-auto border-black text-xl">
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
              <div className="mb-2 font-eng-bold text-2xl">Symptom</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
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
              <div className="mb-2  font-eng-bold text-2xl">Cure</div>
              <div className="mb-7 h-130 max-w-2xl overflow-y-auto border-black font-kor-regular text-xl">
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

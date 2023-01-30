import React from "react";
import axios from "axios";

import DetailModal from "src/components/DetailModalscreen";
import Delete from "src/images/delete.svg";
import { getCookie } from "../Cookie";

//히스토리 정보 담을 컴포넌트 선언
function Historycard(props: any) {
  const resultDate: string = props.items.created_at.substr(0, 10); //날짜 데이터 문자열 잘라서 YYYY-MM-DD형식으로 보이게
  console.log(props.items);
  const userCookie = getCookie("access");
  {
    return (
      <div className="m-auto h-80 w-80">
        <div className="relative h-52 w-80">
          {/*모달창 버튼 표시, props로 데이터 전달*/}
          <div className="absolute h-full w-full rounded-lg">
            <DetailModal items={props.items} />
          </div>
          {/*삭제 API 연동*/}
          <button
            className="absolute right-2 m-auto mt-2 h-auto w-5 md:w-6"
            onClick={() =>
              axios
                .delete(
                  `https://api.cropdoctor.shop/api/v1/plants/histories/${props.items.id}/`,
                  {
                    headers: {
                      Authorization: `Bearer ${userCookie}`,
                    },
                  }
                ) //api 주소
                .then((res) => {
                  props.setHistory(
                    props.history.filter(
                      (item: { id: number }) => item.id !== props.items.id
                    )
                  );
                })
                .catch((error) => {
                  console.log(error);
                  alert("히스토리 삭제 실패!");
                })
            }
          >
            {/*삭제 버튼 이미지*/}
            <img src={Delete} />
          </button>
        </div>
        {/*텍스트*/}
        <div className="relative flex flex-col items-center">
          {/*작물 종류*/}
          <div className="mt-2 font-kor-medium text-2xl">
            {props.items.plant.type}
          </div>
          {/*질병 이름이 정상이면 글씨색 초록색 아닐땐 빨간색*/}
          <span className="font-kor-medium text-xl text-disease">
            {props.items.disease.name === "정상" ? (
              <span className="font-kor-medium text-xl text-button">정상</span>
            ) : (
              props.items.disease.name
            )}
          </span>
          {/*날짜*/}
          <span className="font-kor-medium text-xl">{resultDate}</span>
        </div>
      </div>
    );
  }
}

export default Historycard;

import React from "react";
import axios from "axios"

import DetailModal from "src/components/DetailModalscreen";
import Delete from "src/images/delete.svg";

//히스토리 정보 담을 컴포넌트 선언
function Historycard(props : any) {
    const resultDate:string = props.items.created_at.substr(0, 10); //날짜 데이터 문자열 잘라서 YYYY-MM-DD형식으로 보이게
    console.log(props.items)
    {
        return (
            <div className="w-80 h-80 m-auto ml-2">
                <div className="w-80 h-52 relative">
                    {/*모달창 버튼 표시, props로 데이터 전달*/}
                    <div className="w-full h-full rounded-lg absolute">
                        <DetailModal items={props.items}/>
                    </div>
                    {/*삭제 API 연동*/}
                        <button
                            className="w-5 md:w-6 h-auto m-auto mt-2 right-2 absolute"
                            onClick={() => axios.delete(`http://18.179.229.39/api/v1/plants/histories/${props.items.id}/`)
                            .then((res) => {
                                console.log(res)
                                props.restate(); //히스토리 페이지 새로고침
                            })
                            .catch((error) => {
                                console.log(error);
                                alert('히스토리 삭제 실패!');})}>
                            {/*삭제 버튼 이미지*/}
                            <img src={Delete}/>
                        </button>
                </div>
                {/*텍스트*/}
                <div className="flex flex-col items-center relative">
                    {/*작물 종류*/}
                    <div className="mt-2 text-2xl font-kor-medium">{props.items.plant.type}</div>
                    {/*질병 이름이 정상이면 글씨색 초록색 아닐땐 빨간색*/}
                    <span className="text-xl font-kor-medium text-disease">
                        {props.items.disease.name === '정상' ? <span className="text-xl font-kor-medium text-button">정상</span>:props.items.disease.name}
                    </span>
                    {/*날짜*/}
                    <span className="text-xl font-kor-medium">{resultDate}</span>
                </div>
            </div>
        )
    }
}

export default Historycard;
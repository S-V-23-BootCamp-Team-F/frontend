import React from "react";
import axios from "axios"

import DetailModal from "src/components/DetailModalscreen";
import Delete from "src/images/delete.svg";


function Historycard(props : any) {
    const resultDate:string = props.items.created_at.substr(0, 10);
    console.log(props.items)
    {
        return (
            <main className="w-80 h-80 m-auto ml-2">
                <div className="w-80 h-52 relative">
                    {/*이미지*/}
                    <div className="w-full h-full rounded-lg absolute">
                        <DetailModal items={props.items}/>
                    </div>
                    {/*삭제버튼*/}
                        <button
                            className="w-5 md:w-6 h-auto m-auto mt-2 right-2 absolute"
                            onClick={() => axios.delete(`http://18.179.229.39/api/v1/plants/histories/${props.items.id}/`)
                            .then((res) => {
                                console.log(res)
                                props.restate();
                            })
                            .catch((error) => {
                                console.log(error);
                                alert('히스토리 삭제 실패!');})}>
                            <img src={Delete}/>
                        </button>
                </div>
                {/*텍스트*/}
                <div className="flex flex-col items-center relative">
                    {/*작물 종류*/}
                    <div className="mt-2 text-2xl font-kor-medium">{props.items.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-kor-medium text-disease">
                        {props.items.disease.name === '정상' ? <span className="text-xl font-kor-medium text-button">정상</span>:props.items.disease.name}
                    </span>
                    {/*날짜*/}
                    <span className="text-xl font-kor-medium">{resultDate}</span>
                </div>
            </main>
        )
    }
}

export default Historycard;
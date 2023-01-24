import React, { useState } from "react";
import Delete from "src/images/delete.svg";
import axios from "axios"
import DetailModal from "src/components/DetailModalscreen";


function Historycard(props : any) {
    const [check,setCheck] = useState(false);
    let resultDate = props.items.created_at.substr(0, 10);
    console.log(props.items)
    {
        return (
            <main className="m-auto ml-2 w-80 h-80">
                <div className="w-80 h-52 relative">
                    {/*이미지*/}
                    <div className="w-full h-full rounded-lg absolute">
                        <DetailModal items={props.items}/>
                    </div>
                    {/*삭제버튼*/}
                        <button
                            className="m-auto mt-2 right-2 w-5 md:w-6 h-auto absolute"
                            onClick={() => axios.delete(`http://18.179.229.39/api/v1/plants/histories/${props.items.id}/`)
                            .then((res) => {
                                console.log(res)
                                setCheck(true)
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
                    <div className="text-2xl font-press-medium mt-2">{props.items.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">
                        {props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}
                    </span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">{resultDate}</span>
                </div>
            </main>
        )
    }
}

export default Historycard;
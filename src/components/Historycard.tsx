import React, { useState } from "react";
import Delete from "src/images/delete.svg";
import axios from "axios"


function Historycard(props : any) {
    const [check,setCheck] = useState(false);
    console.log(props.items)
    {
        return (
            <main className="m-auto w-80 h-80">
                <div className="w-80 h-52 relative">
                    {/*이미지*/}
                    <img className="w-full h-full rounded-lg absolute" src={props.items.result_picture}/>
                    {/*삭제버튼*/}
                        <button
                            className="m-auto mt-2 right-2 absolute"
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
                    <div className="text-2xl font-press-medium">{props.items.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">
                        {props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}
                    </span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">{props.items.created_at}</span>
                </div>
            </main>
        )
    }
}

export default Historycard;
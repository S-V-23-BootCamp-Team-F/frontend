import React, { useState } from "react";
import Deletebutton from "src/components/Deletebutton";
import axios from "axios"


function Historycard(props : any) {
    const [check,setCheck] = useState(false);
    console.log(props.items)
    {
        return (
            <div className="m-auto w-80 h-80">
                <div className="w-80 h-52 relative">
                    {/*삭제버튼*/}
                    <Deletebutton
                    className="m-auto mt-2 mr-2"
                    onClick={() => axios.delete(`http://18.179.229.39/api/v1/plants/histories/${props.items.id}/`)
                    .then((res) => {
                        console.log(res)
                        setCheck(true)
                      })
                    .catch((error) => {
                        console.log(error);
                        alert('Deleting history failed');
                       })} />
                    {/*이미지*/}
                    <img className="w-80 h-52 object-fit rounded-lg absolute" src={props.items.result_picture}/>
                </div>
                {/*텍스트*/}
                <div className="mt-8 flex flex-col items-center relative">
                    {/*작물 종류*/}
                    <div className="text-2xl font-press-medium">{props.items.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">
                        {props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}
                    </span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">{props.items.created_at}</span>
                </div>
            </div>
        )
    }
}

export default Historycard;
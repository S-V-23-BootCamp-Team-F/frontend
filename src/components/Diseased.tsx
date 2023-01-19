import React from "react";
import Delete from "src/images/delete.svg";

function Diseased(props : any) { 
    {
        return (
            <div>
                <div className="w-80 h-52 border-2 border-black rounded-lg bg-white relative">
                    {/*이미지*/}
                    <div className="absolute">{props.Json.result_picture}</div>
                    {/*삭제버튼*/}
                    <img className="m-auto mt-2 mr-2" src={Delete} alt="DeleteButton" />
                </div>
                {/*텍스트*/}
                <div className="mt-2 flex flex-col items-center">
                    {/*작물 종류*/}
                    <div className="text-2xl font-press-medium">{props.Json.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">{props.Json.disease.name}</span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">{props.Json.disease.created_at}</span>
                </div>
            </div>
        )
    }
}

export default Diseased;
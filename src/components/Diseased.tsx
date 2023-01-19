import React from "react";
import Delete from "src/images/delete.svg";

function Diseased(props : any) {
    console.log(props.items)
    {
        return (
            <div className="m-auto w-80 h-80">
                <div className="w-80 h-52 bg-white relative">
                    {/*이미지*/}
                    <img className="w-80 h-52 object-fit rounded-lg absolute" src={props.items.picture}/>
                    {/*삭제버튼*/}
                   {/*<img className="m-auto mt-2 mr-2" src={Delete} alt="DeleteButton" />*/}
                </div>
                {/*텍스트*/}
                <div className="mt-2 flex flex-col items-center">
                    {/*작물 종류*/}
                    <div className="text-2xl font-press-medium">{props.items.plant.type}</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">{props.items.disease.name === '정상' ? <span className="text-xl font-press-medium text-button">정상</span>:props.items.disease.name}</span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">{props.items.created_at}</span>
                </div>
            </div>
        )
    }
}

export default Diseased;
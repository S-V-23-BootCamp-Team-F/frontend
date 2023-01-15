import React from "react";
import Delete from "src/images/delete.svg";

function Diseased() { 
    {
        return (
            <div className="m-auto w-80 h-80">
                <div className="w-80 h-52 border-2 border-black rounded-lg bg-white relative">
                    {/*이미지*/}
                    <div className="absolute"></div>
                    {/*삭제버튼*/}
                    <img className="m-auto mt-2 mr-2" src={Delete} alt="DeleteButton" />
                </div>
                {/*텍스트*/}
                <div className="mt-2 flex flex-col items-center">
                    {/*작물 종류*/}
                    <div className="text-2xl font-press-medium">토마토</div>
                    {/*질병*/}
                    <span className="text-xl font-press-medium text-disease">잿빛 곰팡이병</span>
                    {/*날짜*/}
                    <span className="text-xl font-press-medium">2023-1-11</span>
                </div>
            </div>
        )
    }
}

export default Diseased;
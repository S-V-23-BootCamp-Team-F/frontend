import React from "react";

function Diseased() { 
    {
        return (
            <div className="m-auto w-80 h-80">
                {/*이미지*/}
                <div className="w-80 h-52 border-2 border-black rounded-lg bg-white"></div>
                {/*텍스트*/}
                <div className="mt-2 flex flex-col items-center">
                    {/*작물 종류*/}
                    <div className="text-2xl text-press-bold">토마토</div>
                    {/*질병*/}
                    <span className="text-xl text-press-bold text-disease">잿빛 곰팡이병</span>
                    {/*날짜*/}
                    <span className="text-xl text-press-bold">2023-1-11</span>
                </div>
            </div>
        )
    }
}

export default Diseased;
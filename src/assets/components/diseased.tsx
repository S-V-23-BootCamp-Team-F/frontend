import React from "react";

function Diseased() { 
    {
        return (
            <div className="w-60 h-72 border-2 border-gray-400 relative flex justify-center items-center rounded-lg bg-white">
                {/*이미지*/}
                <div className="w-40 h-32 top-10 absolute border-2 border-black rounded-lg bg-white"></div>
                {/*작물 종류*/}
                <div className="top-44 absolute text-2xl">토마토</div>
                {/*질병*/}
                <span className="top-52 absolute text-xl">흰가루병</span>
                {/*날짜*/}
                <span className="top-60 absolute text-xl">2023-1-11</span>
                {/*삭제버튼*/}
                <img className="top-2 right-2 absolute" src="src/assets/images/DeleteButton.svg"/>
            </div>
        )
    }
}

export default Diseased;
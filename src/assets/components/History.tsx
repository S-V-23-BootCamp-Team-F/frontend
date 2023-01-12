import React from "react";

class History extends React.Component {
    render() {
        return (
            <div className="w-60 h-72 border-2 border-green-600 relative flex justify-center items-center rounded-lg bg-white">
                {/*이미지*/}
                <div className="w-40 h-32 top-10 absolute border-2 border-black rounded-lg bg-white"></div>
                {/*작물 종류*/}
                <span className="top-44 absolute text-2xl">토마토</span>
                {/*질병*/}
                <span className="top-52 absolute text-xl">정상</span>
                {/*날짜*/}
                <span className="top-60 absolute text-xl">2023-1-11</span>
                {/*삭제버튼*/}
                <img className="top-2 right-2 absolute" src="/src/assets/images/DeleteButton.svg"/>
            </div>
        )
    }
}

export default History;
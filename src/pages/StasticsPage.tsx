import React, { useEffect, useState } from "react";

import Navbar from "src/components/Navbar";
import Cropchart from "src/components/Cropchart"
import Periodchart from "src/components/Periodchart";

const StasticsPage = () =>{
    const [seeperiod,setSeeperiod] = useState<boolean>(false);
    function Barswitch() {
        setSeeperiod(false);
    }
    function Lineswitch() {
        setSeeperiod(true);
    }
    function Chart() {
        if (seeperiod == false) {
            return (
                <div className="flex flex-col items-center">
                    <span>"제일 병이 많이 걸린 작물은 {}에요"</span>
                    {/*위 차트*/}
                    <div className="m-auto">
                        <Cropchart />
                    </div>
                    <span>작물별 질병건수</span>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-center">
                    <span>"{}월에 가장 많이 발생한 {}의 병은 {}이에요."</span>
                    <div className="m-auto">
                        <Periodchart />
                    </div>
                    <span>기간 별 작물 질병률</span>
                </div>
            )
        }
    }
    return (
        <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-background bg-no-repeat">
            {/*nav바*/}
            <div className="mb-10">
                <Navbar />
            </div>
            {/*내용*/}
            <div className="my-auto px-12 pt-4">
                <Chart />
                {/*아래쪽*/}
                    <div className="relative">
                        <button
                            className="ml-28 absolute"
                            onClick={Barswitch}
                        >
                            작물 별 진단건수
                        </button>
                        <button
                            className="right-28 absolute"
                            onClick={Lineswitch}
                        >
                            기간 별 작물 질병건수
                        </button>
                    </div>
            </div>
        </div>  
    );
};

export default StasticsPage;

function usestate(): [any, any] {
    throw new Error("Function not implemented.");
}

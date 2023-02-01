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
                    <span className="mt-12 mb-6 ml-4 font-kor-bold text-xl md:text-2xl">"제일 병이 많이 걸린 작물은 고추에요"</span>
                    {/*위 차트*/}
                    <div className="m-auto">
                        <Cropchart />
                    </div>
                    <span className="mt-4 ml-4 font-kor-bold text-xl">작물 별 질병건수</span>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-center">
                    <div className="m-auto">
                        <Periodchart />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat pr-12">
            {/*nav바*/}
            <div className="mb-10">
                <Navbar />
            </div>
            {/*내용*/}
            <div className="my-auto pb-10 px-12 pt-4">
                <Chart />
                {/*아래쪽*/}
                { seeperiod == false 
                    ?   <div className="mt-4 relative mb-10">
                            <button
                                className="ml-48 absolute font-kor-medium border-b-2 border-black"
                                onClick={Barswitch}
                            >
                                작물 별 질병건수
                            </button>
                            <button
                                className="right-36 absolute font-kor-medium text-gray-600"
                                onClick={Lineswitch}
                            >
                                기간 별 작물 질병건수
                            </button>
                        </div>
                    :   <div className="mt-4 relative mb-10">
                            <button
                                className="ml-48 absolute font-kor-medium text-gray-600"
                                onClick={Barswitch}
                            >
                                작물 별 질병건수
                            </button>
                            <button
                                className="right-36 absolute font-kor-medium border-b-2 border-black"
                                onClick={Lineswitch}
                            >
                                기간 별 작물 질병건수
                            </button>
                        </div> 
                }
                        
            </div>
        </div>  
    );
};

export default StasticsPage;

function usestate(): [any, any] {
    throw new Error("Function not implemented.");
}

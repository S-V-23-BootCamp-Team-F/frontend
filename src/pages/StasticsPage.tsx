import React from "react";

import Navbar from "src/components/Navbar";
import Cropchart from "src/components/Cropchart"
import Periodchart from "src/components/Periodchart";

const StasticsPage = () =>{
    return (
        <div className="flex min-h-screen w-screen flex-col overflow-y-auto bg-background bg-grass bg-no-repeat">
            {/*nav바*/}
            <div className="mb-10">
                <Navbar />
            </div>
            {/*내용*/}
            <div className="mt-10 px-12 pt-4">
                {/*위쪽*/}
                <div className="flex flex-col xl:flex-row align-middle">
                    {/*위 차트*/}
                    <div className="ml-0">
                        <Cropchart />
                    </div>
                    {/*위 차트 설명*/}
                    <span className="ml-20 xl:ml-10 my-auto font-kor-medium">
                        포도관련 질병<br/>
                        1. 포도 흰가루병, 30(34%)<br/>
                        2. 포도탄저병, 23(28%)<br/>
                        3. 등등<br/>
                        4. 등등<br/>
                        5. 등등<br/>
                        포도에서 가장 많이 걸리는 질병은 {}입니다.<br/>
                    </span>
                </div>
                {/*아래쪽*/}
                <div>
                    <div className="flex flex-wrap mt-10 align-middle">
                        <div className="flex flex-col">
                            <select className="m-auto mr-3 w-auto bg-background text-center font-kor-bold text-2xl md:mt-0">
                                <option value="0">카테고리</option>
                                <option value="1">고추</option>
                                <option value="2">포도</option>
                                <option value="3">딸기</option>
                                <option value="4">오이</option>
                                <option value="5">파프리카</option>
                                <option value="6">토마토</option>
                            </select>
                        {/*아래 차트*/}
                            <div className="ml-0">
                                <Periodchart />
                            </div>
                        </div>
                        {/*아래 차트 설명*/}
                        <span className="ml-20 xl:ml-10 font-kor-medium">
                            포도관련 질병<br/>
                            월 별로 포도관련 질병 중 가장 많이 발생한 질병은 다음과 같아요<br/>
                            1월 : 포도 단저병, 30(15%)<br/>
                            2월 : ~~~<br/>
                            3월 : ~~~<br/>
                            4월 : ~~~<br/>
                            5월 : ~~~<br/>
                            6월 : ~~~<br/>
                            7월 : ~~~<br/>
                            8월 : ~~~<br/>
                            9월 : ~~~<br/>
                            10월 : ~~~<br/>
                            11월 : ~~~<br/>
                            12월 : ~~~<br/>
                            {}월에 가장 많이 발생한 질병은 {}이에요<br/>
                            작물이 {}에 걸리지 않게 미리 돌봐주세요<br/>
                        </span>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default StasticsPage;
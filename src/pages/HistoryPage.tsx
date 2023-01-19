import React, { useState, useEffect } from "react";
import Healthy from "src/components/Healthy";
import Diseased from "src/components/Diseased";
import Navbar from "src/components/Navbar";
import axios from "axios"

const HistoryPage = () => {
 const [history,setHistory] = useState([])
  const email = "test3@gmail.com";
  //let lists:any = [];
  //데이터 가져올 함수 정의
  useEffect(() => {
    (async () => { //
      await axios.get('http://54.250.133.67/api/v1/plants/histories/', { // 요청
        params:{
          email: email,
        }
      })
      .then((res) => {
        // setHistory((history)=> [...history, res.data.result])
        //setHistory(res.data.result)
        //console.log(history)
        console.log(res.data.result)
        setHistory([...res.data.result])
        console.log(history)

      }) // 응답
     .catch((error) => {
      console.log(error);
     })
  })();
},[]);
return (
  <div className="box-border h-screen w-screen overflow-x-hidden bg-background bg-grass bg-no-repeat">
    {/*nav바*/}
    <Navbar />
    <div className="flex flex-col pt-32">
      {/*카테고리*/}
      {/*<select className="m-auto mr-5 mb-3 w-auto bg-background text-center text-2xl font-bold">
        <option value="카테고리">카테고리</option>
        <option value="strawberry">딸기</option>
        <option value="grape">포도</option>
        <option value="tomato">토마토</option>
        <option value="cucumber">오이</option>
        <option value="chillypepper">고추</option>
        <option value="paprika">파프리카</option>
        </select>*/}
      {/*내용*/}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap">
          {history.map((item:any, index:number) => (
             (<Diseased items={item} key={index}/>)
          ))
          }
        </div>
      </div>
    </div>
  </div>
);
};

export default HistoryPage;

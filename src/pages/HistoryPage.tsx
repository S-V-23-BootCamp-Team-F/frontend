import React, { useState, useEffect } from "react";
import Healthy from "src/components/Healthy";
import Diseased from "src/components/Diseased";
import Navbar from "src/components/Navbar";
import axios from "axios"

const HistoryPage = () => {
 const [history,setHistory] = useState([])
  const email = "test3@gmail.com";

  //데이터 가져올 함수 정의
  useEffect(() => {
    (async () => { //
      await axios.get('http://54.250.133.67/api/v1/plants/histories/', { // 요청
        params:{
          email: email,
        }
      })
      .then((res) => {
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

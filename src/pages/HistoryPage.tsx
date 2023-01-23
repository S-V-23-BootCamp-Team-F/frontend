import React, { useState, useEffect } from "react";
import Historycard from "src/components/Historycard";
import Navbar from "src/components/Navbar";
import axios from "axios"

const HistoryPage = () => {
  const [history,setHistory] = useState([])
  const email = "test3@gmail.com";
  const reversed = [...history].reverse();

  //데이터 가져올 함수 정의
  useEffect(() => {
    (async () => { //
      await axios.get('http://18.179.229.39/api/v1/plants/histories/', { // 요청
        params:{
          email: decodeURI(email),
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
          {reversed.map((item:any, index:number) => (<Historycard items={item} key={index}/>))}
        </div>
      </div>
    </div>
  </div>
);
};

export default HistoryPage;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Historycard from "src/components/Historycard";
import Navbar from "src/components/Navbar";
import LoadingPage from "src/components/LoadingPage";

const HistoryPage = () => {
  const [history, setHistory] = useState<any[]>([]);
  const email:string = "";
  const reversed:any[] = [...history].reverse();
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  };
  const restate = () => {location.reload();}
  function Mapping() {
    if (index < 7 && index >= 1) {
      return(
      <div className="flex flex-wrap">
                {reversed.map((item: any[], num: number) =>
                  reversed[num].plant.id == index ? (
                    <Historycard items={item} key={num} restate={restate} />
                  ) : null
                )}
              </div>
            );
    } else  {
      return  (
      <div className="flex flex-wrap">
        {reversed.map((item: any, num: number) => (
          <Historycard items={item} key={num} restate={restate} />
        ))}
      </div>
      );
    }
  }
  //데이터 가져올 함수 정의
  useEffect(() => {
    (async () => {
      setLoading(true);
      //
      await axios
        .get("http://18.179.229.39/api/v1/plants/histories/", {
          // 요청
          params: {
            email: decodeURI(email),
          },
        })
        .then((res) => {
          setHistory([...res.data.result]);
          console.log(history);
          setLoading(false);
        }) // 응답
        .catch((error) => {
          console.log(error);
          alert('히스토리 불러오기 실패. 로그인이 되어있는지 확인하세요.');
          window.location.href = "http://localhost:3000/";
        });
    })();
  }, []);
  return loading ? (
    <LoadingPage />
  ) : (
    <div className="box-border h-screen w-screen overflow-x-hidden bg-background bg-grass bg-no-repeat">
      {/*nav바*/}
      <Navbar />
      <div className="flex flex-col pt-32">
        {/*카테고리*/}
        <select
          className="m-auto mt-4 md:mt-0 mr-5 mb-3 w-auto bg-background text-center text-2xl font-kor-medium"
          onChange={indexHandler}
        >
          <option value="0">전체</option>
          <option value="1">고추</option>
          <option value="2">포도</option>
          <option value="3">딸기</option>
          <option value="4">오이</option>
          <option value="5">파프리카</option>
          <option value="6">토마토</option>
        </select>
        {/*내용*/}
        <div className="flex flex-col items-center">
          <Mapping />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
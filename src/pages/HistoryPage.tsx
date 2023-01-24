import React, { useState, useEffect } from "react";
import Historycard from "src/components/Historycard";
import Navbar from "src/components/Navbar";
import LoadingPage from "@/components/LoadingPage";
import axios from "axios";

const HistoryPage = () => {
  const [history, setHistory] = useState<any[]>([]);
  const email = "test3@gmail.com";
  const reversed = [...history].reverse();
  const [index, setIndex] = useState<number>(-1);
  const [loading, setLoading] = useState(Boolean);
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  };
  function Mapping() {
    if (index === -1) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) => (
            <Historycard items={item} key={index} />
          ))}
        </div>
      );
    } else if (index == 0) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 1 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else if (index == 1) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 2 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else if (index == 2) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 3 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else if (index == 3) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 4 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else if (index == 4) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 5 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else if (index == 5) {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) =>
            reversed[index].plant.id === 6 ? (
              <Historycard items={item} key={index} />
            ) : null
          )}
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, index: number) => (
            <Historycard items={item} key={index} />
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
          className="m-auto mr-5 mb-3 w-auto bg-background text-center text-2xl font-bold"
          onChange={indexHandler}
        >
          <option value="-1">전체</option>
          <option value="0">고추</option>
          <option value="1">포도</option>
          <option value="2">딸기</option>
          <option value="3">오이</option>
          <option value="4">파프리카</option>
          <option value="5">토마토</option>
        </select>
        {/*내용*/}
        <div className="flex flex-col items-center place-content-center">
          <Mapping />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
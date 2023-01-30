import React, { useState, useEffect } from "react";
import axios from "axios";

import Historycard from "src/components/Historycard";
import Navbar from "src/components/Navbar";
import LoadingPage from "src/components/LoadingPage";
import { useNavigate } from "react-router";
import "../Cookie";
import { getCookie } from "../Cookie";

const HistoryPage = () => {
  const [history, setHistory] = useState<any[]>([]); //히스토리 불러올 함수
  const reversed: any[] = [...history].reverse(); //히스토리 내림차순으로 정렬
  const [index, setIndex] = useState<number>(0); //카테고리 인덱스
  const [loading, setLoading] = useState<boolean>(false); //로딩 상태
  const navigate = useNavigate();
  const userCookie = getCookie("access");
  const indexHandler = (e: any) => {
    setIndex((index) => e.target.value);
  }; //카테고리 밸류값 인덱스에 저장

  function Mapping() {
    if (index < 7 && index >= 1) {
      //1번 고추부터 6번 토마토까지
      return (
        <div className="flex flex-wrap">
          {/*작물 id가 카테고리 인덱스와 같은지 검사 후 같은것만 map*/}
          {reversed.map((item: any[], num: number) =>
            reversed[num].plant.id == index ? (
              <Historycard
                items={item}
                key={num}
                setHistory={setHistory}
                history={history}
              />
            ) : null
          )}
        </div>
      );
    } else {
      //전체 map
      return (
        <div className="flex flex-wrap">
          {reversed.map((item: any, num: number) => (
            <Historycard
              items={item}
              key={num}
              setHistory={setHistory}
              history={history}
            />
          ))}
        </div>
      );
    }
  }
  useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get("https://api.cropdoctor.shop/api/v1/plants/histories/", {
          headers: {
            Authorization: `Bearer ${userCookie}`,
          },
        })
        .then((res) => {
          setHistory([...res.data.result]); //history에 요청한 데이터 저장
          console.log(history);
          setLoading(false); //로딩 완료
        }) // 응답
        .catch((error) => {
          console.log(error);
          alert("히스토리 불러오기 실패. 로그인이 되어있는지 확인하세요.");
          navigate("/");
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
          className="m-auto mt-4 mr-5 mb-3 w-auto bg-background text-center font-kor-bold text-2xl md:mt-0"
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

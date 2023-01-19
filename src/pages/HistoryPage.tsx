import React, { useState, useEffect } from "react";
import Healthy from "src/components/Healthy";
import Diseased from "src/components/Diseased";
import Navbar from "src/components/Navbar";
import axios from "axios"

const HistoryPage = () => {
const [history, setHistory] = useState([
    { "id": 1, //정상
             "disease": {
                 "id": 1,
                 "created_at": "2023-01-15T14:02:56Z",
                 "name": "test_name",
                 "cause": "test_cause",
                 "feature": "test_feature",
                 "solution": "test_solution",
                 "updated_at": "2023-01-15T14:02:56Z"
             },
             "plant": {
                 "id": 1,
                 "created_at": "2023-01-15T14:04:14Z",
                 "type": "test_type",
                 "explaination": "text_explaination",
                 "updated_at": "2023-01-15T14:04:14Z"
             },
             "picture": "test_picture",
             "result_picture": "test_result_picture",
             "status": "OK",
             "created_at": "2023-01-15T14:06:34Z",
             "updated_at": "2023-01-15T14:06:34Z",
             "member": 1},
        {"id": 1, //정상
             "disease": {
                 "id": 1,
                 "created_at": "2023-01-15T14:02:56Z",
                 "name": "test_name",
                 "cause": "test_cause",
                 "feature": "test_feature",
                 "solution": "test_solution",
                 "updated_at": "2023-01-15T14:02:56Z"
             },
             "plant": {
                 "id": 1,
                 "created_at": "2023-01-15T14:04:14Z",
                 "type": "test_type",
                 "explaination": "text_explaination",
                 "updated_at": "2023-01-15T14:04:14Z"
             },
             "picture": "test_picture",
             "result_picture": "test_result_picture",
             "status": "OK",
             "created_at": "2023-01-15T14:06:34Z",
             "updated_at": "2023-01-15T14:06:34Z",
             "member": 1}
   ])
  const email = "test3@gmail.com";
  //데이터 가져올 함수 정의
  useEffect(() => {
    (async () => { //
      await axios.get('http://localhost:8000/api/v1/plants/histories/', { // 요청
        params:{
          email: email,
        }
      })
      .then((res) => {
        //console.log(res.data);
       //setHistory = res.data;
        // console.log(history.result)
       setHistory([...res.data.result]);
      }) // 응답
     .catch((error) => {
      console.log(error);
      //setHistory(error);
     })
  })();
},[]);
return (
  <div className="box-border h-screen w-screen overflow-x-hidden bg-background bg-grass bg-no-repeat">
    {/*nav바*/}
    <Navbar />
    <div className="flex flex-col pt-32">
      {/*카테고리*/}
      <select className="m-auto mr-5 mb-3 w-auto bg-background text-center text-2xl font-bold">
        <option value="카테고리">카테고리</option>
        <option value="strawberry">딸기</option>
        <option value="grape">포도</option>
        <option value="tomato">토마토</option>
        <option value="cucumber">오이</option>
        <option value="chillypepper">고추</option>
        <option value="paprika">파프리카</option>
      </select>
      {/*내용*/}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap">
          {history.map((item:any) => (
            return ((item.id===1 )? <Healthy/> : <Diseased/>))
          ))
          }
          {/* {history.map((his:any, index: Number) => (
          return his.id===1 ? <Healthy/>  : <Diseased/>
          // <Diseased key = {index} Json={his}/>
          ))} */}
         
        </div>
      </div>
    </div>
  </div>
);
};

export default HistoryPage;
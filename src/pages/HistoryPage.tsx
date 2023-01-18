import React, { useState, useEffect } from "react";
import Healthy from "src/components/Healthy";
import Diseased from "src/components/Diseased";
import Navbar from "src/components/Navbar";
import axios from "axios"

const HistoryPage = () => {

  const email = "test3@gmail.com";
  //데이터 가져올 함수 정의
  useEffect(() => {
    //const fetchdata = 
    (async () => { //
    // try{
      // const res = 
      // 'http://localhost:8000/api/v1/plants/histories/?email=test3@gmail.com'
      await axios.get('http://localhost:8000/api/v1/plants/histories/', { // 요청
        params:{
          email: email,
        }
      })
      .then((res) => {
        console.log(res.data)

      }) // 응답
     .catch((error) => {
      console.log(error);
     })
  })();
},[]);
return(
  <></>
  
)

}

export default HistoryPage;
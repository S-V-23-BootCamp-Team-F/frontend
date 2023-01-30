import React from "react";
import { useNavigate } from "react-router-dom";

function Longnav(props:any) {
    const navigate = useNavigate();
    const moveToMain = () => {
        navigate("/");
        
      };
      const moveToHistories = () => {
        navigate("/history");
      };
      const moveToStatistics = () => {
        navigate("/stastics");
      };
    if (props.location.pathname == "/") {
      //메인 페이지
      return (
        <>
          <div
            className="cursor-pointer hover:text-button border-b-2 border-black"
            onClick={moveToMain}
          >
            Diagnosis
          </div>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToHistories}
          >
            Histories
            
          </div>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToStatistics}
          >
            Statistics
            
          </div>
        </>
      );
    } else if (props.location.pathname == "/history"){
      //히스토리 페이지
      return (
        <>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToMain}
          >
            Diagnosis
          </div>
          <div
            className="cursor-pointer hover:text-button border-b-2 border-black"
            onClick={moveToHistories}
          >
            Histories
            
          </div>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToStatistics}
          >
            Statistics
            
          </div>
        </>
      );
    } else if (props.location.pathname == "/stastics"){
      //통계 페이지
      return (
        <>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToMain}
          >
            Diagnosis
          </div>
          <div
            className="cursor-pointer hover:text-button text-gray-600"
            onClick={moveToHistories}
          >
            Histories
            
          </div>
          <div
            className="cursor-pointer hover:text-button border-b-2 border-black"
            onClick={moveToStatistics}
          >
            Statistics
            
          </div>
        </>
      );
    } else {
      //전체 map
      return (
        null
      );
    }
  }

export default Longnav;
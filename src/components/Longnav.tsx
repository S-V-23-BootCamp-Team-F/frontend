import React from "react";
import { useNavigate } from "react-router-dom";
import * as Sentry from "@sentry/react";

function Longnav(props: any) {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };
  const moveToHistories = () => {
    navigate("/history");
  };
  const moveToStatistics = () => {
    navigate("/statistics");
  };
  if (props.location.pathname == "/") {
    //메인 페이지
    return (
      <>
        <div
          className="cursor-pointer border-b-2 border-black hover:text-button"
          onClick={moveToMain}
        >
          Diagnosis
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToHistories}
        >
          Histories
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToStatistics}
        >
          Statistics
        </div>
      </>
    );
  } else if (props.location.pathname == "/history") {
    //히스토리 페이지
    return (
      <>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToMain}
        >
          Diagnosis
        </div>
        <div
          className="cursor-pointer border-b-2 border-black hover:text-button"
          onClick={moveToHistories}
        >
          Histories
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToStatistics}
        >
          Statistics
        </div>
      </>
    );
  } else if (props.location.pathname == "/statistics") {
    //통계 페이지
    return (
      <>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToMain}
        >
          Diagnosis
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToHistories}
        >
          Histories
        </div>
        <div
          className="cursor-pointer border-b-2 border-black hover:text-button"
          onClick={moveToStatistics}
        >
          Statistics
        </div>
      </>
    );
  } else {
    //전체 map
    return (
      <>
        <div
          className="cursor-pointer border-b-2 border-black hover:text-button"
          onClick={moveToMain}
        >
          Diagnosis
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToHistories}
        >
          Histories
        </div>
        <div
          className="cursor-pointer text-gray-600 hover:text-button"
          onClick={moveToStatistics}
        >
          Statistics
        </div>
      </>
    );
  }
}

export default Sentry.withProfiler(Longnav);

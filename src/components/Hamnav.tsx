import React from "react";
import { useNavigate } from "react-router-dom";
import * as Sentry from "@sentry/react";
function Hamnav(props: any) {
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
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1 "
          onClick={moveToMain}
        >
          <div className="mt-8 h-20 w-20 bg-diagnosis_hover bg-contain hover:cursor-pointer" />
          <div className="mt-3 cursor-pointer border-b-2 border-black hover:mb-0 group-hover:border-button group-hover:text-button">
            Diagnosis
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToHistories}
        >
          <div className="mt-16 h-20 w-20 bg-history bg-contain hover:cursor-pointer group-hover:bg-history_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Histories
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToStatistics}
        >
          <div className="mt-16 h-20 w-20 bg-statistics bg-contain hover:cursor-pointer group-hover:bg-statistics_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Statistics
          </div>
        </div>
      </>
    );
  } else if (props.location.pathname == "/history") {
    //히스토리 페이지
    return (
      <>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1 "
          onClick={moveToMain}
        >
          <div className="mt-8 h-20 w-20 bg-diagnosis bg-contain hover:cursor-pointer group-hover:bg-diagnosis_hover" />
          <div className="mt-3 cursor-pointer hover:mb-0 group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Diagnosis
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToHistories}
        >
          <div className="mt-16 h-20 w-20 bg-history_hover bg-contain hover:cursor-pointer" />
          <div className=" mt-3 cursor-pointer border-b-2 border-black group-hover:border-button group-hover:text-button">
            Histories
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToStatistics}
        >
          <div className="mt-16 h-20 w-20 bg-statistics bg-contain hover:cursor-pointer group-hover:bg-statistics_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Statistics
          </div>
        </div>
      </>
    );
  } else if (props.location.pathname == "/statistics") {
    //통계 페이지
    return (
      <>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1 "
          onClick={moveToMain}
        >
          <div className="mt-8 h-20 w-20 bg-diagnosis bg-contain hover:cursor-pointer group-hover:bg-diagnosis_hover" />
          <div className="mt-3 cursor-pointer hover:mb-0 group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Diagnosis
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToHistories}
        >
          <div className="mt-16 h-20 w-20 bg-history bg-contain hover:cursor-pointer group-hover:bg-history_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Histories
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToStatistics}
        >
          <div className="mt-16 h-20 w-20 bg-statistics_hover bg-contain hover:cursor-pointer" />
          <div className=" mt-3 cursor-pointer border-b-2 border-black group-hover:border-button group-hover:text-button">
            Statistics
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1 "
          onClick={moveToMain}
        >
          <div className="mt-8 h-20 w-20 bg-diagnosis_hover bg-contain hover:cursor-pointer" />
          <div className="mt-3 cursor-pointer border-b-2 border-black hover:mb-0 group-hover:border-button group-hover:text-button">
            Diagnosis
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToHistories}
        >
          <div className="mt-16 h-20 w-20 bg-history bg-contain hover:cursor-pointer group-hover:bg-history_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Histories
          </div>
        </div>
        <div
          className="group flex flex-col items-center justify-center pb-2 hover:pb-1"
          onClick={moveToStatistics}
        >
          <div className="mt-16 h-20 w-20 bg-statistics bg-contain hover:cursor-pointer group-hover:bg-statistics_hover" />
          <div className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
            Statistics
          </div>
        </div>
      </>
    );
  }
}

export default Sentry.withProfiler(Hamnav);

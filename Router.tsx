import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GetStart = lazy(() => import("./src/pages/GetStart"));
const MainPage = lazy(() => import("./src/pages/MainPage"));
const AbnomalResultPage = lazy(() => import("./src/pages/AbnomalResultPage"));
const HistoryPage = lazy(() => import("./src/pages/HistoryPage"));
const NomalResultPage = lazy(() => import("./src/pages/NomalResultPage"));
const StatisticsPage = lazy(() => import("./src/pages/StatisticsPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/getStart" element={<GetStart />} />
        <Route path="/abnomalresult" element={<AbnomalResultPage />} />
        <Route path="/nomalresult" element={<NomalResultPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStart from "./pages/GetStart";
import MainPage from "./pages/MainPage";
import AbnomalResultPage from "./pages/AbnomalResultPage";
import HistoryPage from "./pages/HistoryPage";
import NomalResultPage from "./pages/NomalResultPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/getStart" element={<GetStart />} />
        <Route path="/abnomalresult" element={<AbnomalResultPage />} />
        <Route path="/nomalresult" element={<NomalResultPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

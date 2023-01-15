
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AbnomalResultPage from "./pages/AbnomalResultPage";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/abnomalresult" element={<AbnomalResultPage />} />

        <Route path="/history" element={<HistoryPage />} />

      </Routes>
    </Router>
  );
}

export default App;

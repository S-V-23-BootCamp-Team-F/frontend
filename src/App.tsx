import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStart from './pages/GetStart';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/getStart" element={<GetStart />} />
      </Routes>
    </Router>
  );
}

export default App;

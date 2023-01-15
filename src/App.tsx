import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStart from './pages/GetStart';
import LoginPage from './pages/SigninPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';

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

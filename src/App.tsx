import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

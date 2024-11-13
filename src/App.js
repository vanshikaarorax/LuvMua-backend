// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MapPage from './pages/MapPage/Map';
import './App.scss';
import JoinPage from './pages/JoinPage/JoinPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map-page" element={<MapPage />} />
        <Route path="/join-page" element={<JoinPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      
        {/* Optional: Catch-all route for 404 Not Found */}
      </Routes>
    </Router>
  );
}

export default App;

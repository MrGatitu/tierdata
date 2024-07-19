import React from 'react';
import Home from '../Dashboard/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Pages;

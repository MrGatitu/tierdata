import React from 'react';
import Home from '../Dashboard/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />/ */}
      </Routes>
    </Router>
  );
};

export default Pages;

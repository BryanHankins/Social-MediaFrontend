import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profileh from './pages/Profileh'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import Discover from './pages/Discover2'
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 text-center">
          <Link to="/" className="px-4 py-2 text-white">
            Home
          </Link>
          <Link to="/events" className="px-4 py-2 text-white">
            Events
          </Link>
          <Link to="/about" className="px-4 py-2 text-white">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Profileh />} />
          <Route path="/events" element={<Profile />} />
          <Route path="/events" element={<Feed />} />
          <Route path="/about" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
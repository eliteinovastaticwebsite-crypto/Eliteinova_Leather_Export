// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllBagsPage from './pages/AllBagsPage';
import HomePage from './pages/HomePage'; 
import BestSellerPage from './pages/BestSellerPage';
import BackPackPage from './pages/BackPackPage';
import LaptopOfficePage from './pages/LaptopOfficePage';
import SlingPassportPage from './pages/SlingPassportPage';
import WomenHandbagsPage from './pages/WomenHandbags';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bag/all" element={<AllBagsPage />} />
          <Route path="/bag/best-seller" element={<BestSellerPage />} />
          <Route path="/bag/backpack" element={<BackPackPage />} />
          <Route path="/bag/laptop-office" element={<LaptopOfficePage />} />
          <Route path="/bag/sling-passport" element={<SlingPassportPage />} />
          <Route path="women-handbags" element={<WomenHandbagsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

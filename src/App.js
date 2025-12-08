// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; 
import WomenHandbagsPage from './pages/WomenHandbags';
import LaptopBagsPage from './pages/LaptopBag';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="women-handbags" element={<WomenHandbagsPage />} />
          <Route path="laptopbags" element={<LaptopBagsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'; 
import WomenHandbagsPage from './pages/WomenHandbags';
import LaptopBagsPage from './pages/LaptopBag';
import BriefcasesPage from './pages/BriefcasesPage';
import MensWalletsPage from './pages/MensWalletPage';
import PassportHoldersPage from './pages/PassportHoldersPage';
import BeltsPage from './pages/BeltsPage';
import MensBackpackPage from './pages/MensBackpack';
import WomensBackpackPage from './pages/WomensBackpack';
import TravelBagsPage from './pages/TravelBagPage';
import TrolleyBagPage from './pages/TrolleyBagPage';
import DuffleBagPage from './pages/DuffleBagPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="women-handbags" element={<WomenHandbagsPage />} />
          <Route path="laptopbags" element={<LaptopBagsPage />} />

          <Route path="travelbags/leather-travel-bags" element={<TravelBagsPage />} />
          <Route path="travelbags/trolley-bags" element={<TrolleyBagPage />} />
          <Route path="travelbags/duffle-bags" element={<DuffleBagPage />} />

          <Route path="backpacks/men-backpacks" element={<MensBackpackPage />} />
          <Route path="backpacks/women-backpacks" element={<WomensBackpackPage />} />

          <Route path="brief-cases" element={<BriefcasesPage />} />
          <Route path="wallet/menswallet" element={<MensWalletsPage />} />
          <Route path="wallet/passportholder" element={<PassportHoldersPage />} />
          <Route path="belt" element={<BeltsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

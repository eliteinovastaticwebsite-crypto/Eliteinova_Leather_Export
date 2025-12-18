// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
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
import BootsPage from './pages/BootsPage';
import CasualShoesPage from './pages/CasualShoesPage';
import FormalShoesPage from './pages/FormalShoesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="women-handbags" element={<WomenHandbagsPage />} />
          <Route path="laptopbags" element={<LaptopBagsPage />} />

          <Route path="shoes/boots" element={<BootsPage />} />
          <Route path="shoes/formal" element={<FormalShoesPage />} />
          <Route path="shoes/casual" element={<CasualShoesPage />} />

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
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
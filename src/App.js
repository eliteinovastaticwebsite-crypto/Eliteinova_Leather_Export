import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
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
import SlingBagsPage from './pages/SlingBags';
import SmallCrossBodyBagsPage from './pages/SmallCrossBodyBags';
import ShoesPage from './pages/ShoesPage';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
// Import the 4 new pages
import SmallBagsPage from './pages/SmallBagsPage';
import TravelPage from './pages/TravelPage';
import BackpacksPage from './pages/BackpacksPage';
import WalletsPage from './pages/WalletsPage';
import PrivacyTerms from './pages/PrivacyTerms';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="women-handbags" element={<WomenHandbagsPage />} />
            <Route path="laptopbags" element={<LaptopBagsPage />} />
            
            {/* Shoes Routes */}
            <Route path="shoes" element={<ShoesPage />} />
            <Route path="shoes/boots" element={<BootsPage />} />
            <Route path="shoes/formal" element={<FormalShoesPage />} />
            <Route path="shoes/casual" element={<CasualShoesPage />} />

            {/* Travel Bags Routes */}
            <Route path="travelbags" element={<TravelPage />} /> {/* NEW */}
            <Route path="travelbags/leather-travel-bags" element={<TravelBagsPage />} />
            <Route path="travelbags/trolley-bags" element={<TrolleyBagPage />} />
            <Route path="travelbags/duffle-bags" element={<DuffleBagPage />} />

            {/* Backpacks Routes */}
            <Route path="backpacks" element={<BackpacksPage />} /> {/* NEW */}
            <Route path="backpacks/men-backpacks" element={<MensBackpackPage />} />
            <Route path="backpacks/women-backpacks" element={<WomensBackpackPage />} />

            {/* Small Bags Routes */}
            <Route path="smallbags" element={<SmallBagsPage />} /> {/* NEW */}
            <Route path="smallbags/sling-bags" element={<SlingBagsPage />} />
            <Route path="smallbags/small-crossbody-bags" element={<SmallCrossBodyBagsPage />} />

            {/* Wallets Routes */}
            <Route path="wallet" element={<WalletsPage />} /> {/* NEW */}
            <Route path="wallet/menswallet" element={<MensWalletsPage />} />
            <Route path="wallet/passportholder" element={<PassportHoldersPage />} />
            
            {/* Other Routes */}
            <Route path="brief-cases" element={<BriefcasesPage />} />
            <Route path="belt" element={<BeltsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="privacypolicy" element={<PrivacyTerms />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalletsPage.css';

const WalletsPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const collections = [
    {
      name: "Men's Wallet",
      products: 20,
      image: "/images/wallet.png",
      path: "/wallet/menswallet"
    },
    {
      name: "PassPort Holders",
      products: 15,
      image: "/images/passportbanner.png",
      path: "/wallet/passportholder"
    }
  ];

  // Wallet products with descriptions
  const products = [
    { id: 1, name: 'Bifold Leather Wallet', image: '/images/wallet1.png', color: 'Black', date: '2024-01-15', description: 'Classic bifold wallet made from premium leather. Features multiple card slots, cash compartment, and ID window for organized daily use.' },
    { id: 2, name: 'Bifold Leather Wallet', image: '/images/wallet2.png', color: 'Brown', date: '2024-02-20', description: 'Sophisticated brown bifold wallet with durable construction. Perfect for everyday carry with ample storage for cards and cash.' },
    { id: 3, name: 'Trifold Wallet', image: '/images/wallet3.png', color: 'Tan', date: '2024-03-10', description: 'Functional trifold wallet in elegant tan leather. Features extra card slots and secure closure for maximum organization.' },
    { id: 4, name: 'Trifold Wallet', image: '/images/wallet4.png', color: 'Black', date: '2024-01-25', description: 'Sleek black trifold wallet with compact design. Ideal for minimalist carry while maintaining full functionality.' },
    { id: 5, name: 'Minimalist Card Holder', image: '/images/wallet5.png', color: 'Tan', date: '2024-04-05', description: 'Slim tan card holder for essential cards only. Perfect for front pocket carry with RFID protection technology.' },
    { id: 6, name: 'Minimalist Card Holder', image: '/images/wallet6.png', color: 'Dark Brown', date: '2024-02-14', description: 'Dark brown minimalist card holder with premium leather. Features precise stitching and elegant finishing.' },
    { id: 7, name: 'Money Clip Wallet', image: '/images/wallet7.png', color: 'Black', date: '2024-05-18', description: 'Combination wallet with integrated money clip. Provides secure cash storage with quick access design.' },
    { id: 8, name: 'Money Clip Wallet', image: '/images/wallet8.png', color: 'Brown', date: '2024-03-22', description: 'Brown leather wallet with sturdy money clip. Combines traditional wallet features with modern convenience.' },
    { id: 9, name: 'Passport Wallet', image: '/images/wallet9.png', color: 'Tan', date: '2024-06-30', description: 'Comprehensive passport wallet for travelers. Features multiple compartments for documents, tickets, and cards.' },
    { id: 10, name: 'Passport Wallet', image: '/images/wallet10.png', color: 'Brown', date: '2024-07-12', description: 'Brown leather passport holder with spacious design. Perfect for international travel with organized storage.' },
    { id: 11, name: 'Zipper Wallet', image: '/images/wallet11.png', color: 'Black', date: '2024-08-05', description: 'Secure zipper wallet with full enclosure. Features multiple internal compartments for complete organization.' },
    { id: 12, name: 'Zipper Wallet', image: '/images/wallet12.png', color: 'Brown', date: '2024-01-08', description: 'Brown leather zipper wallet with durable construction. Ensures complete security for all contents.' },
    { id: 13, name: 'RFID Blocking Wallet', image: '/images/wallet13.png', color: 'Tan', date: '2024-09-14', description: 'Security-focused wallet with RFID blocking technology. Protects cards from electronic theft while maintaining style.' },
    { id: 14, name: 'RFID Blocking Wallet', image: '/images/wallet14.png', color: 'Black', date: '2024-04-28', description: 'Sleek black RFID blocking wallet. Combines modern security features with classic leather design.' },
    { id: 15, name: 'Travel Wallet', image: '/images/wallet15.png', color: 'Tan', date: '2024-10-20', description: 'Comprehensive travel wallet for frequent flyers. Features dedicated spaces for boarding passes and travel documents.' },
    { id: 16, name: 'Travel Wallet', image: '/images/wallet16.png', color: 'Brown', date: '2024-05-07', description: 'Brown leather travel wallet with practical organization. Perfect for keeping all travel essentials in one place.' },
    { id: 17, name: 'Front Pocket Wallet', image: '/images/wallet17.png', color: 'Burgundy', date: '2024-11-11', description: 'Slim burgundy wallet designed for front pocket carry. Reduces bulk while maintaining essential storage.' },
    { id: 18, name: 'Front Pocket Wallet', image: '/images/wallet18.png', color: 'Black', date: '2024-06-17', description: 'Black front pocket wallet with minimalist design. Features quick access to frequently used cards.' },
    { id: 19, name: 'Metal Money Clip', image: '/images/wallet19.png', color: 'Silver', date: '2024-12-01', description: 'Premium silver metal money clip. Combines elegant design with secure cash holding functionality.' },
    { id: 20, name: 'Metal Money Clip', image: '/images/wallet20.png', color: 'Gold', date: '2024-07-25', description: 'Luxurious gold-toned money clip. Features durable construction and smooth operation for daily use.' }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'best-selling':
        return a.id - b.id;
      case 'alphabetically-az':
        return a.name.localeCompare(b.name);
      case 'alphabetically-za':
        return b.name.localeCompare(a.name);
      case 'date-old-new':
        return new Date(a.date) - new Date(b.date);
      case 'date-new-old':
        return new Date(b.date) - new Date(a.date);
      case 'featured':
      default:
        return 0;
    }
  });

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="wallets-page">
      <div className="wallets-breadcrumb">
        <a href="/">Home</a> / <span>Wallets</span>
      </div>

      <div className="wallets-hero-section">
        <img src="/images/walletbanner.png" alt="Premium Leather Wallets" className="wallets-hero-image" />
      </div>

      {/* Collections Section */}
      <section className="wallets-collections-section">
        <div className="wallets-section-header">
          <h2 className="wallets-section-title">COLLECTION</h2>
          <div className="wallets-title-underline"></div>
        </div>

        <div className="wallets-collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="wallets-collection-card"
              onClick={() => handleCollectionClick(collection.path)}
            >
              <div className="wallets-collection-image">
                <div className="wallets-collection-icon-wrapper">
                  <img src={collection.image} alt={collection.name} className="wallets-collection-img" />
                </div>
              </div>
              <h3 className="wallets-collection-name">{collection.name}</h3>
              <p className="wallets-collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leather Small bags Benefits Section */}
      <section className="wallets-benefits-section">
        <div className="wallets-benefits-content">
          <div className="wallets-benefits-image">
            <div className="wallets-benefits-image-placeholder">
              <img src="/images/wallet about.jpg" alt="Premium Leather Wallets" className="wallets-benefits-img" />
            </div>
          </div>
          <div className="wallets-benefits-text">
            <h2 className="wallets-benefits-title">Refined Essentials in Leather Wallets & Passport Holders</h2>
            <p className="wallets-benefits-description">
              At Eliteinova Leather Products Export, our leather wallets and passport holders are crafted to elevate everyday essentials through thoughtful design and superior craftsmanship. 
              Designed for convenience and elegance, our leather wallets offer well-organized compartments for cards, cash, and documents, while our passport holders provide secure protection for travel essentials. 
              Slim profiles ensure easy carrying without added bulk, making them ideal for daily use and travel alike. 
              Over time, the natural leather develops a distinctive patina, transforming each wallet and passport holder into a unique expression of refined style, functionality, and enduring craftsmanship.
            </p>
            <button className="wallets-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="wallets-featured-header">
        <div className="wallets-section-header">
          <h2 className="wallets-section-title">FEATURED PRODUCTS</h2>
          <div className="wallets-title-underline"></div>
        </div>
      </section>

      <div className="wallets-container">
        <div className="wallets-filter-bar">
          <div className="wallets-sort-section">
            <span className="wallets-products-count">{sortedProducts.length} Products</span>
            <div className="wallets-sort-dropdown">
              <label>Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="best-selling">Best selling</option>
                <option value="alphabetically-az">Alphabetically, A-Z</option>
                <option value="alphabetically-za">Alphabetically, Z-A</option>
                <option value="date-old-new">Date, old to new</option>
                <option value="date-new-old">Date, new to old</option>
              </select>
            </div>
          </div>
        </div>

        <div className="wallets-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="wallets-product-card">
              <div className="wallets-card-inner">
                <div className="wallets-card-front">
                  <div className="wallets-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="wallets-product-info">
                    <h3 className="wallets-product-name">{product.name}</h3>
                    <p className="wallets-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="wallets-card-back">
                  <div className="wallets-back-content">
                    <h3 className="wallets-back-title">{product.name}</h3>
                    <div className="wallets-back-divider"></div>
                    <p className="wallets-back-color">Color: {product.color}</p>
                    <p className="wallets-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="wallets-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default WalletsPage;
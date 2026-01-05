import React, { useState } from 'react';
import './MensWallets.css';

const MensWalletsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Men's wallet products with descriptions
  const products = [
    { id: 1, name: 'Classic Bifold Wallet', image: '/images/wal1.png', color: 'Brown', date: '2024-01-15', description: 'Premium leather bifold wallet with multiple card slots and cash compartment. Features classic design with durable construction.' },
    { id: 2, name: 'Classic Bifold Wallet', image: '/images/wal2.png', color: 'Green', date: '2024-02-20', description: 'Elegant green leather bifold wallet with sophisticated texture. Perfect for everyday use with organized storage.' },
    { id: 3, name: 'Slim Trifold Wallet', image: '/images/wal3.png', color: 'Black', date: '2024-03-10', description: 'Slim black trifold wallet with compact design. Features extra card slots and secure closure for maximum organization.' },
    { id: 4, name: 'Slim Trifold Wallet', image: '/images/wal4.png', color: 'Tan', date: '2024-01-25', description: 'Sophisticated tan leather trifold wallet with rich color. Combines style with practical functionality.' },
    { id: 5, name: 'Minimalist Card Holder', image: '/images/wal5.png', color: 'Black', date: '2024-04-05', description: 'Sleek black minimalist card holder for essential cards only. Perfect for front pocket carry with RFID protection.' },
    { id: 6, name: 'Minimalist Card Holder', image: '/images/wal6.png', color: 'Brown', date: '2024-02-14', description: 'Rich brown minimalist card holder with premium leather. Features precise stitching and elegant finishing.' },
    { id: 7, name: 'Money Clip Wallet', image: '/images/wal7.png', color: 'Tan', date: '2024-05-18', description: 'Combination wallet with integrated money clip in tan leather. Provides secure cash storage with quick access design.' },
    { id: 8, name: 'Vintage Leather Wallet', image: '/images/wal8.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired brown leather wallet with classic appeal. Features traditional craftsmanship with modern convenience.' }
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

  return (
    <div className="menswallets-page">
      <div className="menswallets-breadcrumb">
        <a href="/">Home</a> / <a href="/wallet">Wallet</a> / <span>Men's Wallets</span>
      </div>

      <div className="menswallets-hero-section">
        <img src="/images/wallet_hero.png" alt="Premium Men's Wallets" className="menswallets-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="menswallets-featured-header">
        <div className="menswallets-section-header">
          <h2 className="menswallets-section-title">FEATURED PRODUCTS</h2>
          <div className="menswallets-title-underline"></div>
        </div>
      </section>

      <div className="menswallets-container">
        <div className="menswallets-filter-bar">
          <div className="menswallets-sort-section">
            <span className="menswallets-products-count">{sortedProducts.length} Products</span>
            <div className="menswallets-sort-dropdown">
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

        <div className="menswallets-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="menswallets-product-card">
              <div className="menswallets-card-inner">
                <div className="menswallets-card-front">
                  <div className="menswallets-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="menswallets-product-info">
                    <h3 className="menswallets-product-name">{product.name}</h3>
                    <p className="menswallets-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="menswallets-card-back">
                  <div className="menswallets-back-content">
                    <h3 className="menswallets-back-title">{product.name}</h3>
                    <div className="menswallets-back-divider"></div>
                    <p className="menswallets-back-color">Color: {product.color}</p>
                    <p className="menswallets-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="menswallets-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default MensWalletsPage;
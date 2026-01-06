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
    { id: 1, name: 'Bifold Leather Wallet', image: '/images/wal1.png', color: 'Tan', date: '2024-01-15', description: 'A timeless bifold wallet crafted from smooth leather with ample card and cash compartments.' },
    { id: 2, name: 'Bifold Leather Wallet', image: '/images/wal2.png', color: 'Dark Brown', date: '2024-02-20', description: 'Premium croc-textured leather wallet offering a bold, sophisticated look with everyday functionality.' },
    { id: 3, name: 'Bifold Leather Wallet', image: '/images/wal3.png', color: 'Tan', date: '2024-03-10', description: 'Compact trifold design providing organized storage without adding bulk.' },
    { id: 4, name: 'Bifold Leather Wallet', image: '/images/wal4.png', color: 'Black', date: '2024-01-25', description: 'Durable leather trifold wallet designed for maximum storage and secure folding.' },
    { id: 5, name: 'Bifold Leather Wallet', image: '/images/wal5.png', color: 'Black', date: '2024-04-05', description: 'Sleek wallet with an integrated money clip for a clean, modern carry.' },
    { id: 6, name: 'Bifold Leather Wallet', image: '/images/wal6.png', color: 'Mustard Brown', date: '2024-02-14', description: 'Soft suede leather wallet combining style and convenience with a strong money clip.' },
    { id: 7, name: 'Bifold Leather Wallet', image: '/images/wal7.png', color: 'Black', date: '2024-05-18', description: 'Combination wallet with integrated money clip. Provides secure cash storage with quick access design.' },
    { id: 8, name: 'Bifold Leather Wallet', image: '/images/wal8.png', color: 'Brown', date: '2024-03-22', description: 'Brown leather wallet with sturdy money clip. Combines traditional wallet features with modern convenience.' },
    { id: 9, name: 'Leather Passport Holder', image: '/images/pass1.png', color: 'Tan', date: '2024-06-30', description: 'Comprehensive passport wallet for travelers. Features multiple compartments for documents, tickets, and cards.' },
    { id: 10, name: 'Classic Leather Passport Wallet', image: '/images/pass2.png', color: 'Brown', date: '2024-07-12', description: 'Brown leather passport holder with spacious design. Perfect for international travel with organized storage.' },
    { id: 11, name: 'RFID Protected Passport Holder', image: '/images/pass3.png', color: 'Black', date: '2024-08-05', description: 'Secure zipper wallet with full enclosure. Features multiple internal compartments for complete organization.' },
    { id: 12, name: 'RFID Protected Passport Holder', image: '/images/pass4.png', color: 'Olive Green', date: '2024-01-08', description: 'Brown leather zipper wallet with durable construction. Ensures complete security for all contents.' },
    { id: 13, name: 'Travel Organizer Passport Wallet', image: '/images/pass5.png', color: 'Tan', date: '2024-09-14', description: 'Security-focused wallet with RFID blocking technology. Protects cards from electronic theft while maintaining style.' },
    { id: 14, name: 'Travel Organizer Passport Wallet', image: '/images/pass6.png', color: 'Brown', date: '2024-04-28', description: 'Sleek black RFID blocking wallet. Combines modern security features with classic leather design.' },
    { id: 15, name: 'Minimal Passport Sleeve', image: '/images/pass7.png', color: 'Tan Brown', date: '2024-10-20', description: 'Comprehensive travel wallet for frequent flyers. Features dedicated spaces for boarding passes and travel documents.' },
    { id: 16, name: 'Zip-Around Passport Travel Wallet', image: '/images/pass8.png', color: 'Brown', date: '2024-05-07', description: 'Brown leather travel wallet with practical organization. Perfect for keeping all travel essentials in one place.' },
    /*{ id: 17, name: 'Front Pocket Wallet', image: '/images/wallet17.png', color: 'Burgundy', date: '2024-11-11', description: 'Slim burgundy wallet designed for front pocket carry. Reduces bulk while maintaining essential storage.' },
    { id: 18, name: 'Front Pocket Wallet', image: '/images/wallet18.png', color: 'Black', date: '2024-06-17', description: 'Black front pocket wallet with minimalist design. Features quick access to frequently used cards.' },
    { id: 19, name: 'Metal Money Clip', image: '/images/wallet19.png', color: 'Silver', date: '2024-12-01', description: 'Premium silver metal money clip. Combines elegant design with secure cash holding functionality.' },
    { id: 20, name: 'Metal Money Clip', image: '/images/wallet20.png', color: 'Gold', date: '2024-07-25', description: 'Luxurious gold-toned money clip. Features durable construction and smooth operation for daily use.' }
  */];

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
    </div>
  );
};

export default WalletsPage;
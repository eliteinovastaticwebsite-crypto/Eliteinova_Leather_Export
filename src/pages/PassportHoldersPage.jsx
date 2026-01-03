import React, { useState } from 'react';
import './PassportHolders.css';

const PassportHoldersPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // 20 passport holder products
  const products = [
    { id: 1, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/pass6.png', color: 'Brown', date: '2024-01-15', description: 'Premium leather passport holder with secure closure and multiple card slots. Features classic design with durable construction.' },
    { id: 2, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/pass2.png', color: 'Green', date: '2024-02-20', description: 'Elegant green leather passport holder with sophisticated texture. Perfect for travel with organized document storage.' },
    { id: 3, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/pass3.png', color: 'Black', date: '2024-03-10', description: 'Sleek black leather passport holder with compact design. Features extra card slots and secure closure for travel documents.' },
    { id: 4, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/pass4.png', color: 'Tan', date: '2024-01-25', description: 'Sophisticated tan leather passport holder with rich color. Combines style with practical functionality for travelers.' },
    { id: 5, name: 'The Philos Leather Laptop Bag', image: '/images/pass5.png', color: 'Black', date: '2024-04-05', description: 'Premium black leather passport holder with minimalist design. Perfect for frequent travelers with RFID protection.' },
    { id: 6, name: 'The Philos Leather Laptop Bag', image: '/images/pass6.png', color: 'Brown', date: '2024-02-14', description: 'Rich brown leather passport holder with premium finish. Features precise stitching and elegant finishing touches.' },
    { id: 7, name: 'The Philos Leather Laptop Bag', image: '/images/pass7.png', color: 'Tan', date: '2024-05-18', description: 'Classic tan leather passport holder with secure closure. Provides organized storage for travel documents and cards.' },
    { id: 8, name: 'Vintage Leather Travel Laptop Bag', image: '/images/pass8.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired brown leather passport holder with classic appeal. Features traditional craftsmanship for modern travelers.' },
    // Additional products can be uncommented as needed
    /*{ id: 9, name: 'Vintage Leather Travel Laptop Bag', image: '/images/L8.png', color: 'Black', date: '2024-06-30', description: 'Description here' },
    { id: 10, name: 'Urban Leather Laptop Bag', image: '/images/L9.png', color: 'Black', date: '2024-07-12', description: 'Description here' },
    { id: 11, name: 'Urban Leather Laptop Bag', image: '/images/L10.png', color: 'Tan', date: '2024-08-05', description: 'Description here' },
    { id: 12, name: 'Classic Leather Laptop Bag', image: '/images/L11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Description here' },
    { id: 13, name: 'Classic Leather Laptop Bag', image: '/images/L12.png', color: 'Brown', date: '2024-09-14', description: 'Description here' },
    { id: 14, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L13.png', color: 'Brown', date: '2024-04-28', description: 'Description here' },
    { id: 15, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L14.png', color: 'Black', date: '2024-10-20', description: 'Description here' },
    { id: 16, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Description here' },
    { id: 17, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Description here' },
    { id: 18, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Description here' },
    { id: 19, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Description here' },
    { id: 20, name: 'Premium Leather Travel Laptop Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Description here' }*/
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
    <div className="passportholders-page">
      <div className="passportholders-breadcrumb">
        <a href="/">Home</a> / <span>Passport Holders</span>
      </div>

      <div className="passportholders-hero-section">
        <img src="/images/passport_hero.png" alt="Elegant Passport Holders" className="passportholders-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="passportholders-featured-header">
        <div className="passportholders-section-header">
          <h2 className="passportholders-section-title">FEATURED PRODUCTS</h2>
          <div className="passportholders-title-underline"></div>
        </div>
      </section>

      <div className="passportholders-container">
        <div className="passportholders-filter-bar">
          <div className="passportholders-sort-section">
            <span className="passportholders-products-count">{sortedProducts.length} Products</span>
            <div className="passportholders-sort-dropdown">
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

        <div className="passportholders-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="passportholders-product-card">
              <div className="passportholders-card-inner">
                <div className="passportholders-card-front">
                  <div className="passportholders-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="passportholders-product-info">
                    <h3 className="passportholders-product-name">{product.name}</h3>
                    <p className="passportholders-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="passportholders-card-back">
                  <div className="passportholders-back-content">
                    <h3 className="passportholders-back-title">{product.name}</h3>
                    <div className="passportholders-back-divider"></div>
                    <p className="passportholders-back-color">Color: {product.color}</p>
                    <p className="passportholders-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="passportholders-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default PassportHoldersPage;
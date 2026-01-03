import React, { useState } from 'react';
import './WomensBackpack.css';

const WomensBackpackPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // 20 women's backpack products with descriptions
  const products = [
    { id: 1, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/red_laptopbag.png', color: 'Brown', date: '2024-01-15', description: 'Premium leather laptop bag with elegant design and secure compartments for electronics and essentials.' },
    { id: 2, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/L1.png', color: 'Green', date: '2024-02-20', description: 'Sophisticated green leather laptop bag with modern styling and functional organization features.' },
    { id: 3, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/L2.png', color: 'Black', date: '2024-03-10', description: 'Classic black leather laptop bag perfect for professional settings with durable construction.' },
    { id: 4, name: 'Rexo Crunch Leather Laptop Bag', image: '/images/L3.png', color: 'Tan', date: '2024-01-25', description: 'Elegant tan leather laptop bag featuring timeless design and comfortable carrying options.' },
    { id: 5, name: 'The Philos Leather Laptop Bag', image: '/images/L4.png', color: 'Black', date: '2024-04-05', description: 'Philosophical design meets practicality in this premium black leather laptop bag.' },
    { id: 6, name: 'The Philos Leather Laptop Bag', image: '/images/L5.png', color: 'Brown', date: '2024-02-14', description: 'Rich brown leather laptop bag with thoughtful organization and refined aesthetics.' },
    { id: 7, name: 'The Philos Leather Laptop Bag', image: '/images/L6.png', color: 'Tan', date: '2024-05-18', description: 'Beautiful tan leather laptop bag blending functionality with sophisticated style.' },
    { id: 8, name: 'Vintage Leather Travel Laptop Bag', image: '/images/L7.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired leather travel bag with classic charm and modern functionality.' },
    { id: 9, name: 'Vintage Leather Travel Laptop Bag', image: '/images/L8.png', color: 'Black', date: '2024-06-30', description: 'Timeless black vintage travel laptop bag offering both style and practicality.' },
    { id: 10, name: 'Urban Leather Laptop Bag', image: '/images/L9.png', color: 'Black', date: '2024-07-12', description: 'Contemporary urban leather laptop bag designed for the modern professional woman.' },
    { id: 11, name: 'Urban Leather Laptop Bag', image: '/images/L10.png', color: 'Tan', date: '2024-08-05', description: 'Stylish tan urban leather laptop bag perfect for city commuting and work.' },
    { id: 12, name: 'Classic Leather Laptop Bag', image: '/images/L11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Traditional dark brown classic leather laptop bag with enduring style.' },
    { id: 13, name: 'Classic Leather Laptop Bag', image: '/images/L12.png', color: 'Brown', date: '2024-09-14', description: 'Elegant brown classic leather laptop bag featuring premium craftsmanship.' },
    { id: 14, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L13.png', color: 'Brown', date: '2024-04-28', description: 'Chic travel laptop bag combining fashion-forward design with travel functionality.' },
    { id: 15, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L14.png', color: 'Black', date: '2024-10-20', description: 'Sleek black stylish travel laptop bag offering both elegance and utility.' },
    { id: 16, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Comfortable leather shoulder laptop bag designed for easy carrying and accessibility.' },
    { id: 17, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder laptop bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Modern urban leather tote perfect for work and casual occasions.' },
    { id: 19, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather tote combining sophistication with everyday utility.' },
    { id: 20, name: 'Premium Leather Travel Laptop Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel laptop bag offering luxury protection and stylish travel.' }
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
    <div className="womensbackpack-page">
      <div className="womensbackpack-breadcrumb">
        <a href="/">Home</a> / <span>Women's Backpack</span>
      </div>

      <div className="womensbackpack-hero-section">
        <img src="/images/backpackw_hero.png" alt="Elegant Women's Laptop Bags" className="womensbackpack-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="womensbackpack-featured-header">
        <div className="womensbackpack-section-header">
          <h2 className="womensbackpack-section-title">FEATURED PRODUCTS</h2>
          <div className="womensbackpack-title-underline"></div>
        </div>
      </section>

      <div className="womensbackpack-container">
        <div className="womensbackpack-filter-bar">
          <div className="womensbackpack-sort-section">
            <span className="womensbackpack-products-count">{sortedProducts.length} Products</span>
            <div className="womensbackpack-sort-dropdown">
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

        <div className="womensbackpack-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="womensbackpack-product-card">
              <div className="womensbackpack-card-inner">
                <div className="womensbackpack-card-front">
                  <div className="womensbackpack-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="womensbackpack-product-info">
                    <h3 className="womensbackpack-product-name">{product.name}</h3>
                    <p className="womensbackpack-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="womensbackpack-card-back">
                  <div className="womensbackpack-back-content">
                    <h3 className="womensbackpack-back-title">{product.name}</h3>
                    <div className="womensbackpack-back-divider"></div>
                    <p className="womensbackpack-back-color">Color: {product.color}</p>
                    <p className="womensbackpack-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="womensbackpack-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default WomensBackpackPage;
import React, { useState } from 'react';
import './Boots.css';

const BootsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Boots products with descriptions
  const products = [
    { id: 1, name: 'Classic Leather Boots', image: '/images/boot1.png', color: 'Brown', date: '2024-01-15', description: 'Premium leather boots with durable construction. Features comfortable cushioning and anti-slip sole for all-day wear.' },
    { id: 2, name: 'Classic Leather Boots', image: '/images/boot2.png', color: 'Black', date: '2024-02-20', description: 'Sophisticated black leather boots with timeless design. Perfect for both formal occasions and casual outings.' },
    { id: 3, name: 'Vintage Ankle Boots', image: '/images/boot3.png', color: 'Tan', date: '2024-03-10', description: 'Vintage-inspired ankle boots with classic appeal. Crafted from premium leather with comfortable fit.' },
    { id: 4, name: 'Vintage Ankle Boots', image: '/images/boot4.png', color: 'Dark Brown', date: '2024-01-25', description: 'Dark brown ankle boots with vintage charm. Features quality construction and stylish design.' },
    { id: 5, name: 'Chelsea Leather Boots', image: '/images/boot5.png', color: 'Black', date: '2024-04-05', description: 'Classic Chelsea boots in sleek black leather. Features elastic side panels for easy wear and superior comfort.' },
    { id: 6, name: 'Chelsea Leather Boots', image: '/images/boot6.png', color: 'Brown', date: '2024-02-14', description: 'Brown Chelsea boots with premium leather finish. Versatile design suitable for various occasions.' },
    { id: 7, name: 'Combat Boots', image: '/images/boot7.png', color: 'Black', date: '2024-05-18', description: 'Rugged combat boots with military-inspired design. Durable leather construction with reinforced stitching.' },
    { id: 8, name: 'Combat Boots', image: '/images/boot8.png', color: 'Brown', date: '2024-03-22', description: 'Brown combat boots with sturdy construction. Features lace-up design and superior ankle support.' },
    { id: 9, name: 'Desert Boots', image: '/images/boot9.png', color: 'Tan', date: '2024-06-30', description: 'Comfortable desert boots in tan suede. Lightweight design perfect for casual wear and warm weather.' },
    { id: 10, name: 'Desert Boots', image: '/images/boot10.png', color: 'Brown', date: '2024-07-12', description: 'Classic brown desert boots with timeless style. Features soft leather and comfortable crepe sole.' },
    { id: 11, name: 'Chukka Boots', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-08-05', description: 'Elegant chukka boots in rich brown leather. Minimalist design with superior comfort and durability.' },
    { id: 12, name: 'Chukka Boots', image: '/api/placeholder/300/300', color: 'Black', date: '2024-01-08', description: 'Sleek black chukka boots with refined appearance. Perfect for smart-casual occasions with premium leather.' },
    { id: 13, name: 'Work Boots', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-09-14', description: 'Heavy-duty work boots built for durability. Features steel toe protection and slip-resistant sole.' },
    { id: 14, name: 'Work Boots', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-04-28', description: 'Tan work boots with rugged construction. Designed for comfort during long work hours with safety features.' },
    { id: 15, name: 'Hiking Boots', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-10-20', description: 'Professional hiking boots with waterproof protection. Features excellent ankle support and grip for trails.' },
    { id: 16, name: 'Hiking Boots', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Black hiking boots with all-terrain capability. Durable construction with breathable membrane technology.' },
    { id: 17, name: 'Dress Boots', image: '/api/placeholder/300/300', color: 'Black', date: '2024-11-11', description: 'Sophisticated dress boots in polished black leather. Perfect for formal occasions with elegant finish.' },
    { id: 18, name: 'Dress Boots', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-06-17', description: 'Dark brown dress boots with refined appearance. Features premium leather and classic styling.' },
    { id: 19, name: 'Winter Boots', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-12-01', description: 'Insulated winter boots for cold weather. Features waterproof leather and warm fleece lining.' },
    { id: 20, name: 'Winter Boots', image: '/api/placeholder/300/300', color: 'Black', date: '2024-07-25', description: 'Black winter boots with superior insulation. Designed for harsh weather with thermal protection.' }
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
    <div className="boots-page">
      <div className="boots-breadcrumb">
        <a href="/">Home</a> / <a href="/shoes">Shoes</a> / <span>Boots</span>
      </div>

      <div className="boots-hero-section">
        <img src="/images/boots_hero.png" alt="Premium Leather Boots" className="boots-hero-image" />
      </div>

      {/* Featured Products Header - Added this section */}
      <section className="boots-featured-header">
        <div className="boots-section-header">
          <h2 className="boots-section-title">FEATURED PRODUCTS</h2>
          <div className="boots-title-underline"></div>
        </div>
      </section>

      <div className="boots-container">
        <div className="boots-filter-bar">
          <div className="boots-sort-section">
            <span className="boots-products-count">{sortedProducts.length} Products</span>
            <div className="boots-sort-dropdown">
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

        <div className="boots-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="boots-product-card">
              <div className="boots-card-inner">
                <div className="boots-card-front">
                  <div className="boots-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="boots-product-info">
                    <h3 className="boots-product-name">{product.name}</h3>
                    <p className="boots-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="boots-card-back">
                  <div className="boots-back-content">
                    <h3 className="boots-back-title">{product.name}</h3>
                    <div className="boots-back-divider"></div>
                    <p className="boots-back-color">Color: {product.color}</p>
                    <p className="boots-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="boots-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default BootsPage;
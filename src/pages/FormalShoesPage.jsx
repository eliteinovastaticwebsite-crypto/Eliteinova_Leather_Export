import React, { useState } from 'react';
import './FormalShoes.css';

const FormalShoesPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Formal shoes products with descriptions
  const products = [
    { id: 1, name: 'Oxford Leather Shoes', image: '/images/formal1.png', color: 'Black', date: '2024-01-15', description: 'Classic black Oxford shoes with polished finish. Perfect for business meetings and formal events with superior comfort.' },
    { id: 2, name: 'Oxford Leather Shoes', image: '/images/formal2.png', color: 'Brown', date: '2024-02-20', description: 'Elegant brown Oxford shoes crafted from premium leather. Features classic brogue detailing and comfortable fit.' },
    { id: 3, name: 'Derby Dress Shoes', image: '/images/formal3.png', color: 'Black', date: '2024-03-10', description: 'Sophisticated black Derby shoes with open lacing system. Combines style with exceptional comfort for all-day wear.' },
    { id: 4, name: 'Derby Dress Shoes', image: '/images/formal4.png', color: 'Dark Brown', date: '2024-01-25', description: 'Dark brown Derby shoes with refined appearance. Durable construction with excellent arch support and quality leather.' },
    { id: 5, name: 'Brogue Wingtip Shoes', image: '/images/formal5.png', color: 'Tan', date: '2024-04-05', description: 'Classic brogue wingtip shoes in elegant tan. Features intricate perforations and premium leather construction.' },
    { id: 6, name: 'Brogue Wingtip Shoes', image: '/images/formal6.png', color: 'Black', date: '2024-02-14', description: 'Timeless black brogue wingtips with detailed craftsmanship. Perfect for adding sophistication to any formal outfit.' },
    { id: 7, name: 'Monk Strap Shoes', image: '/images/formal7.png', color: 'Brown', date: '2024-05-18', description: 'Distinguished brown monk strap shoes with buckle closure. Combines traditional design with modern comfort features.' },
    { id: 8, name: 'Monk Strap Shoes', image: '/images/formal8.png', color: 'Black', date: '2024-03-22', description: 'Elegant black monk strap shoes in premium leather. Features double buckle closure for secure fit and refined style.' },
    { id: 9, name: 'Cap-Toe Oxford', image: '/images/formal9.png', color: 'Black', date: '2024-06-30', description: 'Classic cap-toe Oxford in polished black leather. Features clean lines and impeccable craftsmanship for formal occasions.' },
    { id: 10, name: 'Cap-Toe Oxford', image: '/images/formal10.png', color: 'Burgundy', date: '2024-07-12', description: 'Sophisticated burgundy cap-toe Oxford shoes. Premium leather with distinctive color for those seeking unique elegance.' },
    { id: 11, name: 'Chelsea Formal Boots', image: '/images/formal11.png', color: 'Black', date: '2024-08-05', description: 'Sleek black Chelsea boots with elastic side panels. Perfect blend of formal style and contemporary convenience.' },
    { id: 12, name: 'Chelsea Formal Boots', image: '/images/formal12.png', color: 'Brown', date: '2024-01-08', description: 'Brown Chelsea boots with premium leather finish. Versatile design suitable for business and formal settings.' },
    { id: 13, name: 'Loafers Formal', image: '/images/formal13.png', color: 'Black', date: '2024-09-14', description: 'Elegant black leather loafers with slip-on design. Features comfortable fit and sophisticated appearance for formal wear.' },
    /*{ id: 14, name: 'Loafers Formal', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-04-28', description: 'Classic brown loafers with premium leather construction. Perfect for business casual and formal occasions.' },
    { id: 15, name: 'Wholecut Oxford', image: '/api/placeholder/300/300', color: 'Black', date: '2024-10-20', description: 'Luxurious wholecut Oxford in seamless black leather. Represents the pinnacle of formal shoe craftsmanship.' },
    { id: 16, name: 'Wholecut Oxford', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-05-07', description: 'Exquisite dark brown wholecut Oxford shoes. Single piece of leather construction for ultimate elegance.' },
    { id: 17, name: 'Patent Leather Shoes', image: '/api/placeholder/300/300', color: 'Black', date: '2024-11-11', description: 'Glossy patent leather shoes in classic black. Perfect for black-tie events and special formal occasions.' },
    { id: 18, name: 'Patent Leather Shoes', image: '/api/placeholder/300/300', color: 'Burgundy', date: '2024-06-17', description: 'Striking burgundy patent leather shoes with high shine. Makes a bold statement at formal events.' },
    { id: 19, name: 'Double Monk Strap', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-12-01', description: 'Distinguished double monk strap shoes in brown. Features dual buckles for superior fit and elegant appearance.' },
    { id: 20, name: 'Double Monk Strap', image: '/api/placeholder/300/300', color: 'Black', date: '2024-07-25', description: 'Sophisticated black double monk strap shoes. Perfect combination of formal style and unique buckle design.' }
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
  return (
    <div className="formalshoes-page">
      <div className="formalshoes-breadcrumb">
        <a href="/">Home</a> / <a href="/shoes">Shoes</a> / <span>Formal Shoes</span>
      </div>

      <div className="formalshoes-hero-section">
        <img src="/images/formalshoes_hero.png" alt="Elegant Formal Shoes" className="formalshoes-hero-image" />
      </div>

      {/* Featured Products Header - Added this section */}
      <section className="formalshoes-featured-header">
        <div className="formalshoes-section-header">
          <h2 className="formalshoes-section-title">FEATURED PRODUCTS</h2>
          <div className="formalshoes-title-underline"></div>
        </div>
      </section>

      <div className="formalshoes-container">
        <div className="formalshoes-filter-bar">
          <div className="formalshoes-sort-section">
            <span className="formalshoes-products-count">{sortedProducts.length} Products</span>
            <div className="formalshoes-sort-dropdown">
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

        <div className="formalshoes-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="formalshoes-product-card">
              <div className="formalshoes-card-inner">
                <div className="formalshoes-card-front">
                  <div className="formalshoes-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="formalshoes-product-info">
                    <h3 className="formalshoes-product-name">{product.name}</h3>
                    <p className="formalshoes-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="formalshoes-card-back">
                  <div className="formalshoes-back-content">
                    <h3 className="formalshoes-back-title">{product.name}</h3>
                    <div className="formalshoes-back-divider"></div>
                    <p className="formalshoes-back-color">Color: {product.color}</p>
                    <p className="formalshoes-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="formalshoes-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default FormalShoesPage;
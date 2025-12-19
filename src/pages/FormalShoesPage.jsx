import React, { useState } from 'react';
import './FormalShoes.css';

const FormalShoesPage = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: false,
    outOfStock: false
  });
  const [sortBy, setSortBy] = useState('featured');

  // 20 formal shoes products
  const products = [
    { id: 1, name: 'Oxford Leather Shoes', image: '/images/formal1.png', color: 'Black', inStock: true, date: '2024-01-15' },
    { id: 2, name: 'Oxford Leather Shoes', image: '/images/formal2.png', color: 'Brown', inStock: false, date: '2024-02-20' },
    { id: 3, name: 'Derby Dress Shoes', image: '/images/formal3.png', color: 'Black', inStock: true, date: '2024-03-10' },
    { id: 4, name: 'Derby Dress Shoes', image: '/images/formal4.png', color: 'Dark Brown', inStock: true, date: '2024-01-25' },
    { id: 5, name: 'Brogue Wingtip Shoes', image: '/images/formal5.png', color: 'Tan', inStock: true, date: '2024-04-05' },
    { id: 6, name: 'Brogue Wingtip Shoes', image: '/images/formal6.png', color: 'Black', inStock: false, date: '2024-02-14' },
    { id: 7, name: 'Monk Strap Shoes', image: '/images/formal7.png', color: 'Brown', inStock: true, date: '2024-05-18' },
    { id: 8, name: 'Monk Strap Shoes', image: '/images/formal8.png', color: 'Black', inStock: true, date: '2024-03-22' },
   /* { id: 9, name: 'Cap-Toe Oxford', image: '/images/formal9.png', color: 'Black', inStock: true, date: '2024-06-30' },
    { id: 10, name: 'Cap-Toe Oxford', image: '/images/formal10.png', color: 'Burgundy', inStock: true, date: '2024-07-12' },
    { id: 11, name: 'Chelsea Formal Boots', image: '/api/placeholder/300/300', color: 'Black', inStock: false, date: '2024-08-05' },
    { id: 12, name: 'Chelsea Formal Boots', image: '/api/placeholder/300/300', color: 'Brown', inStock: true, date: '2024-01-08' },
    { id: 13, name: 'Loafers Formal', image: '/api/placeholder/300/300', color: 'Black', inStock: true, date: '2024-09-14' },
    { id: 14, name: 'Loafers Formal', image: '/api/placeholder/300/300', color: 'Brown', inStock: true, date: '2024-04-28' },
    { id: 15, name: 'Wholecut Oxford', image: '/api/placeholder/300/300', color: 'Black', inStock: false, date: '2024-10-20' },
    { id: 16, name: 'Wholecut Oxford', image: '/api/placeholder/300/300', color: 'Dark Brown', inStock: true, date: '2024-05-07' },
    { id: 17, name: 'Patent Leather Shoes', image: '/api/placeholder/300/300', color: 'Black', inStock: true, date: '2024-11-11' },
    { id: 18, name: 'Patent Leather Shoes', image: '/api/placeholder/300/300', color: 'Burgundy', inStock: true, date: '2024-06-17' },
    { id: 19, name: 'Double Monk Strap', image: '/api/placeholder/300/300', color: 'Brown', inStock: true, date: '2024-12-01' },
    { id: 20, name: 'Double Monk Strap', image: '/api/placeholder/300/300', color: 'Black', inStock: true, date: '2024-07-25' } */
  ];

  const filteredProducts = products.filter(product => {
    if (!availabilityFilter.inStock && !availabilityFilter.outOfStock) return true;
    if (availabilityFilter.inStock && availabilityFilter.outOfStock) return true;
    if (availabilityFilter.inStock) return product.inStock;
    if (availabilityFilter.outOfStock) return !product.inStock;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  const handleAvailabilityChange = (type) => {
    setAvailabilityFilter(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const resetFilters = () => {
    setAvailabilityFilter({ inStock: false, outOfStock: false });
  };

  const selectedCount = Object.values(availabilityFilter).filter(Boolean).length;

  return (
    <div className="formalshoes-page">
      <div className="formalshoes-breadcrumb">
        <a href="/">Home</a> / <a href="/shoes">Shoes</a> / <span>Formal Shoes</span>
      </div>

      <div className="hero-section">
        <img src="/images/formalshoes_hero.png" alt="Elegant Formal Shoes" className="hero-image" />
      </div>

      <div className="formalshoes-container">
        <div className="formalshoes-filter-bar">
          <div className="formalshoes-filter-section">
            <span className="formalshoes-filter-label">Filter:</span>
            <div className="formalshoes-filter-dropdown">
              <button className="formalshoes-filter-btn">
                Availability {selectedCount > 0 && `(${selectedCount})`} ▼
              </button>
              <div className="formalshoes-dropdown-content">
                <div className="formalshoes-dropdown-header">
                  <span>{selectedCount} selected</span>
                  <button onClick={resetFilters} className="formalshoes-reset-btn">Reset</button>
                </div>
                <label className="formalshoes-checkbox-label">
                  <input
                    type="checkbox"
                    checked={availabilityFilter.inStock}
                    onChange={() => handleAvailabilityChange('inStock')}
                  />
                  <span>In stock ({products.filter(p => p.inStock).length})</span>
                </label>
                <label className="formalshoes-checkbox-label">
                  <input
                    type="checkbox"
                    checked={availabilityFilter.outOfStock}
                    onChange={() => handleAvailabilityChange('outOfStock')}
                  />
                  <span>Out of stock ({products.filter(p => !p.inStock).length})</span>
                </label>
              </div>
            </div>
          </div>

          <div className="formalshoes-sort-section">
            <span className="formalshoes-products-count">{filteredProducts.length} Products</span>
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
              <div className="formalshoes-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="formalshoes-product-info">
                <h3 className="formalshoes-product-name">{product.name}</h3>
                <p className="formalshoes-product-color">{product.color}</p>
                {!product.inStock && <p className="formalshoes-out-of-stock">Out of Stock</p>}
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
import React, { useState } from 'react';
import './WomenHandbags.css';

const WomenHandbagsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Handbag products with descriptions
  const products = [
    { id: 1, name: 'Structured Leather Tote Handbag', image: '/images/red_handbag.png', color: 'Red', date: '2024-01-15', description: 'Bold structured leather tote designed for elegant everyday and office use.' },
    { id: 2, name: 'Croc-Embossed Leather Tote Handbag', image: '/images/H1.png', color: 'Dark Brown', date: '2024-02-20', description: 'Croc-textured leather tote offering a premium and sophisticated look.' },
    { id: 3, name: 'Croc-Embossed Leather Tote Handbag', image: '/images/H2.png', color: 'Olive Green', date: '2024-03-10', description: 'Elegant olive croc-embossed tote perfect for modern professional styling.' },
    { id: 4, name: 'Croc-Embossed Leather Tote Handbag', image: '/images/H3.png', color: 'Navy Blue', date: '2024-01-25', description: 'Stylish navy leather tote combining texture with contemporary appeal.' },
    { id: 5, name: 'Leather Drawstring Handbag', image: '/images/H4.png', color: 'Black', date: '2024-04-05', description: 'Soft leather drawstring handbag with a compact and artistic silhouette.' },
    { id: 6, name: 'Leather Drawstring Handbag', image: '/images/H5.png', color: 'Brown', date: '2024-02-14', description: 'Rich Brown drawstring handbag offering a blend of elegance and charm.' },
    { id: 7, name: 'Leather Drawstring Handbag', image: '/images/H6.png', color: 'Teal Green', date: '2024-05-18', description: 'Unique teal leather drawstring bag ideal for statement casual styling.' },
    { id: 8, name: 'Soft Leather Shoulder Handbag', image: '/images/H7.png', color: 'Brown', date: '2024-03-22', description: 'Relaxed leather shoulder handbag crafted for everyday comfort and space.' },
    { id: 9, name: 'Vintage Leather Travel Handbag', image: '/images/H8.png', color: 'Dark Brown', date: '2024-06-30', description: 'Vintage-finish leather handbag designed for travel and daily utility.' },
    { id: 10, name: 'Urban Leather Tote Handbag', image: '/images/H9.png', color: 'Deep Maroon', date: '2024-07-12', description: 'Contemporary urban tote with structured design and premium leather finish.' },
    { id: 11, name: 'Urban Leather Tote Handbag', image: '/images/H10.png', color: 'Tan', date: '2024-08-05', description: 'Spacious tan leather tote ideal for office, travel, and daily use.' },
    { id: 12, name: 'Classic Leather Tote Handbag', image: '/images/H11.png', color: 'Forest Green', date: '2024-01-08', description: 'Classic leather tote featuring a timeless shape and rich green tone.' },
    { id: 13, name: 'Classic Leather Tote Handbag', image: '/images/H12.png', color: 'Tan', date: '2024-09-14', description: 'Elegant classic leather tote designed for versatile everyday use.' },
    { id: 14, name: 'Leather Travel Handbag', image: '/images/H13.png', color: 'Cognac Brown', date: '2024-04-28', description: 'Stylish travel handbag crafted with premium leather and functional design.' },
    { id: 15, name: 'Leather Travel Handbag', image: '/images/H14.png', color: 'Wine Red', date: '2024-10-20', description: 'Rich wine-colored travel handbag blending luxury with practicality.' },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="handbags-page">
      <div className="handbags-breadcrumb">
        <a href="/">Home</a> / <span>Women's Handbags</span>
      </div>

      <div className="hero-section">
        <img src="/images/handbag_hero.png" alt="Elegant Handbags" className="hero-image" />
      </div>

      {/* Leather Handbags Benefits Section */}
      <section className="handbags-benefits-section">
        <div className="handbags-benefits-content">
          <div className="handbags-benefits-image">
            <div className="handbags-benefits-image-placeholder">
              <img src="/images/handbag_about.jpg" alt="Premium Leather Handbags" className="handbags-benefits-img" />
            </div>
          </div>
          <div className="handbags-benefits-text">
            <h2 className="handbags-benefits-title">Elegance in Leather Handbags</h2>
            <p className="handbags-benefits-description">
              At Eliteinova Leather Products Export, we are chosen for our commitment to quality, reliability, and trusted manufacturing partnerships. 
              Our leather handbags combine timeless elegance with practical functionality. Each piece is designed to complement 
              your style while providing ample storage and organization. The natural leather develops a unique patina over time, 
              making each handbag truly one-of-a-kind. From classic totes to sophisticated clutches, our collection offers 
              versatile options for every occasion.
            </p>
            <button className="handbags-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

       {/* Featured Products Header - Added this section */}
      <section className="handbags-featured-header">
        <div className="handsbags-section-header">
          <h2 className="handbags-section-title">FEATURED PRODUCTS</h2>
          <div className="handbags-title-underline"></div>
        </div>
      </section>

      <div className="handbags-container">
        <div className="handbags-filter-bar">
          <div className="handbags-sort-section">
            <span className="handbags-products-count">{sortedProducts.length} Products</span>
            <div className="handbags-sort-dropdown">
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

        <div className="handbags-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="handbags-product-card">
              <div className="handbags-card-inner">
                <div className="handbags-card-front">
                  <div className="handbags-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="handbags-product-info">
                    <h3 className="handbags-product-name">{product.name}</h3>
                    <p className="handbags-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="handbags-card-back">
                  <div className="handbags-back-content">
                    <h3 className="handbags-back-title">{product.name}</h3>
                    <div className="handbags-back-divider"></div>
                    <p className="handbags-back-color">Color: {product.color}</p>
                    <p className="handbags-back-description">{product.description}</p>
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

export default WomenHandbagsPage;
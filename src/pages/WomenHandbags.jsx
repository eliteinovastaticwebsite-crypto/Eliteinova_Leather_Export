import React, { useState } from 'react';
import './WomenHandbags.css';

const WomenHandbagsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Handbag products with descriptions
  const products = [
    { id: 1, name: 'Rexo Crunch Leather Handbag', image: '/images/red_handbag.png', color: 'Brown', date: '2024-01-15', description: 'Premium crunch leather with sophisticated texture. Features multiple compartments and adjustable strap for versatile styling.' },
    { id: 2, name: 'Rexo Crunch Leather Handbag', image: '/images/H1.png', color: 'Green', date: '2024-02-20', description: 'Elegant green leather with durable construction. Perfect for everyday use with spacious interior design.' },
    { id: 3, name: 'Rexo Crunch Leather Handbag', image: '/images/H2.png', color: 'Black', date: '2024-03-10', description: 'Classic black leather handbag with timeless appeal. Structured design with premium hardware finishing.' },
    { id: 4, name: 'Rexo Crunch Leather Handbag', image: '/images/H3.png', color: 'Tan', date: '2024-01-25', description: 'Sophisticated tan leather with rich color. Features organized pockets and comfortable handles.' },
    { id: 5, name: 'The Philos Leather Handbag', image: '/images/H4.png', color: 'Black', date: '2024-04-05', description: 'Luxurious leather with modern design. Spacious interior with multiple organizational pockets for daily essentials.' },
    { id: 6, name: 'The Philos Leather Handbag', image: '/images/H5.png', color: 'Brown', date: '2024-02-14', description: 'Rich brown leather with elegant finish. Versatile style suitable for both casual and formal occasions.' },
    { id: 7, name: 'The Philos Leather Handbag', image: '/images/H6.png', color: 'Tan', date: '2024-05-18', description: 'Beautiful tan leather with premium quality. Comfortable to carry with adjustable straps and secure closures.' },
    { id: 8, name: 'Vintage Leather Travel Handbag', image: '/images/H7.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired design with practical functionality. Large capacity perfect for travel with durable leather construction.' },
    { id: 9, name: 'Vintage Leather Travel Handbag', image: '/images/H8.png', color: 'Black', date: '2024-06-30', description: 'Classic travel companion in sleek black. Features reinforced handles and spacious compartments for all your needs.' },
    { id: 10, name: 'Urban Leather Handbag', image: '/images/H9.png', color: 'Black', date: '2024-07-12', description: 'Modern urban design with practical features. Perfect for city life with secure zippers and stylish appearance.' },
    { id: 11, name: 'Urban Leather Handbag', image: '/images/H10.png', color: 'Tan', date: '2024-08-05', description: 'Contemporary tan leather with urban edge. Combines functionality with fashion-forward design elements.' },
    { id: 12, name: 'Classic Leather Handbag', image: '/images/H11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Timeless dark brown leather with refined elegance. Features traditional craftsmanship with modern comfort.' },
    { id: 13, name: 'Classic Leather Handbag', image: '/images/H12.png', color: 'Brown', date: '2024-09-14', description: 'Sophisticated brown leather with classic appeal. Durable construction with attention to detail throughout.' },
    { id: 14, name: 'Topper Stylish Leather Travel Handbag', image: '/images/H13.png', color: 'Brown', date: '2024-04-28', description: 'Stylish travel bag with premium leather. Extra storage space with organizational compartments for travelers.' },
    { id: 15, name: 'Topper Stylish Leather Travel Handbag', image: '/images/H14.png', color: 'Black', date: '2024-10-20', description: 'Sleek black travel handbag with elegant design. Combines style and practicality for the modern traveler.' },
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
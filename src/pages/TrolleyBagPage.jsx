import React, { useState } from 'react';
import './TrolleyBag.css';

const TrolleyBagPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Trolley bag products with descriptions
  const products = [
    { id: 1, name: 'Rexo Crunch Leather Trolley Bag', image: '/images/tr1.png', color: 'Brown', date: '2024-01-15', description: 'Premium leather trolley bag with spacious interior. Features smooth rolling wheels and telescopic handle for easy travel.' },
    { id: 2, name: 'Rexo Crunch Leather Trolley Bag', image: '/images/tr2.png', color: 'Green', date: '2024-02-20', description: 'Eco-friendly green leather trolley bag. Durable construction with 360° spinner wheels and multiple compartments.' },
    { id: 3, name: 'Rexo Crunch Leather Trolley Bag', image: '/images/tr3.png', color: 'Black', date: '2024-03-10', description: 'Classic black leather trolley bag with professional design. Features TSA-approved locks and expandable capacity.' },
    { id: 4, name: 'Rexo Crunch Leather Trolley Bag', image: '/images/tr4.png', color: 'Tan', date: '2024-01-25', description: 'Sophisticated tan leather trolley bag. Lightweight design with reinforced corners and smooth maneuverability.' },
    { id: 5, name: 'The Philos Leather Trolley Bag', image: '/images/tr5.png', color: 'Black', date: '2024-04-05', description: 'Luxurious Philos leather trolley bag. Features intelligent organization and premium hardware for frequent travelers.' },
    { id: 6, name: 'The Philos Leather Trolley Bag', image: '/images/tr6.png', color: 'Brown', date: '2024-02-14', description: 'Rich brown Philos leather trolley bag. Durable construction with comfortable handle and smooth rolling wheels.' },
    { id: 7, name: 'The Philos Leather Trolley Bag', image: '/images/tr7.png', color: 'Tan', date: '2024-05-18', description: 'Beautiful tan Philos leather trolley bag. Ergonomic design with spacious interior and organized compartments.' },
    { id: 8, name: 'Vintage Leather Travel Trolley Bag', image: '/images/tr8.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired travel trolley bag. Features classic design with modern functionality for extended journeys.' },
    { id: 9, name: 'Vintage Leather Travel Trolley Bag', image: '/images/tr9.png', color: 'Black', date: '2024-06-30', description: 'Classic black vintage travel trolley bag. Premium leather with reinforced stitching and durable wheels.' },
    { id: 10, name: 'Urban Leather Trolley Bag', image: '/images/tr10.png', color: 'Black', date: '2024-07-12', description: 'Modern urban leather trolley bag. Contemporary design with smooth gliding wheels and secure closures.' },
    { id: 11, name: 'Urban Leather Trolley Bag', image: '/images/tr11.png', color: 'Tan', date: '2024-08-05', description: 'Contemporary tan urban leather trolley bag. Lightweight construction with smart organization features.' },
    { id: 12, name: 'Classic Leather Trolley Bag', image: '/images/tr12.png', color: 'Dark Brown', date: '2024-01-08', description: 'Timeless dark brown classic leather trolley bag. Traditional craftsmanship with modern travel features.' },
    { id: 13, name: 'Classic Leather Trolley Bag', image: '/images/tr13.png', color: 'Brown', date: '2024-09-14', description: 'Sophisticated brown classic leather trolley bag. Durable design with smooth rolling and secure storage.' },
    { id: 14, name: 'Topper Stylish Leather Travel Trolley Bag', image: '/images/tr14.png', color: 'Brown', date: '2024-04-28', description: 'Stylish Topper travel trolley bag. Features premium leather with extra storage and travel-friendly design.' },
    { id: 15, name: 'Topper Stylish Leather Travel Trolley Bag', image: '/images/tr15.png', color: 'Black', date: '2024-10-20', description: 'Sleek black Topper travel trolley bag. Combines style with functionality for modern travelers.' },
    /* Uncomment and add descriptions for remaining products */
    /* { id: 16, name: 'Leather Shoulder Trolley Bag', image: '/images/tr1.png', color: 'Black', date: '2024-05-07', description: 'Versatile leather shoulder trolley bag with comfortable strap.' },
    { id: 17, name: 'Leather Shoulder Trolley Bag', image: '/images/tr1.png', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder trolley bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote Trolley', image: '/images/tr1.png', color: 'Black', date: '2024-06-17', description: 'Sleek urban leather tote trolley with contemporary styling.' },
    { id: 19, name: 'Urban Leather Tote Trolley', image: '/images/tr1.png', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather tote trolley with modern minimalism.' },
    { id: 20, name: 'Premium Leather Travel Trolley Bag', image: '/images/tr1.png', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel trolley bag with luxury details and protection.' } */
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
    <div className="trolleybag-page">
      <div className="trolleybag-breadcrumb">
        <a href="/">Home</a> / <a href="/travelbags">Travel Bags</a> / <span>Trolley Bags</span>
      </div>

      <div className="trolleybag-hero-section">
        <img src="/images/trolley.png" alt="Premium Trolley Bags" className="trolleybag-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="trolleybag-featured-header">
        <div className="trolleybag-section-header">
          <h2 className="trolleybag-section-title">FEATURED PRODUCTS</h2>
          <div className="trolleybag-title-underline"></div>
        </div>
      </section>

      <div className="trolleybag-container">
        <div className="trolleybag-filter-bar">
          <div className="trolleybag-sort-section">
            <span className="trolleybag-products-count">{sortedProducts.length} Products</span>
            <div className="trolleybag-sort-dropdown">
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

        <div className="trolleybag-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="trolleybag-product-card">
              <div className="trolleybag-card-inner">
                <div className="trolleybag-card-front">
                  <div className="trolleybag-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="trolleybag-product-info">
                    <h3 className="trolleybag-product-name">{product.name}</h3>
                    <p className="trolleybag-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="trolleybag-card-back">
                  <div className="trolleybag-back-content">
                    <h3 className="trolleybag-back-title">{product.name}</h3>
                    <div className="trolleybag-back-divider"></div>
                    <p className="trolleybag-back-color">Color: {product.color}</p>
                    <p className="trolleybag-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="trolleybag-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default TrolleyBagPage;
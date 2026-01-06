import React, { useState } from 'react';
import './TravelBags.css';

const TravelBagsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Travel bag products with descriptions
  const products = [
    { id: 1, name: 'Leather Travel Bag', image: '/images/travel1.png', color: 'Tan Brown', date: '2024-01-15', description: 'Compact structured leather travel satchel ideal for short trips and daily carry.' },
    { id: 2, name: 'Leather Travel Bag', image: '/images/travel2.png', color: 'Cognac Brown', date: '2024-02-20', description: 'Classic hand-carried leather travel bag with front zipper pockets for easy access.' },
    { id: 3, name: 'Leather Overnight Travel Bag', image: '/images/travel3.png', color: 'Dark Brown', date: '2024-03-10', description: 'Spacious overnight leather bag designed for comfortable short-duration travel.' },
    { id: 4, name: 'Leather Overnight Travel Bag', image: '/images/travel4.png', color: 'Olive Brown', date: '2024-01-25', description: 'Soft-grain leather travel bag with rounded edges and premium finishing.' },
    { id: 5, name: 'Leather Weekender Bag', image: '/images/travel5.png', color: 'Dark Brown', date: '2024-04-05', description: 'Weekend-ready leather bag offering generous space with reinforced handles.' },
    { id: 6, name: 'Leather Weekender Bag', image: '/images/travel6.png', color: 'Tan', date: '2024-02-14', description: 'Lightweight leather weekender crafted for effortless short getaways.' },
    { id: 7, name: 'Leather Travel Tote', image: '/images/travel7.png', color: 'Olive Brown', date: '2024-05-18', description: 'Open-top leather travel tote suitable for carry-on and everyday travel needs.' },
    /* Uncomment and add descriptions for remaining products */
    /* { id: 8, name: 'Vintage Leather Travel Bag', image: '/images/L7.png', color: 'Brown', date: '2024-03-22', description: 'Vintage-inspired travel bag with classic design and modern functionality.' },
    { id: 9, name: 'Vintage Leather Travel Bag', image: '/images/L8.png', color: 'Black', date: '2024-06-30', description: 'Classic black vintage travel bag with premium leather construction.' },
    { id: 10, name: 'Urban Leather Travel Bag', image: '/images/L9.png', color: 'Black', date: '2024-07-12', description: 'Modern urban leather travel bag with contemporary design and secure features.' },
    { id: 11, name: 'Urban Leather Travel Bag', image: '/images/L10.png', color: 'Tan', date: '2024-08-05', description: 'Contemporary tan urban leather travel bag with lightweight construction.' },
    { id: 12, name: 'Classic Leather Travel Bag', image: '/images/L11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Timeless dark brown classic leather travel bag with traditional craftsmanship.' },
    { id: 13, name: 'Classic Leather Travel Bag', image: '/images/L12.png', color: 'Brown', date: '2024-09-14', description: 'Sophisticated brown classic leather travel bag with durable design.' },
    { id: 14, name: 'Topper Stylish Leather Travel Bag', image: '/images/L13.png', color: 'Brown', date: '2024-04-28', description: 'Stylish Topper travel bag in premium leather with extra storage capacity.' },
    { id: 15, name: 'Topper Stylish Leather Travel Bag', image: '/images/L14.png', color: 'Black', date: '2024-10-20', description: 'Sleek black Topper travel bag combining style with travel functionality.' },
    { id: 16, name: 'Leather Shoulder Travel Bag', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Versatile leather shoulder travel bag with comfortable strap for extended carry.' },
    { id: 17, name: 'Leather Shoulder Travel Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder travel bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote Travel', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Sleek urban leather tote travel bag with contemporary styling.' },
    { id: 19, name: 'Urban Leather Tote Travel', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather tote travel bag with modern minimalism.' },
    { id: 20, name: 'Premium Leather Travel Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel bag with luxury details and superior protection.' } */
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
    <div className="travelbags-page">
      <div className="travelbags-breadcrumb">
        <a href="/">Home</a> / <a href="/travelbags">Travel Bags</a> / <span>Travel Bags</span>
      </div>

      <div className="travelbags-hero-section">
        <img src="/images/travel bag.png" alt="Premium Travel Bags" className="travelbags-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="travelbags-featured-header">
        <div className="travelbags-section-header">
          <h2 className="travelbags-section-title">FEATURED PRODUCTS</h2>
          <div className="travelbags-title-underline"></div>
        </div>
      </section>

      <div className="travelbags-container">
        <div className="travelbags-filter-bar">
          <div className="travelbags-sort-section">
            <span className="travelbags-products-count">{sortedProducts.length} Products</span>
            <div className="travelbags-sort-dropdown">
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

        <div className="travelbags-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="travelbags-product-card">
              <div className="travelbags-card-inner">
                <div className="travelbags-card-front">
                  <div className="travelbags-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="travelbags-product-info">
                    <h3 className="travelbags-product-name">{product.name}</h3>
                    <p className="travelbags-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="travelbags-card-back">
                  <div className="travelbags-back-content">
                    <h3 className="travelbags-back-title">{product.name}</h3>
                    <div className="travelbags-back-divider"></div>
                    <p className="travelbags-back-color">Color: {product.color}</p>
                    <p className="travelbags-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="travelbags-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default TravelBagsPage;
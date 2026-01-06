import React, { useState } from 'react';
import './DuffleBag.css';

const DuffleBagPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Duffle bag products with descriptions
  const products = [
    { id: 1, name: 'Leather Duffle Bag', image: '/images/duf1.png', color: 'Dark Olive', date: '2024-03-10', description: 'Cylindrical leather duffle perfect for gym, travel, and weekend use.' },
    { id: 2, name: 'Leather Duffle Bag', image: '/images/duf2.png', color: 'Cognac Brown', date: '2024-01-25', description: 'Classic leather duffle featuring rounded shape and strong carry handles.' },
    { id: 3, name: 'Leather Duffle Bag', image: '/images/duf3.png', color: 'Tan', date: '2024-04-05', description: 'Soft-finish leather duffle offering lightweight and stylish travel storage.' },
    { id: 4, name: 'Leather Duffle Bag', image: '/images/duf4.png', color: 'Dark Brown', date: '2024-02-14', description: 'Traditional leather duffle built for durability and timeless appeal.' },
    { id: 5, name: 'Leather Duffle Bag', image: '/images/duf5.png', color: 'Olive Brown', date: '2024-05-18', description: 'Premium leather duffle with spacious interior for extended trips.' },
    { id: 6, name: 'Leather Duffle Bag', image: '/images/duf6.png', color: 'Chestnut Brown', date: '2024-03-22', description: 'Elegant leather duffle designed for refined travel experiences.' },
    { id: 7, name: 'Leather Duffle Bag', image: '/images/duf7.png', color: 'Dark Brown', date: '2024-06-30', description: 'Full-grain leather duffle with rounded body, ideal for extended weekend travel.' },
    { id: 8, name: 'Leather Duffle Bag', image: '/images/duf8.png', color: 'Olive Brown', date: '2024-07-12', description: 'Soft leather duffle designed for flexible packing and comfortable carry.' },
    { id: 9, name: 'Leather Duffle Bag', image: '/images/duf9.png', color: 'Cognac Brown', date: '2024-08-05', description: 'Premium cognac leather duffle offering a refined and timeless travel look.' },
    { id: 10, name: 'Leather Duffle Bag', image: '/images/duf10.png', color: 'Tan', date: '2024-01-08', description: 'Lightweight tan leather duffle perfect for short trips and daily use.' },
    { id: 11, name: 'Leather Duffle Bag', image: '/images/duf11.png', color: 'Dark Olive', date: '2024-09-14', description: 'Durable leather duffle with reinforced stitching for rugged travel needs.' },
    { id: 12, name: 'Leather Duffle Bag', image: '/images/duf12.png', color: 'Chestnut Brown', date: '2024-04-28', description: 'Structured leather duffle combining elegance with practical capacity.' },
    { id: 13, name: 'Leather Duffle Bag', image: '/images/duf13.png', color: 'Saddle Brown', date: '2024-10-20', description: 'Classic cylindrical leather duffle designed for gym and weekend travel.' },
    { id: 14, name: 'Leather Duffle Bag', image: '/images/duf14.png', color: 'Deep Brown', date: '2024-05-07', description: 'Heavy-grain leather duffle built for long-term durability and strength.' },
    { id: 15, name: 'Leather Duffle Bag', image: '/images/duf15.png', color: 'Olive Tan', date: '2024-11-11', description: 'Contemporary leather duffle with smooth finish and spacious interior.' },
    { id: 16, name: 'Leather Duffle Bag', image: '/images/duf16.png', color: 'Vintage Brown', date: '2024-06-17', description: 'Heritage-style leather duffle crafted for timeless travel appeal.' },
    /* Uncomment and add descriptions for remaining products */
    /* { id: 14, name: 'Topper Stylish Leather Travel Duffle Bag', image: '/images/duf14.png', color: 'Brown', date: '2024-04-28', description: 'Stylish Topper travel duffle bag in premium leather with extra storage.' },
    { id: 15, name: 'Topper Stylish Leather Travel Duffle Bag', image: '/images/duf15.png', color: 'Black', date: '2024-10-20', description: 'Sleek black Topper travel duffle bag combining style with functionality.' },
    { id: 16, name: 'Leather Shoulder Duffle Bag', image: '/images/duf16.png', color: 'Black', date: '2024-05-07', description: 'Versatile leather shoulder duffle bag with comfortable strap.' },
    { id: 17, name: 'Leather Shoulder Duffle Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder duffle bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote Duffle', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Sleek urban leather tote duffle with contemporary styling.' },
    { id: 19, name: 'Urban Leather Tote Duffle', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather tote duffle with modern minimalism.' },
    { id: 20, name: 'Premium Leather Travel Duffle Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel duffle bag with luxury details and protection.' } */
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
    <div className="dufflebag-page">
      <div className="dufflebag-breadcrumb">
        <a href="/">Home</a> / <a href="/travelbags">Travel Bags</a> / <span>Duffle Bags</span>
      </div>

      <div className="dufflebag-hero-section">
        <img src="/images/duffle.png" alt="Premium Duffle Bags" className="dufflebag-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="dufflebag-featured-header">
        <div className="dufflebag-section-header">
          <h2 className="dufflebag-section-title">FEATURED PRODUCTS</h2>
          <div className="dufflebag-title-underline"></div>
        </div>
      </section>

      <div className="dufflebag-container">
        <div className="dufflebag-filter-bar">
          <div className="dufflebag-sort-section">
            <span className="dufflebag-products-count">{sortedProducts.length} Products</span>
            <div className="dufflebag-sort-dropdown">
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

        <div className="dufflebag-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="dufflebag-product-card">
              <div className="dufflebag-card-inner">
                <div className="dufflebag-card-front">
                  <div className="dufflebag-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="dufflebag-product-info">
                    <h3 className="dufflebag-product-name">{product.name}</h3>
                    <p className="dufflebag-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="dufflebag-card-back">
                  <div className="dufflebag-back-content">
                    <h3 className="dufflebag-back-title">{product.name}</h3>
                    <div className="dufflebag-back-divider"></div>
                    <p className="dufflebag-back-color">Color: {product.color}</p>
                    <p className="dufflebag-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* <a href="https://wa.me/9876543210" className="dufflebag-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default DuffleBagPage;
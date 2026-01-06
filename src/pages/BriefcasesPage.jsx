import React, { useState } from 'react';
import './Briefcases.css';

const BriefcasesPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Briefcase products with descriptions
  const products = [
    { id: 1, name: 'Hard Leather Executive Briefcase', image: '/images/brief1.png', color: 'Dark Olive Brown', date: '2024-01-15', description: 'Slim hard-case leather briefcase designed for secure document and laptop storage.' },
    { id: 2, name: 'Hard Leather Executive Briefcase', image: '/images/brief2.png', color: 'Chestnut Brown', date: '2024-02-20', description: 'Structured leather briefcase with reinforced corners for professional business use.' },
    { id: 3, name: 'Hard Leather Executive Briefcase', image: '/images/brief3.png', color: 'Cognac Brown', date: '2024-03-10', description: 'Premium cognac leather briefcase offering a refined executive appearance.' },
    { id: 4, name: 'Hard Leather Executive Briefcase', image: '/images/brief4.png', color: 'Olive Tan', date: '2024-01-25', description: 'Classic hard leather briefcase combining durability with timeless style.' },
    { id: 5, name: 'Box Leather Briefcase', image: '/images/brief5.png', color: 'Tan', date: '2024-04-05', description: 'Compact box-style leather briefcase ideal for documents and valuables.' },
    { id: 6, name: 'Box Leather Briefcase', image: '/images/brief6.png', color: 'Medium Brown', date: '2024-02-14', description: 'Structured leather box briefcase with secure lock closure for daily office use.' },
    { id: 7, name: 'Box Leather Briefcase', image: '/images/brief7.png', color: 'Olive Green', date: '2024-05-18', description: 'Vintage-finish leather briefcase offering a unique professional look.' },
    { id: 8, name: 'Compact Leather Briefcase', image: '/images/brief8.png', color: 'Dark Olive', date: '2024-03-22', description: 'Small-format leather briefcase designed for minimal and essential carry.' },
    { id: 9, name: 'Vintage Hard Leather Briefcase', image: '/images/brief9.png', color: 'Olive Brown', date: '2024-06-30', description: 'Vintage-inspired hard leather briefcase built for classic business styling.' },
    { id: 10, name: 'Urban Hard Leather Briefcase', image: '/images/brief10.png', color: 'Chestnut Brown', date: '2024-07-12', description: 'Modern leather briefcase blending urban design with executive functionality.' },
    { id: 11, name: 'Urban Hard Leather Briefcase', image: '/images/brief11.png', color: 'Tan Brown', date: '2024-08-05', description: 'Clean-profile leather briefcase suitable for contemporary professionals.' },
    { id: 12, name: 'Classic Hard Leather Briefcase', image: '/images/brief12.png', color: 'Dark Olive Brown', date: '2024-01-08', description: 'Traditional hard leather briefcase offering durability and formal elegance.' }
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
    <div className="briefcases-page">
      <div className="briefcases-breadcrumb">
        <a href="/">Home</a> / <span>Briefcases</span>
      </div>

      <div className="briefcases-hero-section">
        <img src="/images/brief_hero.png" alt="Elegant Briefcases" className="briefcases-hero-image" />
      </div>

      {/* Leather Brief Benefits Section */}
      <section className="briefcases-benefits-section">
        <div className="briefcases-benefits-content">
          <div className="briefcases-benefits-image">
            <div className="briefcases-benefits-image-placeholder">
              <img src="/images/briefcase about.jpg" alt="Premium Leather Briefcases" className="briefcases-benefits-img" />
            </div>
          </div>
          <div className="briefcases-benefits-text">
            <h2 className="briefcases-benefits-title">Executive Presence in Leather</h2>
            <p className="briefcases-benefits-description">
              At Eliteinova Leather Products Export, our leather briefcases are crafted for professionals who value confidence, structure, and timeless design. 
              Designed to support modern workdays, our leather briefcases feature well-organized interiors with dedicated compartments for documents, laptops, and daily essentials. 
              Reinforced handles, secure closures, and optional shoulder straps provide comfort and ease of use throughout busy schedules.
              As the leather matures, it develops a rich patina that enhances its character, making every briefcase a lasting symbol of professionalism, craftsmanship, and refined functionality.
            </p>
            <button className="briefcases-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="briefcases-featured-header">
        <div className="briefcases-section-header">
          <h2 className="briefcases-section-title">FEATURED PRODUCTS</h2>
          <div className="briefcases-title-underline"></div>
        </div>
      </section>

      <div className="briefcases-container">
        <div className="briefcases-filter-bar">
          <div className="briefcases-sort-section">
            <span className="briefcases-products-count">{sortedProducts.length} Products</span>
            <div className="briefcases-sort-dropdown">
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

        <div className="briefcases-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="briefcases-product-card">
              <div className="briefcases-card-inner">
                <div className="briefcases-card-front">
                  <div className="briefcases-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="briefcases-product-info">
                    <h3 className="briefcases-product-name">{product.name}</h3>
                    <p className="briefcases-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="briefcases-card-back">
                  <div className="briefcases-back-content">
                    <h3 className="briefcases-back-title">{product.name}</h3>
                    <div className="briefcases-back-divider"></div>
                    <p className="briefcases-back-color">Color: {product.color}</p>
                    <p className="briefcases-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="briefcases-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default BriefcasesPage;
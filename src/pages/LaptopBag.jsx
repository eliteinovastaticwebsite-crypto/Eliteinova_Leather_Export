import React, { useState } from 'react';
import './LaptopBags.css';

const LaptopBagsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Laptop bag products with descriptions
  const products = [
    { id: 1, name: 'Leather Laptop Bag', image: '/images/lap1.png', color: 'Cognac Brown', date: '2024-01-15', description: 'Classic leather laptop briefcase with front zip pocket for professional daily use.' },
    { id: 2, name: 'Leather Laptop Messenger Bag', image: '/images/lap2.png', color: 'Olive Tan', date: '2024-02-20', description: 'Spacious leather laptop bag designed for office and travel convenience.' },
    { id: 3, name: 'Leather Laptop Bag', image: '/images/lap3.png', color: 'Tan Brown', date: '2024-03-10', description: 'Minimal leather briefcase offering clean lines and smart professional appeal.' },
    { id: 4, name: 'Textured Leather Laptop Satchel', image: '/images/lap4.png', color: 'Sand Tan', date: '2024-01-25', description: 'Textured leather laptop satchel combining durability with refined style.' },
    { id: 5, name: 'Leather Laptop Office Bag', image: '/images/lap5.png', color: 'Light Tan', date: '2024-04-05', description: 'Multi-compartment leather laptop bag ideal for business and daily commuting.' },
    { id: 6, name: 'Leather Laptop Office Bag', image: '/images/lap6.png', color: 'Medium Brown', date: '2024-02-14', description: 'Functional leather laptop bag with multiple zip sections for organized storage.' },
    { id: 7, name: 'Leather Laptop Satchel', image: '/images/lap7.png', color: 'Olive Green', date: '2024-05-18', description: 'Structured leather satchel designed for secure laptop carrying and office use.' },
    { id: 8, name: 'Vintage Leather Laptop Bag', image: '/images/lap8.png', color: 'Dark Brown', date: '2024-03-22', description: 'Vintage-finish leather laptop bag offering timeless style and durability.' },
    { id: 9, name: 'Vintage Leather Laptop Bag', image: '/images/lap9.png', color: 'Dark Olive Green', date: '2024-06-30', description: 'Travel-inspired leather laptop briefcase built for daily and business travel.' },
    { id: 10, name: 'Urban Leather Laptop Bag', image: '/images/lap10.png', color: 'Chestnut Brown', date: '2024-07-12', description: 'Modern urban laptop bag blending sleek design with practical functionality.' },
    { id: 11, name: 'Urban Leather Laptop Bag', image: '/images/lap11.png', color: 'Olive Tan', date: '2024-08-05', description: 'Clean-design leather laptop bag suitable for office and casual business wear.' },
    { id: 12, name: 'Classic Leather Laptop Bag', image: '/images/lap12.png', color: 'Dark Olive Brown', date: '2024-01-08', description: 'Classic leather laptop briefcase offering a structured silhouette and premium finish.' },
    /* Uncomment and add descriptions for remaining products */
    /* { id: 13, name: 'Classic Leather Laptop Bag', image: '/images/lap13.png', color: 'Brown', date: '2024-09-14', description: 'Sophisticated brown leather laptop bag with classic appeal.' },
    { id: 14, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/lap14.png', color: 'Brown', date: '2024-04-28', description: 'Stylish travel laptop bag with premium leather and extra storage.' },
    { id: 15, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/lap15.png', color: 'Black', date: '2024-10-20', description: 'Sleek black travel laptop bag with elegant design and functionality.' },
    { id: 16, name: 'Leather Shoulder Laptop Bag', image: '/images/lap15.png', color: 'Black', date: '2024-05-07', description: 'Versatile leather shoulder laptop bag with comfortable strap.' },
    { id: 17, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder laptop bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Sleek urban leather laptop tote with contemporary styling.' },
    { id: 19, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather laptop tote with modern minimalism.' },
    { id: 20, name: 'Premium Leather Travel Laptop Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel laptop bag with luxury details and protection.' } */
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
    <div className="laptopbags-page">
      <div className="laptopbags-breadcrumb">
        <a href="/">Home</a> / <span>Laptop Bags</span>
      </div>

      <div className="laptopbags-hero-section">
        <img src="/images/laptopbag_hero.png" alt="Elegant Laptop Bags" className="laptopbags-hero-image" />
      </div>

      {/* Leather Laptop Bags Benefits Section */}
      <section className="laptopbags-benefits-section">
        <div className="laptopbags-benefits-content">
          <div className="laptopbags-benefits-image">
            <div className="laptopbags-benefits-image-placeholder">
              <img src="/images/lap about.jpg" alt="Premium Leather Laptop Bags" className="laptopbags-benefits-img" />
            </div>
          </div>
          <div className="laptopbags-benefits-text">
            <h2 className="laptopbags-benefits-title">Refined Protection in Leather Laptop Bags</h2>
            <p className="laptopbags-benefits-description">
              At Eliteinova Leather Products Export, our leather laptop bags are crafted for professionals who value both functionality and sophisticated design.
              Designed to protect and organize, our leather laptop bags offer dedicated compartments for devices, documents, and daily essentials. 
              Padded interiors provide reliable protection, while ergonomic handles and adjustable straps ensure comfort during daily commutes or travel. 
              As the leather matures, it develops a rich patina that enhances its character, making each laptop bag a distinctive blend of elegance, reliability, and modern practicality.
            </p>
            <button className="laptopbags-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="laptopbags-featured-header">
        <div className="laptopbags-section-header">
          <h2 className="laptopbags-section-title">FEATURED PRODUCTS</h2>
          <div className="laptopbags-title-underline"></div>
        </div>
      </section>

      <div className="laptopbags-container">
        <div className="laptopbags-filter-bar">
          <div className="laptopbags-sort-section">
            <span className="laptopbags-products-count">{sortedProducts.length} Products</span>
            <div className="laptopbags-sort-dropdown">
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

        <div className="laptopbags-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="laptopbags-product-card">
              <div className="laptopbags-card-inner">
                <div className="laptopbags-card-front">
                  <div className="laptopbags-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="laptopbags-product-info">
                    <h3 className="laptopbags-product-name">{product.name}</h3>
                    <p className="laptopbags-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="laptopbags-card-back">
                  <div className="laptopbags-back-content">
                    <h3 className="laptopbags-back-title">{product.name}</h3>
                    <div className="laptopbags-back-divider"></div>
                    <p className="laptopbags-back-color">Color: {product.color}</p>
                    <p className="laptopbags-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="laptopbags-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default LaptopBagsPage;
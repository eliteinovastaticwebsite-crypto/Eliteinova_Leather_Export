import React, { useState } from 'react';
import './Belts.css';

const BeltsPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Belt products with descriptions
  const products = [
    { id: 1, name: 'Heritage Classic Leather Belt', image: '/images/belt1.png', color: 'Dark Brown', date: '2024-01-15', description: 'Premium full-grain leather belt with a rich finish, ideal for both formal and smart-casual wear.' },
    { id: 2, name: 'Executive Classic Leather Belt', image: '/images/belt2.png', color: 'Brown', date: '2024-02-20', description: 'Sleek leather belt with a modern buckle design, adding a subtle statement to everyday outfits.' },
    { id: 3, name: 'Vintage Classic Leather Belt', image: '/images/belt3.png', color: 'Black', date: '2024-03-10', description: 'Timeless black leather belt crafted for durability and everyday professional use.' },
    { id: 4, name: 'Artisan Classic Leather Belt', image: '/images/belt4.png', color: 'Tan', date: '2024-01-25', description: 'Smooth tan leather belt with traditional stitching, perfect for refined casual styling.' },
    { id: 5, name: 'Formal Pro Dress Belt', image: '/images/belt5.png', color: 'Deep Brown', date: '2024-04-05', description: 'Structured leather belt with a clean profile, designed to complement formal trousers and suits.' },
    { id: 6, name: 'Urban Formal Dress Belt', image: '/images/belt6.png', color: 'Black', date: '2024-02-14', description: 'Minimalist black leather belt with a polished buckle for sharp office and formal looks.' },
    { id: 7, name: 'Signature Formal Leather Belt', image: '/images/belt7.png', color: 'Light Tan', date: '2024-05-18', description: 'Elegant tan leather belt that pairs effortlessly with formal and semi-formal attire.' },
    { id: 8, name: 'Casual Everyday Leather Belt', image: '/images/belt8.png', color: 'Brown', date: '2024-03-22', description: 'Soft leather casual belt with a relaxed finish, ideal for daily wear and denim styling.' },
    /*{ id: 9, name: 'Casual Leather Belt', image: '/images/L8.png', color: 'Black', date: '2024-06-30', description: 'Classic casual companion in sleek black. Features reinforced stitching and comfortable wear for daily use.' },
    { id: 10, name: 'Reversible Leather Belt', image: '/images/L9.png', color: 'Black', date: '2024-07-12', description: 'Modern reversible design with practical features. Two colors in one belt for versatile styling options.' },
    { id: 11, name: 'Reversible Leather Belt', image: '/images/L10.png', color: 'Tan', date: '2024-08-05', description: 'Contemporary tan leather with reversible functionality. Combines fashion with practical design elements.' },
    { id: 12, name: 'Braided Leather Belt', image: '/images/L11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Timeless dark brown braided leather with refined elegance. Features unique texture and traditional craftsmanship.' },
    { id: 13, name: 'Braided Leather Belt', image: '/images/L12.png', color: 'Brown', date: '2024-09-14', description: 'Sophisticated brown braided leather with classic appeal. Durable construction with attention to detail throughout.' },
    { id: 14, name: 'Western Style Belt', image: '/images/L13.png', color: 'Brown', date: '2024-04-28', description: 'Stylish western design with premium leather. Distinctive buckle and traditional western aesthetic.' },
    { id: 15, name: 'Western Style Belt', image: '/images/L14.png', color: 'Black', date: '2024-10-20', description: 'Sleek black western belt with elegant design. Combines style and western heritage for unique fashion statement.' },
    { id: 16, name: 'Minimalist Leather Belt', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Clean minimalist design with premium leather. Simple yet elegant for modern wardrobe essentials.' },
    { id: 17, name: 'Minimalist Leather Belt', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Rich brown minimalist belt with elegant finish. Features subtle design for versatile pairing.' },
    { id: 18, name: 'Wide Leather Belt', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Modern wide belt design with practical features. Makes a bold fashion statement with comfortable fit.' },
    { id: 19, name: 'Wide Leather Belt', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Contemporary wide belt in dark brown. Combines functionality with fashion-forward design elements.' },
    { id: 20, name: 'Premium Dress Belt', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'High-quality dress belt with premium finish. Perfect for formal occasions with sophisticated appearance.' }
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
    <div className="belts-page">
      <div className="belts-breadcrumb">
        <a href="/">Home</a> / <span>Belts</span>
      </div>

      <div className="belts-hero-section">
        <img src="/images/Beltbanner.png" alt="Premium Leather Belts" className="belts-hero-image" />
      </div>

      {/* Leather Belts Benefits Section */}
      <section className="belts-benefits-section">
        <div className="belts-benefits-content">
          <div className="belts-benefits-image">
            <div className="belts-benefits-image-placeholder">
              <img src="/images/belt about.jpg" alt="Premium Leather Belts" className="belts-benefits-img" />
            </div>
          </div>
          <div className="belts-benefits-text">
            <h2 className="belts-benefits-title">Precision Crafted in Leather Belts</h2>
            <p className="belts-benefits-description">
              At Eliteinova, our leather belts are designed to deliver understated elegance and dependable performance. 
              Designed to complement both formal and casual attire, our leather belts feature clean lines, refined finishes, and sturdy buckles for a secure fit. 
              The natural leather softens and develops a distinctive patina with use, enhancing character while maintaining structure. 
              From classic dress belts to versatile everyday styles, our collection reflects timeless design, comfort, and craftsmanship built to last.
            </p>
            <button className="belts-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="belts-featured-header">
        <div className="belts-section-header">
          <h2 className="belts-section-title">FEATURED PRODUCTS</h2>
          <div className="belts-title-underline"></div>
        </div>
      </section>

      <div className="belts-container">
        <div className="belts-filter-bar">
          <div className="belts-sort-section">
            <span className="belts-products-count">{sortedProducts.length} Products</span>
            <div className="belts-sort-dropdown">
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

        <div className="belts-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="belts-product-card">
              <div className="belts-card-inner">
                <div className="belts-card-front">
                  <div className="belts-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="belts-product-info">
                    <h3 className="belts-product-name">{product.name}</h3>
                    <p className="belts-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="belts-card-back">
                  <div className="belts-back-content">
                    <h3 className="belts-back-title">{product.name}</h3>
                    <div className="belts-back-divider"></div>
                    <p className="belts-back-color">Color: {product.color}</p>
                    <p className="belts-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="belts-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default BeltsPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackpacksPage.css';

const BackpacksPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  // Backpack products with descriptions
  const products = [
    { id: 1, name: 'Leather Laptop Backpack', image: '/images/bp1.png', color: 'Black', date: '2024-01-15', description: 'Premium laptop backpack with multiple compartments for organized storage. Made with durable leather and padded laptop sleeve.' },
    { id: 2, name: 'Leather Laptop Backpack', image: '/images/bp2.png', color: 'Brown', date: '2024-02-20', description: 'Classic brown leather backpack with vintage appeal. Features leather accents and comfortable carrying.' },
    { id: 3, name: 'Waterproof Backpack', image: '/images/bp3.png', color: 'Gray', date: '2024-03-10', description: 'Completely waterproof backpack perfect for travel and outdoor adventures. Sealed zippers and water-resistant materials.' },
    { id: 4, name: 'Waterproof Backpack', image: '/images/bp4.png', color: 'Navy', date: '2024-01-25', description: 'Navy blue waterproof backpack with spacious main compartment and side pockets for water bottles.' },
    { id: 5, name: 'Minimalist Backpack', image: '/images/bp5.png', color: 'Tan', date: '2024-04-05', description: 'Clean and minimalist design for everyday use. Lightweight and perfect for urban commuting.' },
    { id: 6, name: 'Minimalist Backpack', image: '/images/bp6.png', color: 'Dark Brown', date: '2024-02-14', description: 'Dark brown minimalist backpack with premium leather details and magnetic closures.' },
    { id: 7, name: 'Travel Backpack', image: '/images/bp7.png', color: 'Black', date: '2024-05-18', description: 'Large capacity travel backpack with multiple compartments for organized packing.' },
    { id: 8, name: 'Travel Backpack', image: '/images/bp8.png', color: 'Brown', date: '2024-03-22', description: 'Premium leather travel backpack with expandable sections for extra storage.' },
    { id: 9, name: 'Canvas Backpack', image: '/images/bp9.png', color: 'Tan', date: '2024-06-30', description: 'Durable canvas backpack with leather trims, perfect for casual use and everyday wear.' },
    { id: 10, name: 'Canvas Backpack', image: '/images/bp10.png', color: 'Brown', date: '2024-07-12', description: 'Classic canvas backpack with adjustable straps and multiple pockets for organization.' },
    { id: 11, name: 'Hiking Backpack', image: '/images/bp11.png', color: 'Black', date: '2024-08-05', description: 'Professional hiking backpack with hydration system compatibility and trekking pole attachments.' },
    /*{ id: 12, name: 'Hiking Backpack', image: '/images/backpack12.png', color: 'Brown', date: '2024-01-08', description: 'Durable hiking backpack with multiple gear loops and reinforced stitching for outdoor adventures.' },
    { id: 13, name: 'Leather Rucksack', image: '/images/backpack13.png', color: 'Tan', date: '2024-09-14', description: 'Traditional leather rucksack with drawstring closure and classic design.' },
    { id: 14, name: 'Leather Rucksack', image: '/images/backpack14.png', color: 'Black', date: '2024-04-28', description: 'Black leather rucksack with modern updates while maintaining classic rucksack design.' },
    { id: 15, name: 'Roll Top Backpack', image: '/images/backpack15.png', color: 'Gray', date: '2024-10-20', description: 'Urban roll top backpack with water-resistant materials and expandable storage.' },
    { id: 16, name: 'Roll Top Backpack', image: '/images/backpack16.png', color: 'Charcoal', date: '2024-05-07', description: 'Charcoal roll top backpack with magnetic closures and hidden security pocket.' },
 */ ];

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

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  const collections = [
    {
      name: "Men's Backpacks",
      products: 11,
      image: "/images/bp5.png",
      path: "/backpacks/men-backpacks"
    },
    {
      name: "Women's Backpacks",
      products: 16,
      image: "/images/hiking_collection.png",
      path: "/backpacks/women-backpacks"
    },
  ];

  return (
    <div className="backpacks-page">
      <div className="backpacks-breadcrumb">
        <a href="/">Home</a> / <span>Backpacks</span>
      </div>

      <div className="backpacks-hero-section">
        <img src="/images/smallbanner.png" alt="Premium Backpacks" className="backpacks-hero-image" />
      </div>

      {/* Collections Section */}
      <section className="backpacks-collections-section">
        <div className="backpacks-section-header">
          <h2 className="backpacks-section-title">COLLECTION</h2>
          <div className="backpacks-title-underline"></div>
        </div>

        <div className="backpacks-collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="backpacks-collection-card"
              onClick={() => handleCollectionClick(collection.path)}
            >
              <div className="backpacks-collection-image">
                <div className="backpacks-collection-icon-wrapper">
                  <img src={collection.image} alt={collection.name} className="backpacks-collection-img" />
                </div>
              </div>
              <h3 className="backpacks-collection-name">{collection.name}</h3>
              <p className="backpacks-collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leather Backpacks Benefits Section */}
      <section className="backpacks-benefits-section">
        <div className="backpacks-benefits-content">
          <div className="backpacks-benefits-image">
            <div className="backpacks-benefits-image-placeholder">
              <img src="/images/backpack about.jpg" alt="Premium Leather Backpacks" className="backpacks-benefits-img" />
            </div>
          </div>
          <div className="backpacks-benefits-text">
            <h2 className="backpacks-benefits-title">Elevated Utility in Leather Backpacks</h2>
            <p className="backpacks-benefits-description">
              At Eliteinova Leather Products Export, our leather backpacks are designed for those who seek versatility without compromising on sophistication. 
              Thoughtfully engineered for everyday use, our leather backpacks feature spacious interiors, secure compartments for laptops and essentials, and balanced weight distribution for comfortable carrying. 
              Adjustable padded straps and reinforced construction provide support during commutes, travel, and daily routines. 
              As the leather develops a unique patina with use, each backpack becomes a distinctive expression of style, practicality, and enduring craftsmanship.
            </p>
            <button className="backpacks-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="backpacks-featured-header">
        <div className="backpacks-section-header">
          <h2 className="backpacks-section-title">FEATURED PRODUCTS</h2>
          <div className="backpacks-title-underline"></div>
        </div>
      </section>

      <div className="backpacks-container">
        <div className="backpacks-filter-bar">
          <div className="backpacks-sort-section">
            <span className="backpacks-products-count">{sortedProducts.length} Products</span>
            <div className="backpacks-sort-dropdown">
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

        <div className="backpacks-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="backpacks-product-card">
              <div className="backpacks-card-inner">
                <div className="backpacks-card-front">
                  <div className="backpacks-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="backpacks-product-info">
                    <h3 className="backpacks-product-name">{product.name}</h3>
                    <p className="backpacks-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="backpacks-card-back">
                  <div className="backpacks-back-content">
                    <h3 className="backpacks-back-title">{product.name}</h3>
                    <div className="backpacks-back-divider"></div>
                    <p className="backpacks-back-color">Color: {product.color}</p>
                    <p className="backpacks-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="backpacks-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default BackpacksPage;
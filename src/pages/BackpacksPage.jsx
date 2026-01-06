import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackpacksPage.css';

const BackpacksPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  // Backpack products with descriptions
  const products = [
    { id: 1, name: 'Aurelius Leather Backpack', image: '/images/bp1.png', color: 'Black', date: '2024-01-15', description: 'A sleek, modern leather backpack designed for professionals who value elegance and functionality.' },
    { id: 2, name: 'Montclair Leather Backpack', image: '/images/bp2.png', color: 'Brown', date: '2024-02-20', description: 'Refined brown leather craftsmanship offering timeless style and everyday work essentials.' },
    { id: 3, name: 'Ridgeway Leather Backpack', image: '/images/bp3.png', color: 'Dark Brown', date: '2024-03-10', description: 'A bold, structured leather backpack built for durability with a classic masculine appeal.' },
    { id: 4, name: 'Harborcrest Leather Backpack', image: '/images/bp4.png', color: 'Olive Brown', date: '2024-01-25', description: 'Earth-toned leather styling with a contemporary silhouette for effortless daily carry.' },
    { id: 5, name: 'Sienna Minimal Leather Backpack', image: '/images/bp5.png', color: 'Tan', date: '2024-04-05', description: 'Minimalist tan leather design that blends sophistication with lightweight everyday comfort.' },
    { id: 6, name: 'Ashford Minimal Leather Backpack', image: '/images/bp6.png', color: 'Dark Brown', date: '2024-02-14', description: 'Clean-lined dark brown leather backpack crafted for understated elegance and practicality.' },
    { id: 7, name: 'Voyager Classic Leather Backpack', image: '/images/bp7.png', color: 'Chestnut', date: '2024-05-18', description: 'A versatile chestnut leather backpack made for travel, work, and refined daily use.' },
    { id: 8, name: 'Bromley Travel Leather Backpack', image: '/images/bp8.png', color: 'Olive', date: '2024-03-22', description: 'Spacious olive leather construction designed for smooth travel and modern lifestyles.' },
    { id: 9, name: 'Kingsford Leather Utility Backpack', image: '/images/bp9.png', color: 'Espresso Brown', date: '2024-06-30', description: 'Rugged espresso leather backpack engineered for maximum storage.' },
    { id: 10, name: 'Valen Heritage Leather Backpack', image: '/images/bp10.png', color: 'Cognac', date: '2024-07-12', description: 'Rich cognac leather paired with heritage craftsmanship for a truly timeless statement.' },
    { id: 11, name: 'Highland Leather Explorer Backpack', image: '/images/bp11.png', color: 'Mocha Brown', date: '2024-08-05', description: 'Adventure-ready mocha leather backpack crafted for exploration with refined durability.' },
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
    /*{
      name: "Women's Backpacks",
      products: 16,
      image: "/images/hiking_collection.png",
      path: "/backpacks/women-backpacks"
    },*/
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

    </div>
  );
};

export default BackpacksPage;
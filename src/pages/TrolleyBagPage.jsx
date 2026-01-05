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
    </div>
  );
};

export default TrolleyBagPage;
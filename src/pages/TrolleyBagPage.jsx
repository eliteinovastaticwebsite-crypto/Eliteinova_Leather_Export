import React, { useState } from 'react';
import './TrolleyBag.css';

const TrolleyBagPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // Trolley bag products with descriptions
  const products = [
    { id: 1, name: 'Leather Cabin Trolley', image: '/images/tr1.png', color: 'Dark Olive', date: '2024-03-22', description: 'Compact leather cabin trolley with telescopic handle for smooth airport travel.' },
    { id: 2, name: 'Leather Cabin Trolley', image: '/images/tr2.png', color: 'Chestnut Brown', date: '2024-06-30', description: 'Upright rolling leather trolley designed for business and short trips.' },
    { id: 3, name: 'Leather Cabin Trolley', image: '/images/tr3.png', color: 'Tan', date: '2024-07-12', description: 'Minimal leather trolley sized perfectly for cabin luggage requirements.' },
    { id: 4, name: 'Leather Cabin Trolley', image: '/images/tr4.png', color: 'Saddle Brown', date: '2024-08-05', description: 'Slim leather rolling bag offering easy mobility and refined style.' },
    { id: 5, name: 'Leather Travel Trolley', image: '/images/tr5.png', color: 'Olive Brown', date: '2024-01-08', description: 'Structured leather trolley with front compartments for organized travel.' },
    { id: 6, name: 'Leather Travel Trolley', image: '/images/tr6.png', color: 'Mustard Tan', date: '2024-09-14', description: 'Compact rolling leather luggage with durable wheels and premium finish.' },
    { id: 7, name: 'Leather Soft Trolley', image: '/images/tr7.png', color: 'Dark Brown', date: '2024-04-28', description: 'Soft-body leather trolley designed for flexible packing and comfort.' },
    { id: 8, name: 'Leather Soft Trolley', image: '/images/tr8.png', color: 'Olive Brown', date: '2024-10-20', description: 'Lightweight rolling leather bag ideal for frequent travelers.' },
    { id: 9, name: 'Leather Flight Trolley', image: '/images/tr9.png', color: 'Dark Brown', date: '2024-05-07', description: 'Narrow-profile leather trolley optimized for short-haul and flight travel.' },
    { id: 10, name: 'Leather Flight Trolley', image: '/images/tr10.png', color: 'Tan', date: '2024-11-11', description: 'Compact leather rolling bag offering easy maneuverability and storage.' },
    { id: 11, name: 'Leather Cabin Trolley', image: '/images/tr11.png', color: 'Olive Brown', date: '2024-06-17', description: 'Small leather trolley suitable for cabin use and quick business trips.' },
    { id: 12, name: 'Leather Cabin Trolley', image: '/images/tr12.png', color: 'Dark Brown', date: '2024-12-01', description: 'Durable leather trolley with reinforced structure for long-term use.' },
    { id: 13, name: 'Leather Upright Trolley', image: '/images/tr13.png', color: 'Tan', date: '2024-07-25', description: 'Upright rolling leather luggage combining elegance and practicality.' },
    { id: 14, name: 'Leather Upright Trolley', image: '/images/tr14.png', color: 'Olive Brown', date: '2024-01-15', description: 'Premium leather trolley with smooth wheels and sturdy frame.' },
    { id: 15, name: 'Leather Compact Trolley', image: '/images/tr15.png', color: 'Brown', date: '2024-02-20', description: 'Space-efficient leather trolley designed for organized travel.' },
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
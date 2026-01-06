import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelPage.css';

const TravelPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const collections = [
    {
      name: "Trolley Bags",
      products: 8,
      image: "/images/collection_trolley.png",
      path: "/travelbags/trolley-bags"
    },
    {
      name: "Duffle Bags",
      products: 12,
      image: "/images/collection_duffle.png",
      path: "/travelbags/duffle-bags"
    },
    {
      name: "Leather Travel Bags",
      products: 10,
      image: "/images/collection_travel.png",
      path: "/travelbags/leather-travel-bags"
    }
  ];

  // Travel products with descriptions
  const products = [
    { id: 1, name: 'Leather Travel Bag', image: '/images/travel1.png', color: 'Tan Brown', date: '2024-01-15', description: 'Compact structured leather travel satchel ideal for short trips and daily carry.' },
    { id: 2, name: 'Leather Travel Bag', image: '/images/travel2.png', color: 'Cognac Brown', date: '2024-02-20', description: 'Classic hand-carried leather travel bag with front zipper pockets for easy access.' },
    { id: 3, name: 'Leather Overnight Travel Bag', image: '/images/travel3.png', color: 'Dark Brown', date: '2024-03-10', description: 'Spacious overnight leather bag designed for comfortable short-duration travel.' },
    { id: 4, name: 'Leather Overnight Travel Bag', image: '/images/travel4.png', color: 'Olive Brown', date: '2024-01-25', description: 'Soft-grain leather travel bag with rounded edges and premium finishing.' },
    { id: 5, name: 'Leather Weekender Bag', image: '/images/travel5.png', color: 'Dark Brown', date: '2024-04-05', description: 'Weekend-ready leather bag offering generous space with reinforced handles.' },
    { id: 6, name: 'Leather Weekender Bag', image: '/images/travel6.png', color: 'Tan', date: '2024-02-14', description: 'Lightweight leather weekender crafted for effortless short getaways.' },
    { id: 7, name: 'Leather Travel Tote', image: '/images/travel7.png', color: 'Olive Brown', date: '2024-05-18', description: 'Open-top leather travel tote suitable for carry-on and everyday travel needs.' },
    { id: 8, name: 'Leather Cabin Trolley', image: '/images/tr1.png', color: 'Dark Olive', date: '2024-03-22', description: 'Compact leather cabin trolley with telescopic handle for smooth airport travel.' },
    { id: 9, name: 'Leather Cabin Trolley', image: '/images/tr2.png', color: 'Chestnut Brown', date: '2024-06-30', description: 'Upright rolling leather trolley designed for business and short trips.' },
    { id: 10, name: 'Leather Cabin Trolley', image: '/images/tr3.png', color: 'Tan', date: '2024-07-12', description: 'Minimal leather trolley sized perfectly for cabin luggage requirements.' },
    { id: 11, name: 'Leather Cabin Trolley', image: '/images/tr4.png', color: 'Saddle Brown', date: '2024-08-05', description: 'Slim leather rolling bag offering easy mobility and refined style.' },
    { id: 12, name: 'Leather Travel Trolley', image: '/images/tr5.png', color: 'Olive Brown', date: '2024-01-08', description: 'Structured leather trolley with front compartments for organized travel.' },
    { id: 13, name: 'Leather Travel Trolley', image: '/images/tr6.png', color: 'Mustard Tan', date: '2024-09-14', description: 'Compact rolling leather luggage with durable wheels and premium finish.' },
    { id: 14, name: 'Leather Soft Trolley', image: '/images/tr7.png', color: 'Dark Brown', date: '2024-04-28', description: 'Soft-body leather trolley designed for flexible packing and comfort.' },
    { id: 15, name: 'Leather Soft Trolley', image: '/images/tr8.png', color: 'Olive Brown', date: '2024-10-20', description: 'Lightweight rolling leather bag ideal for frequent travelers.' },
    { id: 16, name: 'Leather Flight Trolley', image: '/images/tr9.png', color: 'Dark Brown', date: '2024-05-07', description: 'Narrow-profile leather trolley optimized for short-haul and flight travel.' },
    { id: 17, name: 'Leather Flight Trolley', image: '/images/tr10.png', color: 'Tan', date: '2024-11-11', description: 'Compact leather rolling bag offering easy maneuverability and storage.' },
    { id: 18, name: 'Leather Cabin Trolley', image: '/images/tr11.png', color: 'Olive Brown', date: '2024-06-17', description: 'Small leather trolley suitable for cabin use and quick business trips.' },
    { id: 19, name: 'Leather Cabin Trolley', image: '/images/tr12.png', color: 'Dark Brown', date: '2024-12-01', description: 'Durable leather trolley with reinforced structure for long-term use.' },
    { id: 20, name: 'Leather Upright Trolley', image: '/images/tr13.png', color: 'Tan', date: '2024-07-25', description: 'Upright rolling leather luggage combining elegance and practicality.' },
    { id: 21, name: 'Leather Upright Trolley', image: '/images/tr14.png', color: 'Olive Brown', date: '2024-01-15', description: 'Premium leather trolley with smooth wheels and sturdy frame.' },
    { id: 22, name: 'Leather Compact Trolley', image: '/images/tr15.png', color: 'Brown', date: '2024-02-20', description: 'Space-efficient leather trolley designed for organized travel.' },
    { id: 23, name: 'Leather Duffle Bag', image: '/images/duf1.png', color: 'Dark Olive', date: '2024-03-10', description: 'Cylindrical leather duffle perfect for gym, travel, and weekend use.' },
    { id: 24, name: 'Leather Duffle Bag', image: '/images/duf2.png', color: 'Cognac Brown', date: '2024-01-25', description: 'Classic leather duffle featuring rounded shape and strong carry handles.' },
    { id: 25, name: 'Leather Duffle Bag', image: '/images/duf3.png', color: 'Tan', date: '2024-04-05', description: 'Soft-finish leather duffle offering lightweight and stylish travel storage.' },
    { id: 26, name: 'Leather Duffle Bag', image: '/images/duf4.png', color: 'Dark Brown', date: '2024-02-14', description: 'Traditional leather duffle built for durability and timeless appeal.' },
    { id: 27, name: 'Leather Duffle Bag', image: '/images/duf5.png', color: 'Olive Brown', date: '2024-05-18', description: 'Premium leather duffle with spacious interior for extended trips.' },
    { id: 28, name: 'Leather Duffle Bag', image: '/images/duf6.png', color: 'Chestnut Brown', date: '2024-03-22', description: 'Elegant leather duffle designed for refined travel experiences.' },
    { id: 29, name: 'Leather Duffle Bag', image: '/images/duf7.png', color: 'Dark Brown', date: '2024-06-30', description: 'Full-grain leather duffle with rounded body, ideal for extended weekend travel.' },
    { id: 30, name: 'Leather Duffle Bag', image: '/images/duf8.png', color: 'Olive Brown', date: '2024-07-12', description: 'Soft leather duffle designed for flexible packing and comfortable carry.' },
    { id: 31, name: 'Leather Duffle Bag', image: '/images/duf9.png', color: 'Cognac Brown', date: '2024-08-05', description: 'Premium cognac leather duffle offering a refined and timeless travel look.' },
    { id: 32, name: 'Leather Duffle Bag', image: '/images/duf10.png', color: 'Tan', date: '2024-01-08', description: 'Lightweight tan leather duffle perfect for short trips and daily use.' },
    { id: 33, name: 'Leather Duffle Bag', image: '/images/duf11.png', color: 'Dark Olive', date: '2024-09-14', description: 'Durable leather duffle with reinforced stitching for rugged travel needs.' },
    { id: 34, name: 'Leather Duffle Bag', image: '/images/duf12.png', color: 'Chestnut Brown', date: '2024-04-28', description: 'Structured leather duffle combining elegance with practical capacity.' },
    { id: 35, name: 'Leather Duffle Bag', image: '/images/duf13.png', color: 'Saddle Brown', date: '2024-10-20', description: 'Classic cylindrical leather duffle designed for gym and weekend travel.' },
    { id: 36, name: 'Leather Duffle Bag', image: '/images/duf14.png', color: 'Deep Brown', date: '2024-05-07', description: 'Heavy-grain leather duffle built for long-term durability and strength.' },
    { id: 37, name: 'Leather Duffle Bag', image: '/images/duf15.png', color: 'Olive Tan', date: '2024-11-11', description: 'Contemporary leather duffle with smooth finish and spacious interior.' },
    { id: 38, name: 'Leather Duffle Bag', image: '/images/duf16.png', color: 'Vintage Brown', date: '2024-06-17', description: 'Heritage-style leather duffle crafted for timeless travel appeal.' },
    /*{ id: 39, name: 'Flight Bag', image: '/images/duf1.png', color: 'Brown', date: '2024-12-01', description: 'Classic brown leather flight bag for pilots. Features durable construction and practical organization.' },
    { id: 40, name: 'Flight Bag', image: '/images/duf1.png', color: 'Tan', date: '2024-07-25', description: 'Vintage tan flight bag with authentic design. Perfect for aviation enthusiasts and frequent travelers.' }
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

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="travel-page">
      <div className="travel-breadcrumb">
        <a href="/">Home</a> / <span>Travel</span>
      </div>

      <div className="travel-hero-section">
        <img src="/images/travelbanner.png" alt="Travel Luggage Collection" className="travel-hero-image" />
      </div>

      {/* Collections Section */}
      <section className="travel-collections-section">
        <div className="travel-section-header">
          <h2 className="travel-section-title">COLLECTION</h2>
          <div className="travel-title-underline"></div>
        </div>

        <div className="travel-collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="travel-collection-card"
              onClick={() => handleCollectionClick(collection.path)}
            >
              <div className="travel-collection-image">
                <div className="travel-collection-icon-wrapper">
                  <img src={collection.image} alt={collection.name} className="travel-collection-img" />
                </div>
              </div>
              <h3 className="travel-collection-name">{collection.name}</h3>
              <p className="travel-collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leather Travel Bags Benefits Section */}
      <section className="travel-benefits-section">
        <div className="travel-benefits-content">
          <div className="travel-benefits-image">
            <div className="travel-benefits-image-placeholder">
              <img src="/images/travel about.jpg" alt="Premium Travel Bags" className="travel-benefits-img" />
            </div>
          </div>
          <div className="travel-benefits-text">
            <h2 className="travel-benefits-title">Designed for the Way You Travel</h2>
            <p className="travel-benefits-description">
              At Eliteinova Leather Products Export, our leather travel bags are designed for those who appreciate durability, elegance, and dependable craftsmanship on every journey. 
              Created for both short trips and extended travel, our leather travel bags offer spacious interiors with smart compartments to keep belongings organized and secure. 
              Reinforced handles, sturdy zippers, and comfortable straps provide ease of carrying, while the natural leather develops a distinctive patina over time, enhancing its character. 
              From classic duffel styles to refined travel companions, our collection combines functionality, sophistication, and reliability for journeys near and far.
            </p>
            <button className="travel-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="travel-featured-header">
        <div className="travel-section-header">
          <h2 className="travel-section-title">FEATURED PRODUCTS</h2>
          <div className="travel-title-underline"></div>
        </div>
      </section>

      <div className="travel-container">
        <div className="travel-filter-bar">
          <div className="travel-sort-section">
            <span className="travel-products-count">{sortedProducts.length} Products</span>
            <div className="travel-sort-dropdown">
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

        <div className="travel-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="travel-product-card">
              <div className="travel-card-inner">
                <div className="travel-card-front">
                  <div className="travel-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="travel-product-info">
                    <h3 className="travel-product-name">{product.name}</h3>
                    <p className="travel-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="travel-card-back">
                  <div className="travel-back-content">
                    <h3 className="travel-back-title">{product.name}</h3>
                    <div className="travel-back-divider"></div>
                    <p className="travel-back-color">Color: {product.color}</p>
                    <p className="travel-back-description">{product.description}</p>
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

export default TravelPage;
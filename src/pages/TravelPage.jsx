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
    { id: 1, name: 'Leather Duffel', image: '/images/travel1.png', color: 'Black', date: '2024-01-15', description: 'Premium leather duffel bag with spacious interior. Features multiple compartments and durable zippers for secure travel.' },
    { id: 2, name: 'Leather Duffel', image: '/images/travel2.png', color: 'Brown', date: '2024-02-20', description: 'Classic brown leather duffel with vintage appeal. Perfect for weekend getaways with organized storage.' },
    { id: 3, name: 'Rolling Carry-On', image: '/images/travel3.png', color: 'Gray', date: '2024-03-10', description: 'Modern rolling carry-on with 360° spinner wheels. Features telescopic handle and TSA-approved locks.' },
    { id: 4, name: 'Rolling Carry-On', image: '/images/travel4.png', color: 'Navy', date: '2024-01-25', description: 'Navy blue rolling carry-on with sleek design. Durable construction with expandable capacity for longer trips.' },
    { id: 5, name: 'Weekender Bag', image: '/images/travel5.png', color: 'Tan', date: '2024-04-05', description: 'Stylish tan weekender bag for short trips. Features comfortable shoulder strap and quick-access pockets.' },
    { id: 6, name: 'Weekender Bag', image: '/images/travel6.png', color: 'Dark Brown', date: '2024-02-14', description: 'Sophisticated dark brown weekender bag. Premium leather with reinforced handles for durability.' },
    { id: 7, name: 'Garment Bag', image: '/images/travel7.png', color: 'Black', date: '2024-05-18', description: 'Professional garment bag for business travel. Keeps suits and dresses wrinkle-free with multiple hanger slots.' },
    { id: 8, name: 'Garment Bag', image: '/images/tr1.png', color: 'Brown', date: '2024-03-22', description: 'Classic brown leather garment bag. Features water-resistant lining and secure closures.' },
    { id: 9, name: 'Travel Backpack', image: '/images/tr2.png', color: 'Tan', date: '2024-06-30', description: 'Versatile travel backpack with laptop compartment. Ergonomic design with multiple organizational pockets.' },
    { id: 10, name: 'Travel Backpack', image: '/images/tr3.png', color: 'Brown', date: '2024-07-12', description: 'Durable brown travel backpack for adventure. Features weather-resistant material and comfortable straps.' },
    { id: 11, name: 'Cabin Bag', image: '/images/tr4.png', color: 'Black', date: '2024-08-05', description: 'Compact black cabin bag for airline travel. Designed to fit under airplane seats with smart organization.' },
    { id: 12, name: 'Cabin Bag', image: '/images/tr5.png', color: 'Brown', date: '2024-01-08', description: 'Classic brown cabin bag with premium leather. Perfect for business trips with professional appearance.' },
    { id: 13, name: 'Travel Tote', image: '/images/tr6.png', color: 'Tan', date: '2024-09-14', description: 'Spacious travel tote for versatile use. Features reinforced base and comfortable handles.' },
    { id: 14, name: 'Travel Tote', image: '/images/tr7.png', color: 'Black', date: '2024-04-28', description: 'Elegant black travel tote with modern design. Large capacity with organized interior compartments.' },
    { id: 15, name: 'Spinner Luggage', image: '/images/tr8.png', color: 'Silver', date: '2024-10-20', description: 'Sleek silver spinner luggage with four wheels. Features durable polycarbonate shell and smooth maneuverability.' },
    { id: 16, name: 'Spinner Luggage', image: '/images/tr9.png', color: 'Charcoal', date: '2024-05-07', description: 'Charcoal spinner luggage with premium finish. TSA combination locks and interior compression straps.' },
    { id: 17, name: 'Travel Organizer', image: '/images/tr10.png', color: 'Burgundy', date: '2024-11-11', description: 'Burgundy leather travel organizer for essentials. Keeps documents, electronics, and toiletries organized.' },
    { id: 18, name: 'Travel Organizer', image: '/images/tr11.png', color: 'Black', date: '2024-06-17', description: 'Black travel organizer with multiple compartments. Perfect for keeping travel items neat and accessible.' },
    { id: 19, name: 'Flight Bag', image: '/images/tr12.png', color: 'Brown', date: '2024-12-01', description: 'Classic brown leather flight bag for pilots. Features durable construction and practical organization.' },
    { id: 20, name: 'Flight Bag', image: '/images/tr13.png', color: 'Tan', date: '2024-07-25', description: 'Vintage tan flight bag with authentic design. Perfect for aviation enthusiasts and frequent travelers.' },
    { id: 21, name: 'Leather Duffel', image: '/images/tr14.png', color: 'Black', date: '2024-01-15', description: 'Premium leather duffel bag with spacious interior. Features multiple compartments and durable zippers for secure travel.' },
    { id: 22, name: 'Leather Duffel', image: '/images/tr15.png', color: 'Brown', date: '2024-02-20', description: 'Classic brown leather duffel with vintage appeal. Perfect for weekend getaways with organized storage.' },
    { id: 23, name: 'Rolling Carry-On', image: '/images/duf1.png', color: 'Gray', date: '2024-03-10', description: 'Modern rolling carry-on with 360° spinner wheels. Features telescopic handle and TSA-approved locks.' },
    { id: 24, name: 'Rolling Carry-On', image: '/images/duf2.png', color: 'Navy', date: '2024-01-25', description: 'Navy blue rolling carry-on with sleek design. Durable construction with expandable capacity for longer trips.' },
    { id: 25, name: 'Weekender Bag', image: '/images/duf3.png', color: 'Tan', date: '2024-04-05', description: 'Stylish tan weekender bag for short trips. Features comfortable shoulder strap and quick-access pockets.' },
    { id: 26, name: 'Weekender Bag', image: '/images/duf4.png', color: 'Dark Brown', date: '2024-02-14', description: 'Sophisticated dark brown weekender bag. Premium leather with reinforced handles for durability.' },
    { id: 27, name: 'Garment Bag', image: '/images/duf5.png', color: 'Black', date: '2024-05-18', description: 'Professional garment bag for business travel. Keeps suits and dresses wrinkle-free with multiple hanger slots.' },
    { id: 28, name: 'Garment Bag', image: '/images/duf6.png', color: 'Brown', date: '2024-03-22', description: 'Classic brown leather garment bag. Features water-resistant lining and secure closures.' },
    { id: 29, name: 'Travel Backpack', image: '/images/duf7.png', color: 'Tan', date: '2024-06-30', description: 'Versatile travel backpack with laptop compartment. Ergonomic design with multiple organizational pockets.' },
    { id: 30, name: 'Travel Backpack', image: '/images/duf8.png', color: 'Brown', date: '2024-07-12', description: 'Durable brown travel backpack for adventure. Features weather-resistant material and comfortable straps.' },
    { id: 31, name: 'Cabin Bag', image: '/images/duf9.png', color: 'Black', date: '2024-08-05', description: 'Compact black cabin bag for airline travel. Designed to fit under airplane seats with smart organization.' },
    { id: 32, name: 'Cabin Bag', image: '/images/duf10.png', color: 'Brown', date: '2024-01-08', description: 'Classic brown cabin bag with premium leather. Perfect for business trips with professional appearance.' },
    { id: 33, name: 'Travel Tote', image: '/images/duf11.png', color: 'Tan', date: '2024-09-14', description: 'Spacious travel tote for versatile use. Features reinforced base and comfortable handles.' },
    { id: 34, name: 'Travel Tote', image: '/images/duf12.png', color: 'Black', date: '2024-04-28', description: 'Elegant black travel tote with modern design. Large capacity with organized interior compartments.' },
    { id: 35, name: 'Spinner Luggage', image: '/images/duf13.png', color: 'Silver', date: '2024-10-20', description: 'Sleek silver spinner luggage with four wheels. Features durable polycarbonate shell and smooth maneuverability.' },
    { id: 36, name: 'Spinner Luggage', image: '/images/duf14.png', color: 'Charcoal', date: '2024-05-07', description: 'Charcoal spinner luggage with premium finish. TSA combination locks and interior compression straps.' },
    { id: 37, name: 'Travel Organizer', image: '/images/duf15.png', color: 'Burgundy', date: '2024-11-11', description: 'Burgundy leather travel organizer for essentials. Keeps documents, electronics, and toiletries organized.' },
    { id: 38, name: 'Travel Organizer', image: '/images/duf16.png', color: 'Black', date: '2024-06-17', description: 'Black travel organizer with multiple compartments. Perfect for keeping travel items neat and accessible.' },
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
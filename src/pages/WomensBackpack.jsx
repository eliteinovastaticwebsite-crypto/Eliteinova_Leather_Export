import React, { useState } from 'react';
import './WomensBackpack.css';

const WomensBackpackPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  // 20 women's backpack products with descriptions
  const products = [
    { id: 1, name: 'Women’s Leather Mini Backpack', image: '/images/wbp1.png', color: 'Chestnut Brown', date: '2024-01-15', description: 'Compact genuine leather backpack designed for everyday city use with a stylish silhouette.' },
    { id: 2, name: 'Women’s Soft Leather Backpack', image: '/images/wbp2.png', color: 'Dusty Pink', date: '2024-02-20', description: 'Lightweight soft leather backpack offering comfort and elegance for casual outings.' },
    { id: 3, name: 'Women’s Structured Leather Backpack', image: '/images/wbp3.png', color: 'Dark Brown', date: '2024-03-10', description: 'Sleek structured leather backpack with a modern profile for work and travel.' },
    { id: 4, name: 'Women’s Classic Leather Backpack', image: '/images/wbp4.png', color: 'Cognac Tan', date: '2024-01-25', description: 'Timeless leather backpack with a clean design, perfect for daily and office wear.' },
    { id: 5, name: 'Women’s Washed Leather Backpack', image: '/images/wbp5.png', color: 'Charcoal Grey', date: '2024-04-05', description: 'Vintage-washed leather backpack with a relaxed finish for casual everyday use.' },
    { id: 6, name: 'Women’s Urban Leather Backpack', image: '/images/wbp6.png', color: 'Coffee Brown', date: '2024-02-14', description: 'Practical leather backpack with multiple compartments for work and daily essentials.' },
    { id: 7, name: 'Women’s Casual Leather Backpack', image: '/images/wbp7.png', color: 'Taupe Brown', date: '2024-05-18', description: 'Soft leather backpack with ergonomic straps for long-hour comfort and style.' },
    { id: 8, name: 'Women’s Vintage Leather Backpack', image: '/images/wbp8.png', color: 'Rustic Brown', date: '2024-03-22', description: 'Handcrafted leather backpack featuring a vintage texture and functional storage.' },
    { id: 9, name: 'Women’s Travel Leather Backpack', image: '/images/wbp9.png', color: 'Olive Green', date: '2024-06-30', description: 'Spacious leather backpack ideal for travel, featuring secure zippers and durable build.' },
    /*{ id: 10, name: 'Urban Leather Laptop Bag', image: '/images/L9.png', color: 'Black', date: '2024-07-12', description: 'Contemporary urban leather laptop bag designed for the modern professional woman.' },
    { id: 11, name: 'Urban Leather Laptop Bag', image: '/images/L10.png', color: 'Tan', date: '2024-08-05', description: 'Stylish tan urban leather laptop bag perfect for city commuting and work.' },
    { id: 12, name: 'Classic Leather Laptop Bag', image: '/images/L11.png', color: 'Dark Brown', date: '2024-01-08', description: 'Traditional dark brown classic leather laptop bag with enduring style.' },
    { id: 13, name: 'Classic Leather Laptop Bag', image: '/images/L12.png', color: 'Brown', date: '2024-09-14', description: 'Elegant brown classic leather laptop bag featuring premium craftsmanship.' },
    { id: 14, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L13.png', color: 'Brown', date: '2024-04-28', description: 'Chic travel laptop bag combining fashion-forward design with travel functionality.' },
    { id: 15, name: 'Topper Stylish Leather Travel Laptop Bag', image: '/images/L14.png', color: 'Black', date: '2024-10-20', description: 'Sleek black stylish travel laptop bag offering both elegance and utility.' },
    { id: 16, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Black', date: '2024-05-07', description: 'Comfortable leather shoulder laptop bag designed for easy carrying and accessibility.' },
    { id: 17, name: 'Leather Shoulder Laptop Bag', image: '/api/placeholder/300/300', color: 'Brown', date: '2024-11-11', description: 'Practical brown leather shoulder laptop bag with durable construction.' },
    { id: 18, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Black', date: '2024-06-17', description: 'Modern urban leather tote perfect for work and casual occasions.' },
    { id: 19, name: 'Urban Leather Tote', image: '/api/placeholder/300/300', color: 'Dark Brown', date: '2024-12-01', description: 'Dark brown urban leather tote combining sophistication with everyday utility.' },
    { id: 20, name: 'Premium Leather Travel Laptop Bag', image: '/api/placeholder/300/300', color: 'Tan', date: '2024-07-25', description: 'Premium tan travel laptop bag offering luxury protection and stylish travel.' }
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
    <div className="womensbackpack-page">
      <div className="womensbackpack-breadcrumb">
        <a href="/">Home</a> / <span>Women's Backpack</span>
      </div>

      <div className="womensbackpack-hero-section">
        <img src="/images/womenbackpack.png" alt="Elegant Women's Laptop Bags" className="womensbackpack-hero-image" />
      </div>

      {/* Featured Products Header */}
      <section className="womensbackpack-featured-header">
        <div className="womensbackpack-section-header">
          <h2 className="womensbackpack-section-title">FEATURED PRODUCTS</h2>
          <div className="womensbackpack-title-underline"></div>
        </div>
      </section>

      <div className="womensbackpack-container">
        <div className="womensbackpack-filter-bar">
          <div className="womensbackpack-sort-section">
            <span className="womensbackpack-products-count">{sortedProducts.length} Products</span>
            <div className="womensbackpack-sort-dropdown">
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

        <div className="womensbackpack-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="womensbackpack-product-card">
              <div className="womensbackpack-card-inner">
                <div className="womensbackpack-card-front">
                  <div className="womensbackpack-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="womensbackpack-product-info">
                    <h3 className="womensbackpack-product-name">{product.name}</h3>
                    <p className="womensbackpack-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="womensbackpack-card-back">
                  <div className="womensbackpack-back-content">
                    <h3 className="womensbackpack-back-title">{product.name}</h3>
                    <div className="womensbackpack-back-divider"></div>
                    <p className="womensbackpack-back-color">Color: {product.color}</p>
                    <p className="womensbackpack-back-description">{product.description}</p>
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

export default WomensBackpackPage;
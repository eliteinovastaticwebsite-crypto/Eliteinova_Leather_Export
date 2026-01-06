import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SmallBagsPage.css';

const SmallBagsPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const collections = [
    {
      name: "Sling Bags",
      products: 12,
      image: "/images/slingbagcollection.png",
      path: "/smallbags/sling-bags"
    },
    {
      name: "Small Crossbody Bags",
      products: 15,
      image: "/images/crossbagbanner.png",
      path: "/smallbags/small-crossbody-bags"
    },
    /*{
      name: "Mini Bags",
      products: 10,
      image: "/images/mini_collection.png",
      path: "/small-bags/mini"
    }*/
  ];

  const products = [
    { id: 1, name: 'Leather Sling Bag', image: '/images/sling1.png', color: 'Dark Brown', date: '2024-01-15', description: 'Compact leather sling bag designed for daily essentials with hands-free comfort.' },
    { id: 2, name: 'Leather Sling Bag', image: '/images/sling2.png', color: 'Olive Brown', date: '2024-02-20', description: 'Minimal leather crossbody bag offering a clean design and practical storage.' },
    { id: 3, name: 'Leather Sling Bag', image: '/images/sling3.png', color: 'Chestnut Brown', date: '2024-03-10', description: 'Slim vertical leather sling bag crafted for casual and travel use.' },
    { id: 4, name: 'Leather Sling Bag', image: '/images/sling4.png', color: 'Tan Brown', date: '2024-01-25', description: 'Lightweight tan leather sling bag perfect for everyday carry.' },
    { id: 5, name: 'Leather Sling Bag', image: '/images/sling5.png', color: 'Dark Olive Green', date: '2024-04-05', description: 'Sleek leather crossbody bag designed for compact storage and easy movement.' },
    { id: 6, name: 'Leather Sling Bag', image: '/images/sling8.png', color: 'Rust Brown', date: '2024-02-14', description: 'Stylish rust-tone leather sling bag ideal for casual outings.' },
    { id: 7, name: 'Mini Leather Satchel Bag', image: '/images/sling9.png', color: 'Light Tan', date: '2024-05-18', description: 'Structured mini leather satchel with flap closure for secure daily use.' },
    { id: 8, name: 'Mini Leather Satchel Bag', image: '/images/sling10.png', color: 'Dark Brown', date: '2024-03-22', description: 'Vintage-style leather mini satchel with buckle closure and compact design.' },
    { id: 9, name: 'Leather Flap Sling Bag', image: '/images/sling11.png', color: 'Charcoal Grey', date: '2024-06-30', description: 'Soft leather flap crossbody bag offering a relaxed and functional look.' },
    { id: 10, name: 'Leather Flap Sling Bag', image: '/images/sling12.png', color: 'Medium Brown', date: '2024-07-12', description: 'Classic leather flap bag designed for everyday crossbody comfort.' },
    { id: 11, name: 'Leather Shoulder Sling Bag', image: '/images/sling13.png', color: 'Sand Tan', date: '2024-08-05', description: 'Compact shoulder sling bag crafted for lightweight daily use.' },
    { id: 12, name: 'Mini Saddle Crossbody Bag', image: '/images/cross1.png', color: 'Mustard Tan', date: '2024-01-08', description: 'Curved saddle-style leather crossbody bag with a clean minimalist finish.' },
    { id: 13, name: 'Mini Leather Crossbody Bag', image: '/images/cross2.png', color: 'Light Tan', date: '2024-09-14', description: 'Small leather crossbody bag designed for essentials and casual wear.' },
    { id: 14, name: 'Leather Wristlet Clutch', image: '/images/cross3.png', color: 'Dark Olive Green', date: '2024-04-28', description: 'Soft leather wristlet clutch ideal for evening use or compact carry.' },
    /*{ id: 15, name: 'Top Handle Bag', image: '/images/bag15.png', color: 'Tan', date: '2024-10-20', description: 'Elegant tan top handle bag with structured silhouette. Features premium hardware and fine craftsmanship.' },
    { id: 16, name: 'Top Handle Bag', image: '/images/bag16.png', color: 'Brown', date: '2024-05-07', description: 'Brown leather top handle bag with sophisticated appeal. Perfect for both day and evening use.' },
    { id: 17, name: 'Bucket Bag', image: '/images/bag17.png', color: 'White', date: '2024-11-11', description: 'Chic white bucket bag with drawstring closure. Combines modern style with practical storage.' },
    { id: 18, name: 'Bucket Bag', image: '/images/bag18.png', color: 'Black', date: '2024-06-17', description: 'Classic black bucket bag in premium leather. Features adjustable strap and secure interior.' },
    { id: 19, name: 'Convertible Bag', image: '/images/bag19.png', color: 'Brown', date: '2024-12-01', description: 'Versatile brown convertible bag with multiple carrying options. Can be worn as crossbody or shoulder bag.' },
    { id: 20, name: 'Convertible Bag', image: '/images/bag20.png', color: 'Tan', date: '2024-07-25', description: 'Tan convertible bag with adjustable straps. Perfect for those who value adaptability and style.' }
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
    <div className="small-bags-page">
      <div className="small-bags-breadcrumb">
        <a href="/">Home</a> / <span>Small Bags</span>
      </div>

      <div className="small-bags-hero-section">
        <img src="/images/smallbanner.png" alt="Designer Small Bags" className="small-bags-hero-image" />
      </div>

      {/* Collections Section */}
      <section className="small-bags-collections-section">
        <div className="small-bags-section-header">
          <h2 className="small-bags-section-title">COLLECTION</h2>
          <div className="small-bags-title-underline"></div>
        </div>

        <div className="small-bags-collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="small-bags-collection-card"
              onClick={() => handleCollectionClick(collection.path)}
            >
              <div className="small-bags-collection-image">
                <div className="small-bags-collection-icon-wrapper">
                  <img src={collection.image} alt={collection.name} className="small-bags-collection-img" />
                </div>
              </div>
              <h3 className="small-bags-collection-name">{collection.name}</h3>
              <p className="small-bags-collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leather Small bags Benefits Section */}
      <section className="small-bags-benefits-section">
        <div className="small-bags-benefits-content">
          <div className="small-bags-benefits-image">
            <div className="small-bags-benefits-image-placeholder">
              <img src="/images/smallbag_about.jpg" alt="Premium Small Bags" className="small-bags-benefits-img" />
            </div>
          </div>
          <div className="small-bags-benefits-text">
            <h2 className="small-bags-benefits-title">Crafted Compact Luxury in Leather</h2>
            <p className="small-bags-benefits-description">
              At Eliteinova Leather Products Export, our sling and small bags are thoughtfully created for those who value refined craftsmanship in a compact form.
              Designed for effortless mobility, our leather sling and small bags provide smart organization without compromising on style. 
              Lightweight yet sturdy, they are ideal for carrying daily essentials while maintaining a sleek silhouette. Over time, the natural leather softens and develops a distinctive character, making every bag uniquely yours. 
              From contemporary crossbody designs to minimalist small bags, our collection delivers sophistication, comfort, and versatility for modern living.
            </p>
            <button className="small-bags-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Header */}
      <section className="small-bags-featured-header">
        <div className="small-bags-section-header">
          <h2 className="small-bags-section-title">FEATURED PRODUCTS</h2>
          <div className="small-bags-title-underline"></div>
        </div>
      </section>

      <div className="small-bags-container">
        <div className="small-bags-filter-bar">
          <div className="small-bags-sort-section">
            <span className="small-bags-products-count">{sortedProducts.length} Products</span>
            <div className="small-bags-sort-dropdown">
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

        <div className="small-bags-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="small-bags-product-card">
              <div className="small-bags-card-inner">
                <div className="small-bags-card-front">
                  <div className="small-bags-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="small-bags-product-info">
                    <h3 className="small-bags-product-name">{product.name}</h3>
                    <p className="small-bags-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="small-bags-card-back">
                  <div className="small-bags-back-content">
                    <h3 className="small-bags-back-title">{product.name}</h3>
                    <div className="small-bags-back-divider"></div>
                    <p className="small-bags-back-color">Color: {product.color}</p>
                    <p className="small-bags-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="small-bags-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default SmallBagsPage;
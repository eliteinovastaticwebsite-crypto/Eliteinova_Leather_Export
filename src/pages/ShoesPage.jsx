import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoesPage.css';

const ShoesPage = () => {
  const navigate = useNavigate();

  const collections = [
    {
      name: "Boots",
      products: 15,
      image: "/images/boots_collection.png",
      path: "/shoes/boots"
    },
    {
      name: "Formal Shoes",
      products: 18,
      image: "/images/formal_collection.png",
      path: "/shoes/formal"
    },
    {
      name: "Casual Shoes",
      products: 11,
      image: "/images/casual_collection.png",
      path: "/shoes/casual"
    }
  ];

  // Featured shoe products
  const products = [
    { id: 1, name: 'Classic Leather Boot', image: '/images/shoe1.png', color: 'Brown', inStock: true, date: '2024-01-15' },
    { id: 2, name: 'Classic Leather Boot', image: '/images/shoe2.png', color: 'Black', inStock: false, date: '2024-02-20' },
    { id: 3, name: 'Oxford Formal Shoes', image: '/images/shoe3.png', color: 'Brown', inStock: true, date: '2024-03-10' },
    { id: 4, name: 'Oxford Formal Shoes', image: '/images/shoe4.png', color: 'Black', inStock: true, date: '2024-01-25' },
    { id: 5, name: 'Derby Formal Shoes', image: '/images/shoe5.png', color: 'Tan', inStock: true, date: '2024-04-05' },
    { id: 6, name: 'Derby Formal Shoes', image: '/images/shoe6.png', color: 'Dark Brown', inStock: false, date: '2024-02-14' },
    { id: 7, name: 'Chelsea Boot', image: '/images/shoe7.png', color: 'Black', inStock: true, date: '2024-05-18' },
    { id: 8, name: 'Chelsea Boot', image: '/images/shoe8.png', color: 'Brown', inStock: true, date: '2024-03-22' },
    { id: 9, name: 'Casual Loafers', image: '/images/shoe9.png', color: 'Tan', inStock: true, date: '2024-06-30' },
    { id: 10, name: 'Casual Loafers', image: '/images/shoe10.png', color: 'Brown', inStock: true, date: '2024-07-12' },
    { id: 11, name: 'Monk Strap Shoes', image: '/images/shoe11.png', color: 'Black', inStock: false, date: '2024-08-05' },
    { id: 12, name: 'Monk Strap Shoes', image: '/images/shoe12.png', color: 'Brown', inStock: true, date: '2024-01-08' },
  ];

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shoes-page">
      <div className="shoes-breadcrumb">
        <a href="/">Home</a> / <span>Shoes</span>
      </div>

      <div className="shoes-hero-section">
        <img src="/images/slide2.jpg" alt="Premium Leather Shoes" className="shoes-hero-image" />
      </div>

      {/* Collections Section */}
      <section className="shoes-collections-section">
        <div className="shoes-section-header">
          <h2 className="shoes-section-title">COLLECTION</h2>
          <div className="shoes-title-underline"></div>
        </div>

        <div className="shoes-collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="shoes-collection-card"
              onClick={() => handleCollectionClick(collection.path)}
            >
              <div className="shoes-collection-image">
                <div className="shoes-collection-icon-wrapper">
                  <img src={collection.image} alt={collection.name} className="shoes-collection-img" />
                </div>
              </div>
              <h3 className="shoes-collection-name">{collection.name}</h3>
              <p className="shoes-collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="shoes-container">
        <div className="shoes-featured-header">
          <h2 className="shoes-featured-title">FEATURED PRODUCTS</h2>
          <div className="shoes-featured-underline"></div>
        </div>

        <div className="shoes-products-grid">
          {products.map(product => (
            <div key={product.id} className="shoes-product-card">
              <div className="shoes-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="shoes-product-info">
                <h3 className="shoes-product-name">{product.name}</h3>
                <p className="shoes-product-color">{product.color}</p>
                {!product.inStock && (
                  <p className="shoes-out-of-stock">Out of Stock</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leather Shoes Benefits Section */}
      <section className="shoes-benefits-section">
        <div className="shoes-benefits-content">
          <div className="shoes-benefits-image">
            <div className="shoes-benefits-image-placeholder">
              <img src="/images/shoes about.jpg" alt="Premium Leather Shoes" className="shoes-benefits-img" />
            </div>
          </div>
          <div className="shoes-benefits-text">
            <h2 className="shoes-benefits-title">The Art of Leather Footwear</h2>
            <p className="shoes-benefits-description">
              At Eliteinova, we are chosen for our commitment to quality, reliability, and trusted manufacturing partnerships. 
              We use premium-grade leather known for its durability, rich texture, and ability to age beautifully over time. 
              Our strict quality checks ensure strength, comfort, and long-lasting performance in every product.
            </p>
            <p className="shoes-benefits-description">
              Leather shoes offer unmatched breathability, allowing your feet to stay cool and comfortable throughout the day. 
              The natural material molds to your foot shape over time, providing a personalized fit that synthetic materials 
              simply cannot replicate. This focus allows us to deliver refined, export-quality leather goods that meet 
              international standards.
            </p>
            <button className="shoes-cta-button" onClick={scrollToTop}>
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      <a href="https://wa.me/9876543210" className="shoes-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default ShoesPage;
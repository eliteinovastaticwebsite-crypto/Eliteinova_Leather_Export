import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SmallBagsPage.css';

const SmallBagsPage = () => {
  const navigate = useNavigate();

  const collections = [
    {
      name: "Sling Bags",
      products: 12,
      image: "/images/clutches_collection.png",
      path: "/small-bags/clutches"
    },
    {
      name: "Small Crossbody Bags",
      products: 15,
      image: "/images/crossbody_collection.png",
      path: "/small-bags/crossbody"
    },
    /*{
      name: "Mini Bags",
      products: 10,
      image: "/images/mini_collection.png",
      path: "/small-bags/mini"
    }*/
  ];

  const products = [
    { id: 1, name: 'Leather Clutch', image: '/images/bag1.png', color: 'Black', inStock: true, date: '2024-01-15' },
    { id: 2, name: 'Leather Clutch', image: '/images/bag2.png', color: 'Brown', inStock: false, date: '2024-02-20' },
    { id: 3, name: 'Evening Clutch', image: '/images/bag3.png', color: 'Gold', inStock: true, date: '2024-03-10' },
    { id: 4, name: 'Evening Clutch', image: '/images/bag4.png', color: 'Silver', inStock: true, date: '2024-01-25' },
    { id: 5, name: 'Crossbody Bag', image: '/images/bag5.png', color: 'Tan', inStock: true, date: '2024-04-05' },
    { id: 6, name: 'Crossbody Bag', image: '/images/bag6.png', color: 'Dark Brown', inStock: false, date: '2024-02-14' },
    { id: 7, name: 'Mini Satchel', image: '/images/bag7.png', color: 'Black', inStock: true, date: '2024-05-18' },
    { id: 8, name: 'Mini Satchel', image: '/images/bag8.png', color: 'Brown', inStock: true, date: '2024-03-22' },
    { id: 9, name: 'Chain Bag', image: '/images/bag9.png', color: 'Tan', inStock: true, date: '2024-06-30' },
    { id: 10, name: 'Chain Bag', image: '/images/bag10.png', color: 'Brown', inStock: true, date: '2024-07-12' },
    { id: 11, name: 'Shoulder Bag', image: '/images/bag11.png', color: 'Black', inStock: false, date: '2024-08-05' },
    { id: 12, name: 'Shoulder Bag', image: '/images/bag12.png', color: 'Brown', inStock: true, date: '2024-01-08' },
    { id: 13, name: 'Wristlet', image: '/images/bag13.png', color: 'Tan', inStock: true, date: '2024-09-14' },
    { id: 14, name: 'Wristlet', image: '/images/bag14.png', color: 'Black', inStock: true, date: '2024-04-28' },
    { id: 15, name: 'Top Handle Bag', image: '/images/bag15.png', color: 'Tan', inStock: false, date: '2024-10-20' },
    { id: 16, name: 'Top Handle Bag', image: '/images/bag16.png', color: 'Brown', inStock: true, date: '2024-05-07' },
    { id: 17, name: 'Bucket Bag', image: '/images/bag17.png', color: 'White', inStock: true, date: '2024-11-11' },
    { id: 18, name: 'Bucket Bag', image: '/images/bag18.png', color: 'Black', inStock: true, date: '2024-06-17' },
    { id: 19, name: 'Convertible Bag', image: '/images/bag19.png', color: 'Brown', inStock: true, date: '2024-12-01' },
    { id: 20, name: 'Convertible Bag', image: '/images/bag20.png', color: 'Tan', inStock: true, date: '2024-07-25' }
  ];

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="small-bags-page">
      <div className="small-bags-breadcrumb">
        <a href="/">Home</a> / <span>Small Bags</span>
      </div>

      <div className="small-bags-hero-section">
        <img src="/images/small_bags_hero.png" alt="Designer Small Bags" className="small-bags-hero-image" />
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

      {/* Featured Products Section */}
      <div className="small-bags-container">
        <div className="small-bags-featured-header">
          <h2 className="small-bags-featured-title">FEATURED PRODUCTS</h2>
          <div className="small-bags-featured-underline"></div>
        </div>

        <div className="small-bags-products-grid">
          {products.map(product => (
            <div key={product.id} className="small-bags-product-card">
              <div className="small-bags-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="small-bags-product-info">
                <h3 className="small-bags-product-name">{product.name}</h3>
                <p className="small-bags-product-color">{product.color}</p>
                {!product.inStock && (
                  <p className="small-bags-out-of-stock">Out of Stock</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://wa.me/9876543210" className="small-bags-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default SmallBagsPage;
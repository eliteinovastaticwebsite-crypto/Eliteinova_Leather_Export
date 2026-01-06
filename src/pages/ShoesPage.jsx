import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoesPage.css';

const ShoesPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  // Shoe products with descriptions
  const products = [
    { id: 1, name: 'Single Monk Strap Leather Shoe', image: '/images/shoe1.png', color: 'Dark Brown', date: '2024-01-15', description: 'A refined single monk strap shoe crafted for formal elegance and smart office wear.' },
    { id: 2, name: 'Penny Loafer', image: '/images/formal1.png', color: 'Black', date: '2024-02-20', description: 'A sleek slip-on penny loafer offering timeless style and everyday comfort.' },
    { id: 3, name: 'Oxford Cap-Toe Leather Shoe', image: '/images/formal2.png', color: 'Tan Brown', date: '2024-03-10', description: 'Classic cap-toe Oxford designed for formal occasions and business attire.' },
    { id: 4, name: 'Oxford Plain-Toe Leather Shoe', image: '/images/formal3.png', color: 'Dark Brown', date: '2024-01-25', description: 'Minimal plain-toe Oxford delivering a clean and sophisticated formal look.' },
    { id: 5, name: 'Oxford Cap-Toe Leather Shoe', image: '/images/formal4.png', color: 'Light Tan', date: '2024-04-05', description: 'A traditional cap-toe Oxford with a warm tan finish for formal styling.' },
    { id: 6, name: 'Derby Plain-Toe Leather Shoe', image: '/images/formal5.png', color: 'Medium Brown', date: '2024-02-14', description: 'Comfortable lace-up Derby ideal for both office wear and formal events.' },
    { id: 7, name: 'Wholecut Leather Shoe', image: '/images/formal6.png', color: 'Cognac Brown', date: '2024-05-18', description: 'Premium wholecut leather shoe made from a single piece of leather for a sleek finish.' },
    { id: 8, name: 'Single Monk Strap Leather Shoe', image: '/images/formal7.png', color: 'Dark Brown', date: '2024-03-22', description: 'Elegant monk strap shoe balancing classic design with modern sophistication.' },
    { id: 9, name: 'Brogue Oxford Leather Shoe', image: '/images/formal8.png', color: 'Black', date: '2024-06-30', description: 'Detailed brogue Oxford combining formal structure with decorative perforations.' },
    { id: 10, name: 'Oxford Plain-Toe Leather Shoe', image: '/images/formal9.png', color: 'Black', date: '2024-07-12', description: 'Sharp plain-toe Oxford designed for professional and formal use.' },
    { id: 11, name: 'Double Monk Strap Leather Shoe', image: '/images/formal10.png', color: 'Tan Brown', date: '2024-08-05', description: 'Stylish double monk strap shoe offering a bold yet elegant formal look.' },
    { id: 12, name: 'Textured Penny Loafer', image: '/images/formal11.png', color: 'Navy Blue', date: '2024-01-08', description: 'Contemporary textured loafer perfect for smart-casual outfits.' },
    { id: 13, name: 'Textured Penny Loafer', image: '/images/formal12.png', color: 'Navy Blue', date: '2024-01-08', description: 'Modern slip-on loafer with textured leather for casual sophistication.' },
    { id: 14, name: 'Casual Lace-Up Leather Shoe', image: '/images/formal13.png', color: 'Dark Brown', date: '2024-01-08', description: 'Comfortable lace-up shoe designed for daily wear and light walking.' },
    
    { id: 16, name: 'Casual Boat Shoe', image: '/images/casual2.png', color: 'Olive Green', date: '2024-04-05', description: 'Lightweight leather boat shoe ideal for relaxed casual styling.' },
    { id: 17, name: 'Casual Slip-On Loafer', image: '/images/casual3.png', color: 'Charcoal Grey', date: '2024-02-14', description: 'Easy slip-on loafer offering comfort and everyday versatility.' },
    { id: 18, name: 'Casual Moccasin Shoe', image: '/images/casual4.png', color: 'Brown', date: '2024-05-18', description: 'Soft leather moccasin providing flexibility and all-day comfort.' },
    { id: 19, name: 'Casual Moccasin Shoe', image: '/images/casual5.png', color: 'Beige', date: '2024-03-22', description: 'Lightweight moccasin perfect for casual outings and travel wear.' },
    { id: 20, name: 'Casual Loafers', image: '/images/casual6.png', color: 'Black', date: '2024-06-30', description: 'Breathable casual loafer designed for relaxed daily use.' },
    { id: 21, name: 'Casual Moccasin Shoe', image: '/images/casual7.png', color: 'Dark Brown', date: '2024-07-12', description: 'Classic moc-toe design offering durability and comfort.' },
    { id: 22, name: 'Casual Moccasin Shoe', image: '/images/casual8.png', color: 'Olive Green', date: '2024-08-05', description: 'Stylish casual moccasin ideal for weekend and travel wear.' },
    { id: 23, name: 'Casual Moccasin Shoe', image: '/images/casual9.png', color: 'Tan Brown', date: '2024-01-08', description: 'Comfortable slip-on moccasin with a soft leather finish.' },
    { id: 24, name: 'Casual Moccasin Shoe', image: '/images/casual10.png', color: 'Dark Brown', date: '2024-01-08', description: 'Rugged moccasin built for everyday comfort and durability.' },
    { id: 25, name: 'Casual Moccasin Shoe', image: '/images/casual11.png', color: 'Light Tan', date: '2024-01-08', description: 'Lightweight moccasin shoe suited for relaxed and casual styling.' },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  const collections = [
   /* {
      name: "Boots",
      products: 15,
      image: "/images/boots1.png",
      path: "/shoes/boots"
    },*/
    {
      name: "Formal Shoes",
      products: 10,
      image: "/images/formal1_collection.png",
      path: "/shoes/formal"
    },
    {
      name: "Casual Shoes",
      products: 9,
      image: "/images/casual2.png",
      path: "/shoes/casual"
    }
  ];

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
              At Eliteinova, we are chosen for our commitment to quality, reliability, and trusted manufacturers. 
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

      {/* Featured Products Header - Added this section */}
      <section className="shoes-featured-header">
        <div className="shoes-section-header">
          <h2 className="shoes-section-title">FEATURED PRODUCTS</h2>
          <div className="shoes-title-underline"></div>
        </div>
      </section>

      <div className="shoes-container">
        <div className="shoes-filter-bar">
          <div className="shoes-sort-section">
            <span className="shoes-products-count">{sortedProducts.length} Products</span>
            <div className="shoes-sort-dropdown">
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

        <div className="shoes-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="shoes-product-card">
              <div className="shoes-card-inner">
                <div className="shoes-card-front">
                  <div className="shoes-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="shoes-product-info">
                    <h3 className="shoes-product-name">{product.name}</h3>
                    <p className="shoes-product-color">{product.color}</p>
                  </div>
                </div>
                <div className="shoes-card-back">
                  <div className="shoes-back-content">
                    <h3 className="shoes-back-title">{product.name}</h3>
                    <div className="shoes-back-divider"></div>
                    <p className="shoes-back-color">Color: {product.color}</p>
                    <p className="shoes-back-description">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<a href="https://wa.me/9876543210" className="shoes-whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="#fff" stroke="#25d366" strokeWidth="0.5" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>*/}
    </div>
  );
};

export default ShoesPage;
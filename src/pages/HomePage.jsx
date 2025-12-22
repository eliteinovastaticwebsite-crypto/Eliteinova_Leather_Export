import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // ADDED: Import useNavigate
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();  // ADDED: Initialize navigate

  const slides = [
    {
      image: "/images/slide1.jpg"
    },
    {
      image: "/images/slide2.jpg"
    },
    {
      image: "/images/slide3.jpg"
    },
    {
      image: "/images/slide4.jpg"
    },
    {
      image: "/images/slide5.jpg"
    },
    {
      image: "/images/slide6.jpg"
    }
  ];

  const collections = [
    {
      name: "Shoes",
      products: 44,
      image: "/images/collection_shoe.png",
      color: "#8b4513",
      path: "/shoes"  // ADDED: Navigation path
    },
    {
      name: "Handbags",
      products: 67,
      image: "/images/red_handbag.png",
      color: "#8b4513",
      path: "/women-handbags"  // ADDED: Navigation path
    },
    {
      name: "Small Bags",
      products: 67,
      image: "/images/small_bag.png",
      color: "#8b4513",
      path: "/smallbags"  // ADDED: Navigation path
    },
    {
      name: "Laptop Bags",
      products: 191,
      image: "/images/collection_image.png",
      color: "#8b4513",
      path: "/laptopbags"  // ADDED: Navigation path
    },
    {
      name: "Travel Bags",
      products: 67,
      image: "/images/travel_bag.png",
      color: "#8b4513",
      path: "/travelbags"  // ADDED: Navigation path
    },
    {
      name: "Backpacks",
      products: 67,
      image: "/images/backpack_collection.png",
      color: "#8b4513",
      path: "/backpacks"  // ADDED: Navigation path
    },
    {
      name: "Briefcases",
      products: 67,
      image: "/images/brief.png",
      color: "#8b4513",
      path: "/brief-cases"  // ADDED: Navigation path
    },
    {
      name: "Wallet",
      products: 12,
      image: "/images/wallet.png",
      color: "#8b4513",
      path: "/wallet"  // ADDED: Navigation path
    },
    {
      name: "Belt",
      products: 85,
      image: "/images/collection_belt.png",
      color: "#8b4513",
      path: "/belt"  // ADDED: Navigation path
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ADDED: Handle collection click
  const handleCollectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-full-image" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className="slider-arrow left" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="slider-arrow right" onClick={nextSlide}>
            <ChevronRight />
          </button>

          {/* Slider Indicators */}
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <div className="section-header">
          <h2 className="section-title">COLLECTION</h2>
          <div className="title-underline"></div>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="collection-card"
              onClick={() => handleCollectionClick(collection.path)}  // ADDED: Click handler
              style={{ cursor: 'pointer' }}  // ADDED: Pointer cursor
            >
              <div className="collection-image" style={{ borderColor: collection.color }}>
                <div className="collection-icon-wrapper" style={{ backgroundColor: `${collection.color}15` }}>
                  <img src={collection.image} alt={collection.name} className="collection-img" />
                </div>
                <div className="collection-overlay" style={{ backgroundColor: collection.color }}></div>
              </div>
              <h3 className="collection-name">{collection.name}</h3>
              <p className="collection-count">{collection.products} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Premium Leather Craftsmanship</h2>
            <p className="about-description">
              At Eliteinova, we pride ourselves on creating exceptional leather products that combine 
              traditional craftsmanship with modern design. Each piece is carefully handcrafted using 
              the finest materials to ensure lasting quality and timeless style.
            </p>
            <button className="cta-button">Explore Our Story</button>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <img src="https://images.unsplash.com/photo-1590393294783-4d3f1fe8a1b8?w=500&h=500&fit=crop" alt="Craftsmanship" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-description">Subscribe to get special offers, free giveaways, and updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </section>
      {/* WhatsApp Button */}
      <a href="https://wa.me/9876543210" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.5c-2.547 0-5.025-0.713-7.188-2.05l-0.525-0.3-5.038 1.3 1.325-4.925-0.338-0.55c-1.513-2.438-2.313-5.25-2.313-8.15 0-8.262 6.738-15 15-15s15 6.738 15 15-6.738 15-15 15zM23.738 19.95c-0.288-0.15-1.7-0.85-1.963-0.95-0.262-0.087-0.45-0.137-0.637 0.137s-0.738 0.95-0.9 1.138c-0.175 0.2-0.338 0.225-0.625 0.075-0.288-0.137-1.2-0.45-2.288-1.425-0.85-0.762-1.413-1.7-1.575-1.987-0.163-0.288-0.013-0.45 0.125-0.588 0.137-0.137 0.288-0.35 0.438-0.525 0.137-0.175 0.187-0.3 0.275-0.5 0.1-0.2 0.05-0.375-0.025-0.525s-0.638-1.55-0.875-2.125c-0.238-0.562-0.475-0.488-0.638-0.488-0.162-0.013-0.35-0.013-0.537-0.013s-0.5 0.075-0.762 0.35c-0.263 0.288-0.988 0.963-0.988 2.35s1.013 2.725 1.15 2.912c0.137 0.2 1.988 3.062 4.825 4.288 2.838 1.225 2.838 0.813 3.35 0.762s1.7-0.688 1.938-1.375c0.238-0.688 0.238-1.275 0.163-1.4-0.075-0.125-0.275-0.2-0.563-0.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default HomePage;
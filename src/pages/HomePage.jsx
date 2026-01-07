import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HomePage.css';
import ContactForm from '../components/ContactForm'; 

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

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
      /*products: 44,*/
      image: "/images/collection_shoe.png",
      color: "#8b4513",
      path: "/shoes"
    },
    {
      name: "Handbags",
      image: "/images/red_handbag.png",
      color: "#8b4513",
      path: "/women-handbags"
    },
    {
      name: "Small Bags",
      image: "/images/small_bag.png",
      color: "#8b4513",
      path: "/smallbags"
    },
    {
      name: "Laptop Bags",
      image: "/images/collection_image.png",
      color: "#8b4513",
      path: "/laptopbags"
    },
    {
      name: "Travel Bags",
      image: "/images/travel_bag.png",
      color: "#8b4513",
      path: "/travelbags"
    },
    {
      name: "Backpacks",
      image: "/images/backpack_collection.png",
      color: "#8b4513",
      path: "/backpacks"
    },
    {
      name: "Briefcases",
      image: "/images/brief.png",
      color: "#8b4513",
      path: "/brief-cases"
    },
    {
      name: "Wallet",
      image: "/images/wallet.png",
      color: "#8b4513",
      path: "/wallet"
    },
    {
      name: "Belt",
      image: "/images/collection_belt.png",
      color: "#8b4513",
      path: "/belt"
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

  const handleCollectionClick = (path) => {
    navigate(path);
  };

  // Navigate to About Us page
  const handleExploreStory = () => {
    navigate('/about');
  };

  // Function to open contact form - same as Header
  const handleOrderNowClick = () => {
    setShowContactForm(true);
  };

  // Function to close contact form - same as Header
  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  // Scroll to collections section on the same page
  const handleLearnMore = () => {
    const collectionsSection = document.querySelector('.collections-section');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

      <section className="about-preview">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Large Quantity Orders Only</h2>
            <p className="about-description">
              Eliteinova is a leather export company experienced manufacturers to supply high-quality leather goods worldwide. 
            </p>
            <button className="cta-button" onClick={handleOrderNowClick}>Order Now</button>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <img src="/images/whole products.jpg" alt="Craftsmanship" className="about-img" />
            </div>
          </div>
        </div>
      </section>

       {/* Contact Form Modal - Same as Header */}
      {showContactForm && (
        <div className="contact-form-overlay">
          <div className="contact-form-modal">
            <button 
              className="close-contact-form" 
              onClick={handleCloseContactForm}
              aria-label="Close"
            >
              &times;
            </button>
            <ContactForm onClose={handleCloseContactForm} />
          </div>
        </div>
      )}

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
              onClick={() => handleCollectionClick(collection.path)}
              style={{ cursor: 'pointer' }}
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
              Eliteinova is a leather export company experienced manufacturers to supply high-quality leather goods worldwide. 
              We work to ensure superior materials, skilled craftsmanship, and consistent production standards. 
              Every product undergoes strict quality checks to meet international export requirements. Our strong partnerships enable reliable supply, timely delivery, and scalable production. 
              Eliteinova is committed to delivering excellence and long-term value to global clients.
            </p>
            <button className="cta-button" onClick={handleExploreStory}>Explore Our Story</button>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <img src="/images/leather_craft.jpg" alt="Craftsmanship" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* New Feature Section - Image Left, Text Right */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-image">
            <div className="feature-image-placeholder">
              <img src="/images/leather_product.jpg" alt="Quality Materials" className="feature-img" />
            </div>
          </div>
          <div className="feature-text">
            <h2 className="feature-title">Timeless Quality & Design</h2>
            <p className="feature-description">
              At Eliteinova, we are chosen for our commitment to quality, reliability, and trusted manufacturers. We use premium-grade leather known for its durability, rich texture, and ability to age beautifully over time. 
              Our strict quality checks ensure strength, comfort, and long-lasting performance in every product.
              This focus allows us to deliver refined, export-quality leather goods that meet international standards.
            </p>
            <button className="cta-button" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
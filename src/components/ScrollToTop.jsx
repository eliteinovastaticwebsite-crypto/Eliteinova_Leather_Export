import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // WhatsApp configuration
  const whatsappNumber = '+917397260093';
  const whatsappMessage = 'Hello! I have a question about Eliteinova products.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Phone configuration
  const phoneNumber = 'tel:+917397260093';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show buttons when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Open WhatsApp
  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Open Phone
  const openPhone = () => {
    window.location.href = phoneNumber;
  };

  // Open Contact Form - Works like Header's Order Now button
  const openContactForm = () => {
    // Dispatch a custom event to open contact form (same as header button)
    const openContactFormEvent = new CustomEvent('openContactForm', {
      detail: { 
        source: 'floatingOrderNowButton',
        timestamp: new Date().toISOString()
      }
    });
    window.dispatchEvent(openContactFormEvent);
    
    // Also try to find and trigger the header's order now button
    const headerOrderButton = document.querySelector('.order-now-button');
    if (headerOrderButton) {
      headerOrderButton.click();
    }
    
    // Try to find and show the contact form modal
    const contactFormModal = document.querySelector('.contact-form-modal');
    const contactFormOverlay = document.querySelector('.contact-form-overlay');
    
    if (contactFormModal && contactFormOverlay) {
      contactFormModal.style.display = 'block';
      contactFormOverlay.style.display = 'block';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Listen for the contact form close event
    const handleCloseContactForm = () => {
      const contactFormModal = document.querySelector('.contact-form-modal');
      const contactFormOverlay = document.querySelector('.contact-form-overlay');
      
      if (contactFormModal && contactFormOverlay) {
        contactFormModal.style.display = 'none';
        contactFormOverlay.style.display = 'none';
      }
    };
    
    // Add event listener for close button
    const closeButtons = document.querySelectorAll('.close-contact-form');
    closeButtons.forEach(button => {
      button.addEventListener('click', handleCloseContactForm);
    });
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      // Clean up event listeners
      closeButtons.forEach(button => {
        button.removeEventListener('click', handleCloseContactForm);
      });
    };
  }, []);

  return (
    <div className="floating-buttons-container">
      {/* Always visible buttons */}
      <div className="action-buttons">
        {/* Phone Button */}
        <button
          onClick={openPhone}
          className="action-button phone-button"
          aria-label="Call us"
          title="Call Us: 7397260093"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.3 11.8c-.9-1.7-1.4-3.6-1.5-5.6-.1-.3.2-.7.5-.8.2-.1.5-.1.7.1zM19 20c-1.9-.1-3.8-.6-5.5-1.5l2.2-2.2c1.1.3 2.3.5 3.5.6V20z"/>
          </svg>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="action-button whatsapp-button"
          aria-label="Contact via WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.881 0-3.665-.722-5.002-2.031l-.004-.004-3.341-2.501 1.258-3.214C4.582 11.25 4 9.633 4 7.938 4 4.188 7.033 1 10.736 1c2.012 0 3.902.8 5.282 2.252 1.379 1.452 2.139 3.385 2.139 5.437 0 4.188-3.187 7.098-7.106 7.098M10.736 0C6.481 0 3 3.588 3 7.938c0 2.071.813 4.019 2.291 5.497l.006.006-1.259 3.22 3.421-2.551.006.006c1.478 1.104 3.289 1.713 5.271 1.713 4.255 0 7.736-3.588 7.736-7.938 0-2.329-.957-4.52-2.693-6.161C15.472 1.107 13.176 0 10.736 0"/>
          </svg>
        </button>

        {/* Order Now Button - Opens Contact Form */}
        <button
          onClick={openContactForm}
          className="action-button order-button"
          aria-label="Order Now"
          title="Order Now / Get Quote"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button (appears on scroll) */}
      <div className="scroll-to-top">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="action-button scroll-button"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
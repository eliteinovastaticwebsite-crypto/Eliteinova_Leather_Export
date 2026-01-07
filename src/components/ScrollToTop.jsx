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

        {/* WhatsApp Button - EXACT WHATSAPP LOGO */}
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
            <path d="M17.6 6.32a8.18 8.18 0 00-13.55 9.42L2 22l6.33-1.76a8.17 8.17 0 003.9.95h.01a8.18 8.18 0 005.36-14.87zm.33 9.47a6.11 6.11 0 01-4.14 2.85 6.19 6.19 0 01-3.13-.43l-.23-.1-2.38-.63.5-2.41-.12-.24a6.14 6.14 0 01.92-7.08 6.18 6.18 0 018.66 8.81zm-3.4-4.63c-.18-.09-1.05-.52-1.22-.58-.17-.06-.3-.09-.42.09-.12.18-.46.58-.56.7-.11.11-.22.13-.41.04-.2-.08-.84-.31-1.6-.99a5.92 5.92 0 01-1.1-1.38c-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.04-.25.02-.35-.02-.1-.22-.8-.3-1.1-.08-.27-.17-.23-.24-.23h-.41c-.14 0-.35.05-.54.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.1.14 1.47 2.25 3.63 3.14.51.22.91.29 1.22.37.52.14.99.12 1.37.07.42-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.17-.14-.36-.23z"/>
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
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Header.css';
import ContactForm from './ContactForm'; // Import your ContactForm component

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollText, setScrollText] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // State for contact form
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollText((prev) => prev - 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { name: 'HOME', dropdown: null, path: '/' },
    {
      name: 'SHOES',
      dropdown: [
       /* { name: 'Boots', path: '/shoes/boots' },*/
        { name: 'Formal Shoes', path: '/shoes/formal' },
        { name: 'Casual Shoes', path: '/shoes/casual' },
      ],
      path: '/shoes'
    },
    { name: 'WOMEN HANDBAGS', dropdown: null, path: '/women-handbags' },
    { 
      name: 'SMALL BAGS', 
      dropdown: [
        { name: 'Sling Bags', path: '/smallbags/sling-bags' },
        { name: 'Small Crossbody Bags', path: '/smallbags/small-crossbody-bags' }
      ], 
      path: '/smallbags' 
    },
    { name: 'LAPTOP BAGS', dropdown: null, path: '/laptopbags' },
    {
      name: 'TRAVEL BAGS',
      dropdown: [
        { name: 'Trolley Bags', path: '/travelbags/trolley-bags' },
        { name: 'Duffle Bags', path: '/travelbags/duffle-bags' },
        { name: 'Leather Travel Bags', path: '/travelbags/leather-travel-bags' }
      ],
      path: '/travelbags'
    },
    {
      name: 'BACKPACKS',
      dropdown: [
        { name: 'Men\'s Backpacks', path: '/backpacks/men-backpacks' },
       /* { name: 'Women\'s Backpacks', path: '/backpacks/women-backpacks' } */
      ],
      path: '/backpacks'
    },
    {
      name: 'BRIEFCASE',
      dropdown: null, 
      path: '/brief-cases'
    },
    { 
      name: 'WALLET', 
      dropdown: [
        { name: 'Men\'s Wallet', path: '/wallet/menswallet' },
        { name: 'Passport Holder', path: '/wallet/passportholder' }
      ],
      path: '/wallet' 
    },
   /* { name: 'BELT', dropdown: null, path: '/belt' },*/
    { name: 'ABOUT US', dropdown: null, path: '/about' },
    { name: 'CONTACT', dropdown: null, path: '/contact' }
  ];

  const announcements = [
    '✨ Eliteinova Leather Products Export',
    '📞 Contact Us : 7397260093',
    '📍 Vadapalani,Chennai,India'
  ];

  const handleDropdownClick = (e, item) => {
    e.preventDefault();
    
    // Navigate to the path
    if (item && item.path) {
      navigate(item.path);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  // Handle mobile main link click (navigate to category page)
  const handleMobileMainLinkClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  // Handle mobile dropdown toggle (just toggle, don't navigate)
  const handleMobileDropdownToggle = (idx, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  // Updated handleOrderNowClick function - shows contact form as modal
  const handleOrderNowClick = () => {
    setShowContactForm(true); // Show the contact form
    setMobileMenuOpen(false); // Close mobile menu if open
    setActiveDropdown(null); // Close any open dropdowns
  };

  // Function to close contact form
  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <header className="header">
        {/* Announcement Bar */}
        <div className="announcement-bar">
          <div className="announcement-scroll" style={{ transform: `translateX(${scrollText}px)` }}>
            {[...announcements, ...announcements, ...announcements].map((text, idx) => (
              <span key={idx} className="announcement-text">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <div className="header-content">
            {/* Logo Section */}
            <div className="logo-section" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              <img 
                src="/images/logo1.png" 
                alt="Company Logo" 
                className="company-logo" 
              />
              <div className="logo-text">
                <h1 className="logo-title">
                  Eliteinova Leather Products Export
                </h1>

                <div className="logo-sub-row">
                  <h3 className="logo-subtitle">
                    Eliteinova Tech Pvt Ltd
                  </h3>

                  <div className="logo-country">
                    <img src="/images/india_flag.png" alt="India" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Icons */}
            <div className="header-icons">
              <button 
                className="order-now-button" 
                onClick={handleOrderNowClick}
                aria-label="Order Now"
              >
                Order Now
                <br />
                +917397260093
              </button>

              {/* Hamburger Menu (MOBILE ONLY) */}
              <button
                className="mobile-menu-button icon-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-container">
            {/* Desktop Menu */}
            <ul className="desktop-menu">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="menu-item"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="menu-button"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="chevron-icon" />}
                  </button>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === idx && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((subItem, subIdx) => (
                        <button
                          key={subIdx}
                          onClick={(e) => handleDropdownClick(e, subItem)}
                          className="dropdown-item"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* UPDATED Mobile Menu */}
            {mobileMenuOpen && (
              <div className="mobile-menu">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="mobile-menu-item">
                    {/* If item has dropdown, use split button layout */}
                    {item.dropdown ? (
                      <div className="mobile-menu-item-container">
                        <div className="mobile-menu-header">
                          {/* Main category link - navigates to category page */}
                          <button
                            className="mobile-menu-main-link"
                            onClick={() => handleMobileMainLinkClick(item)}
                          >
                            {item.name}
                          </button>
                          
                          {/* Separate dropdown toggle button */}
                          <button
                            className="mobile-dropdown-toggle"
                            onClick={(e) => handleMobileDropdownToggle(idx, e)}
                            aria-label="Toggle submenu"
                          >
                            <ChevronDown
                              className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`}
                            />
                          </button>
                        </div>
                        
                        {/* Dropdown submenu */}
                        {activeDropdown === idx && (
                          <div className="mobile-dropdown">
                            {item.dropdown.map((subItem, subIdx) => (
                              <button
                                key={subIdx}
                                onClick={(e) => handleDropdownClick(e, subItem)}
                                className="mobile-dropdown-item"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* If no dropdown, simple link */
                      <button
                        className="mobile-menu-link"
                        onClick={() => handleMenuClick(item)}
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Contact Form Modal/Overlay */}
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
    </>
  );
};

export default Header;
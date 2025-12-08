import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollText, setScrollText] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        { name: 'Boots', path: '/shoes/boots' },
        { name: 'Formal Shoes', path: '/shoes/formal' },
        { name: 'Casual Shoes', path: '/shoes/casual' },
      ],
      path: '/shoes'
    },
    { name: 'WOMEN HANDBAGS', dropdown: null, path: '/women-handbags' },
    { name: 'SMALL BAGS', 
      dropdown:  [
        { name: 'Sling Bags', path: '/smallbags/sling-bags' },
        { name: 'Small Crossbody Bags', path: '/smallbags/small-crossbody-bags' }
      ], 
      path: '/smallbags' },
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
        { name: 'Women\'s Backpacks', path: '/backpacks/women-backpacks' }
      ],
      path: '/backpacks'
    },
    {
      name: 'BRIEFCASE',dropdown: null, path: '/bag'
    },
   /* {
      name: 'MEN',
      dropdown: [
        { name: 'All Jackets', path: '/men/all-jackets' },
        { name: 'Best Seller', path: '/men/best-seller' },
        { name: 'Casual Jackets', path: '/men/casual-jackets' },
        { name: 'Simple Jackets', path: '/men/simple-jackets' },
        { name: 'Biker Jackets', path: '/men/biker-jackets' },
        { name: 'Suede Jackets', path: '/men/suede-jackets' },
        { name: 'Bomber Jackets', path: '/men/bomber-jackets' },
        { name: 'Motorcycle Jackets', path: '/men/motorcycle-jackets' },
        { name: 'Winter Jackets', path: '/men/winter-jackets' },
        { name: 'Aviator Jackets', path: '/men/aviator-jackets' },
        { name: 'Hooded Leather Jackets', path: '/men/hooded-leather-jackets' },
        { name: 'Featured Products', path: '/men/featured-products' },
        { name: 'Fur and Shearling Coats', path: '/men/fur-shearling-coats' },
        { name: 'Leather Blazers', path: '/men/leather-blazers' },
        { name: 'Vintage Leather Jackets', path: '/men/vintage-leather-jackets' },
        { name: 'Leather Coats', path: '/men/leather-coats' },
        { name: 'Leather Dusters', path: '/men/leather-dusters' },
        { name: 'Trench & Winter Coats', path: '/men/trench-winter-coats' }
      ],
      path: '/men'
    }, */
   /* {
      name: 'BACKPACKS',
      dropdown: [
        { name: 'All Women Jacket', path: '/women/all-jackets' },
        { name: 'Best Seller', path: '/women/best-seller' },
        { name: 'Biker Jackets', path: '/women/biker-jackets' },
        { name: 'Suede Jackets', path: '/women/suede-jackets' },
        { name: 'Simple Jacket', path: '/women/simple-jacket' },
        { name: 'Aviator Jackets', path: '/women/aviator-jackets' },
        { name: 'Bomber Jacket', path: '/women/bomber-jacket' },
        { name: 'Leather Blazers', path: '/women/leather-blazers' },
        { name: 'Leather Coats', path: '/women/leather-coats' },
        { name: 'Winter Jackets', path: '/women/winter-jackets' },
        { name: 'Motorcycle Jackets', path: '/women/motorcycle-jackets' },
        { name: 'Shearling Jackets & Coats', path: '/women/shearling-jackets-coats' },
        { name: 'Trench & Winter Coats', path: '/women/trench-winter-coats' }
      ],
      path: '/women'
    },*/
    { name: 'WALLET', 
      dropdown:  [
        { name: 'Men\'s Wallet', path: '/wallet/menswallet' },
        { name: 'Passport Holder', path: '/wallet/passportholder' }
      ],
      path: '/wallet' },
    { name: 'BELT', dropdown: null, path: '/belt' },
    { name: 'ABOUT US', dropdown: null, path: '/about' },
    { name: 'CONTACT', dropdown: null, path: '/contact' }
  ];

  const announcements = [
    '✨ Eliteinova Leather Products Export',
    '📞 Contact Us : 9876543210',
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
    if (item.path && !item.dropdown) {
      navigate(item.path);
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
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
               src="/images/logo.jpeg" 
               alt="Company Logo" 
               className="company-logo" 
           />
            <h1 className="logo-title">
              Eliteinova Leather Products Export
            </h1>
            <div className="location">
              <img 
                src="/images/india_flag.png" 
                alt="India Flag" 
                className="flag-icon" 
              />
              <span className="country">India</span>
            </div>
          </div>

          {/* Right Icons */}
          <div className="header-icons">
            <button className="icon-button" aria-label="User Profile">
              <User className="icon" />
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              {menuItems.map((item, idx) => (
                <div key={idx} className="mobile-menu-item">
                  <button
                    className="mobile-menu-button"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === idx ? null : idx);
                      } else {
                        handleMenuClick(item);
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`}
                      />
                    )}
                  </button>
                  {item.dropdown && activeDropdown === idx && (
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
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
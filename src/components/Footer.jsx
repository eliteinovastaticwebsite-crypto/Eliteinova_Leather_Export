import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const mainCategories = [
    { name: 'Shoes', path: '/shoes' },
    /*{ name: 'Casual Shoes', path: '/shoes/casual' },*/
    { name: 'Handbags', path: '/women-handbags' },
    { name: 'Laptop Bags', path: '/laptopbags' },
    { name: 'Travel Bags', path: '/travelbags' },
    { name: 'Backpacks', path: '/backpacks' },
    { name: 'Briefcases', path: '/brief-cases' },
    { name: 'Wallets', path: '/wallet' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Shipping & Returns', path: '/shipping' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo & Company Info */}
        <div className="footer-section footer-logo-section">
          <Link to="/" className="footer-logo">
            <img 
              src="/images/logo1.png" 
              alt="Eliteinova Leather Products Export" 
              className="footer-logo-img"
            />
            <div className="footer-logo-text">
              <h2>Eliteinova Leather Products</h2>
              <span className="tagline">Premium Leather Since 2010</span>
            </div>
          </Link>
          
          <p className="company-description">
            Crafting premium leather goods with precision and elegance. 
            Traditional craftsmanship meets modern design.
          </p>
          
          {/* Social Media */}
          <div className="social-media">
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Main Categories */}
        <div className="footer-section footer-links-section">
          <h3>Shop By Category</h3>
          <ul className="quick-links">
            {mainCategories.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={() => window.scrollTo(0, 0)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <Phone className="contact-icon" />
              <div className="contact-details">
                <div className="contact-value">
                  <a href="tel:+917397260093">+91 73972 60093</a>
                </div>
              </div>
            </li>
            
            <li>
              <Mail className="contact-icon" />
              <div className="contact-details">
                <div className="contact-value">
                  <a href="mailto:info@eliteinova.com">info@eliteinova.com</a>
                </div>
              </div>
            </li>
            
            <li>
              <MapPin className="contact-icon" />
              <div className="contact-details">
                <div className="contact-value">
                  Vadapalani, Chennai<br />
                  Tamil Nadu, India
                </div>
              </div>
            </li>
            
            <li>
              <Clock className="contact-icon" />
              <div className="contact-details">
                <div className="contact-value">
                  Mon-Sat: 9 AM - 7 PM<br />
                  Sunday: 10 AM - 5 PM
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright-section">
            <div className="copyright">
              © {new Date().getFullYear()} <span className="company-name">Eliteinova Leather Products Export</span>. All rights reserved.
            </div>
            
            <div className="digital-partner">
              Digital Partner: {' '}
              <a 
                href="https://www.eliteinovatechpvtltd.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tech-company-link"
              >
                Eliteinova Tech Pvt Ltd
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            {companyLinks.map((link, index) => (
              <Link key={index} to={link.path} onClick={() => window.scrollTo(0, 0)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const productLinks = [
    { name: 'Formal Shoes', path: '/shoes/formal' },
    { name: 'Casual Shoes', path: '/shoes/casual' },
    { name: 'Women Handbags', path: '/women-handbags' },
    { name: 'Sling Bags', path: '/smallbags/sling-bags' },
    { name: 'Small Crossbody Bags', path: '/smallbags/small-crossbody-bags' },
    { name: 'Laptop Bags', path: '/laptopbags' },
    { name: 'Trolley Bags', path: '/travelbags/trolley-bags' },
    { name: 'Duffle Bags', path: '/travelbags/duffle-bags' },
    { name: 'Leather Travel Bags', path: '/travelbags/leather-travel-bags' },
    { name: "Men's Backpacks", path: '/backpacks/men-backpacks' },
    { name: 'Briefcases', path: '/brief-cases' },
    { name: "Men's Wallet", path: '/wallet/menswallet' },
    { name: 'Passport Holder', path: '/wallet/passportholder' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Return Policy', path: '/returns' },
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
              <h2>Eliteinova Leather Products Export</h2>
              <span className="tagline">Premium Leather Since 2010</span>
            </div>
          </Link>
          
          <p className="company-description">
            Eliteinova Leather Products Export offers premium quality leather goods 
            crafted with precision and elegance. We specialize in handmade leather 
            products that combine traditional craftsmanship with modern design.
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

        {/* Quick Links - Products */}
        <div className="footer-section footer-links-section">
          <h3>Our Products</h3>
          <ul className="quick-links">
            {productLinks.map((link, index) => (
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
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <Phone className="contact-icon" />
              <div className="contact-details">
                <div className="contact-title">Phone</div>
                <div className="contact-value">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
            </li>
            
            <li>
              <Mail className="contact-icon" />
              <div className="contact-details">
                <div className="contact-title">Email</div>
                <div className="contact-value">
                  <a href="mailto:info@eliteinova.com">info@eliteinova.com</a><br />
                  <a href="mailto:sales@eliteinova.com">sales@eliteinova.com</a>
                </div>
              </div>
            </li>
            
            <li>
              <MapPin className="contact-icon" />
              <div className="contact-details">
                <div className="contact-title">Address</div>
                <div className="contact-value">
                  Eliteinova Tech Pvt Ltd<br />
                  Vadapalani, Chennai<br />
                  Tamil Nadu, India - 600026
                </div>
              </div>
            </li>
            
            <li>
              <Clock className="contact-icon" />
              <div className="contact-details">
                <div className="contact-title">Business Hours</div>
                <div className="contact-value">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} <span className="company-name">Eliteinova Leather Products Export</span>. All rights reserved.
        </div>
        
        <div className="footer-links">
          {companyLinks.map((link, index) => (
            <Link key={index} to={link.path} onClick={() => window.scrollTo(0, 0)}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { /*Mail*/Phone, MapPin, Clock, Send } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productInterest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        productInterest: '',
        message: ''
      });
    }, 3000);
  };

  const productCategories = [
    'Shoes',
    'Women Handbags',
    'Small Bags',
    'Laptop Bags',
    'Travel Bags',
    'Backpacks',
    'Briefcase',
    'Wallet',
    'Belt',
    'Custom Order'
  ];

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
  <div className="banner-overlay"></div>
  <img 
    src="/images/contact2.png" 
    alt="Leather Craftsmanship"
    className="banner-image"
  />
  <div className="banner-content">
    <h1 className="banner-title">Contact Us</h1>
    <p className="banner-subtitle">
      Let's discuss your wholesale leather product requirements
    </p>
  </div>
</div>

      {/* Content Section */}
      <div className="contact-content">
        {/* Introduction */}
        <div className="contact-intro">
          <h2 className="section-title">Partner With Us</h2>
          <p className="intro-text">
            Eliteinova Leather Products Export is your trusted partner for premium leather goods wholesale. 
            We are experienced manufacturers worldwide to deliver high-quality leather 
            products including shoes, handbags, wallets, belts, and travel accessories. Whether you're 
            looking to place a bulk order or establish a long-term partnership, our team is ready to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon">
              <Phone className="icon" />
            </div>
            <h3 className="info-title">Phone</h3>
            <p className="info-text">+91 7397260093</p>
          </div>

          {/*<div className="info-card">
            <div className="info-icon">
              <Mail className="icon" />
            </div>
            <h3 className="info-title">Email</h3>
            <p className="info-text">info@eliteinova.com</p>
          </div>*/}

          <div className="info-card">
            <div className="info-icon">
              <MapPin className="icon" />
            </div>
            <h3 className="info-title">Location</h3>
            <p className="info-text">Vadapalani, Chennai, India</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Clock className="icon" />
            </div>
            <h3 className="info-title">Business Hours</h3>
            <p className="info-text">Mon-Sat: 9AM-6PM</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="form-section">
          {/* Left Column - Why Contact Us */}
          <div className="why-choose-us">
            <h3 className="why-title">Why Choose Us?</h3>
            <ul className="why-list">
              <li className="why-item">
                <span className="bullet"></span>
                <div>
                  <strong>Premium Quality:</strong> Superior materials and skilled craftsmanship
                </div>
              </li>
              <li className="why-item">
                <span className="bullet"></span>
                <div>
                  <strong>Wholesale Pricing:</strong> Competitive rates for bulk orders
                </div>
              </li>
              <li className="why-item">
                <span className="bullet"></span>
                <div>
                  <strong>Global Shipping:</strong> Reliable worldwide delivery
                </div>
              </li>
              <li className="why-item">
                <span className="bullet"></span>
                <div>
                  <strong>Custom Orders:</strong> Tailored solutions for your business
                </div>
              </li>
              <li className="why-item">
                <span className="bullet"></span>
                <div>
                  <strong>Quality Assurance:</strong> Strict quality checks for export standards
                </div>
              </li>
            </ul>

            <div className="additional-info">
              <p className="info-line">
                <strong>Minimum Order Quantity:</strong> Contact us for MOQ details
              </p>
              <p className="info-line">
                <strong>Sample Orders:</strong> Available upon request
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Get In Touch</h3>
            <p className="form-description">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="contact-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="United States"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Product Interest</label>
                <select
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a product category</option>
                  {productCategories.map((category, idx) => (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input form-textarea"
                  placeholder="Tell us about your requirements, order quantity, and any specific details..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="submit-button"
              >
                <Send className="button-icon" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="wholesale-info">
          <h3 className="wholesale-title">For Wholesale Inquiries</h3>
          <p className="wholesale-text">
            If you're interested in establishing a wholesale partnership or placing bulk orders, 
            please provide details about your business and requirements in the message form above. 
            Our export team will contact you with pricing, MOQ (Minimum Order Quantity), shipping 
            options, and any other information you need to make an informed decision. We look forward 
            to building a successful business relationship with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
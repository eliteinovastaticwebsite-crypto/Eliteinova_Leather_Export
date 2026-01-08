import React, { useState } from 'react';
import './PrivacyTerms.css';

const PrivacyTerms = () => {
  const [activeSection, setActiveSection] = useState('privacy');

  return (
    <div className="privacy-terms-page">
      {/* Single Hero Banner - Not a slider */}
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <h1 className="privacy-hero-title">
            Privacy Policy & Terms
          </h1>
          <p className="privacy-hero-subtitle">
            Transparency and trust are our top priorities
          </p>
        </div>
      </div>

      {/* Section Header with Tabs - Like Collections Section */}
      <div className="collections-section">
        <div className="section-header">
          <h2 className="section-title">Legal Documents</h2>
          <div className="title-underline"></div>
          <p className="section-text" style={{color: '#6b7280', maxWidth: '600px', margin: '0 auto'}}>
            Review our policies to understand how we protect your information and ensure a secure shopping experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <button
            className={`tab-button ${activeSection === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveSection('privacy')}
          >
            <span className="tab-icon">🔒</span>
            Privacy Policy
          </button>
          <button
            className={`tab-button ${activeSection === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveSection('terms')}
          >
            <span className="tab-icon">📜</span>
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="content-container">
        {/* Privacy Policy Section */}
        {activeSection === 'privacy' && (
          <div className="content-section" id="privacy-policy">
            <h2 className="section-main-title">
              <span className="title-icon">🔒</span>
              Privacy Policy
            </h2>
            <p className="last-updated">Last Updated: December 2024</p>

            <div className="policy-content">
              {/* Collections Grid Style for Info Types */}
              <section className="policy-section">
                <h3 className="section-title">Information We Collect</h3>
                <div className="collections-grid">
                  <div className="collection-card">
                    <div className="collection-image">
                      <div className="collection-icon-wrapper">
                        <div className="info-icon">👤</div>
                      </div>
                    </div>
                    <h4 className="collection-name">Personal Information</h4>
                    <div className="collection-count">
                      <ul style={{textAlign: 'center', listStyle: 'none', padding: 0}}>
                        <li>Name & Contact Details</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Shipping Address</li>
                      </ul>
                    </div>
                  </div>

                  <div className="collection-card">
                    <div className="collection-image">
                      <div className="collection-icon-wrapper">
                        <div className="info-icon">💳</div>
                      </div>
                    </div>
                    <h4 className="collection-name">Transaction Information</h4>
                    <div className="collection-count">
                      <ul style={{textAlign: 'center', listStyle: 'none', padding: 0}}>
                        <li>Purchase History</li>
                        <li>Payment Information</li>
                        <li>Order Details</li>
                        <li>Delivery Preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div className="collection-card">
                    <div className="collection-image">
                      <div className="collection-icon-wrapper">
                        <div className="info-icon">🌐</div>
                      </div>
                    </div>
                    <h4 className="collection-name">Technical Information</h4>
                    <div className="collection-count">
                      <ul style={{textAlign: 'center', listStyle: 'none', padding: 0}}>
                        <li>IP Address</li>
                        <li>Browser Type</li>
                        <li>Device Information</li>
                        <li>Usage Analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Preview Style for Usage Section */}
              <section className="policy-section about-preview">
                <div className="about-content">
                  <div className="about-text">
                    <h3 className="about-title">How We Use Your Information</h3>
                    <p className="about-description">
                      We use your personal information to provide and improve our services, process your orders, 
                      communicate with you about products and promotions, and ensure the security of your account.
                    </p>
                    <p className="about-description">
                      Your data helps us personalize your shopping experience, recommend products you might like, 
                      and improve our website functionality based on user preferences and behavior patterns.
                    </p>
                    <button className="cta-button" onClick={() => setActiveSection('terms')}>
                      Read Terms & Conditions
                    </button>
                  </div>
                  <div className="about-image">
                    <div className="about-image-placeholder">
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #f5e6d3 0%, #ffedd5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem'
                      }}>
                        🔐
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Feature Section Style for Security */}
              <section className="policy-section feature-section">
                <div className="feature-content">
                  <div className="feature-image">
                    <div className="feature-image-placeholder">
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fffbeb 0%, #ffedd5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem'
                      }}>
                        🛡️
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">Data Security Measures</h3>
                    <p className="feature-description">
                      We implement industry-standard security measures to protect your personal information 
                      from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="security-info">
                      <div className="security-badge">
                        <span className="badge-icon">🔐</span>
                        <span className="badge-text">SSL Encryption</span>
                      </div>
                      <div className="security-badge">
                        <span className="badge-icon">🛡️</span>
                        <span className="badge-text">Secure Payments</span>
                      </div>
                      <div className="security-badge">
                        <span className="badge-icon">📊</span>
                        <span className="badge-text">Regular Audits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Terms & Conditions Section */}
        {activeSection === 'terms' && (
          <div className="content-section" id="terms-conditions">
            <h2 className="section-main-title">
              <span className="title-icon">📜</span>
              Terms & Conditions
            </h2>
            <p className="last-updated">Last Updated: December 2024</p>

            <div className="terms-content">
              {/* Collections Grid for Payment Methods */}
              <section className="terms-section">
                <h3 className="section-title">Payment Methods</h3>
                <div className="collections-grid">
                  {[
                    { icon: '💳', name: 'Credit/Debit Cards', desc: 'Secure payment processing' },
                    { icon: '🏦', name: 'Net Banking', desc: 'All major banks supported' },
                    { icon: '📱', name: 'UPI Payments', desc: 'Instant payment confirmation' },
                    { icon: '📦', name: 'Cash on Delivery', desc: 'Available for select areas' },
                  ].map((method, index) => (
                    <div key={index} className="collection-card">
                      <div className="collection-image">
                        <div className="collection-icon-wrapper">
                          <div className="info-icon">{method.icon}</div>
                        </div>
                      </div>
                      <h4 className="collection-name">{method.name}</h4>
                      <p className="collection-count">{method.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* About Preview for Shipping Info */}
              <section className="terms-section about-preview">
                <div className="about-content">
                  <div className="about-text">
                    <h3 className="about-title">Shipping & Delivery</h3>
                    <p className="about-description">
                      We offer domestic and international shipping with tracking provided for all orders. 
                      Processing time is 1-2 business days, with delivery typically within 5-7 business days for domestic orders.
                    </p>
                    <p className="about-description">
                      International shipping takes 10-15 business days. Free shipping is available on orders above ₹5000. 
                      Please note that customs duties may apply for international shipments.
                    </p>
                    <button className="cta-button" onClick={() => setActiveSection('privacy')}>
                      View Privacy Policy
                    </button>
                  </div>
                  <div className="about-image">
                    <div className="about-image-placeholder">
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #f5e6d3 0%, #ffedd5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem'
                      }}>
                        🚚
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Feature Section for Return Policy */}
              <section className="terms-section feature-section">
                <div className="feature-content">
                  <div className="feature-image">
                    <div className="feature-image-placeholder">
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fffbeb 0%, #ffedd5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem'
                      }}>
                        🔄
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">Return & Exchange Policy</h3>
                    <p className="feature-description">
                      We offer a 30-day return policy from the date of delivery. Products must be unused, 
                      in original condition with all tags attached, and in original packaging.
                    </p>
                    <div className="security-info">
                      <div className="security-badge">
                        <span className="badge-icon">⏰</span>
                        <span className="badge-text">30-Day Returns</span>
                      </div>
                      <div className="security-badge">
                        <span className="badge-icon">✓</span>
                        <span className="badge-text">Full Refund</span>
                      </div>
                      <div className="security-badge">
                        <span className="badge-icon">📦</span>
                        <span className="badge-text">Easy Process</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyTerms;
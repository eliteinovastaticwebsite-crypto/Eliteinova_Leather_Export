import React, { useState } from 'react';
import { Send, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    state: '',
    district: '',
    pincode: '',
    productInterest: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const locationData = {
  'India': ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi'],
  'United States': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  'Canada': ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
  'Australia': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'],
  'China': ['Guangdong', 'Shandong', 'Henan', 'Sichuan', 'Jiangsu', 'Hebei', 'Hunan', 'Anhui', 'Hubei', 'Zhejiang', 'Beijing', 'Shanghai', 'Tianjin', 'Chongqing'],
  'Brazil': ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Rio Grande do Sul', 'Pernambuco', 'Ceará', 'Pará', 'Santa Catarina'],
  'Germany': ['Bavaria', 'North Rhine-Westphalia', 'Baden-Württemberg', 'Lower Saxony', 'Hesse', 'Saxony', 'Rhineland-Palatinate', 'Berlin', 'Hamburg', 'Schleswig-Holstein'],
  'France': ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Provence-Alpes-Côte d\'Azur', 'Nouvelle-Aquitaine', 'Occitanie', 'Hauts-de-France', 'Normandy', 'Brittany', 'Grand Est', 'Pays de la Loire'],
  'Japan': ['Tokyo', 'Osaka', 'Kanagawa', 'Aichi', 'Hokkaido', 'Fukuoka', 'Hyogo', 'Saitama', 'Chiba', 'Kyoto'],
  'Mexico': ['Mexico City', 'Jalisco', 'Nuevo León', 'Puebla', 'Guanajuato', 'Chihuahua', 'Veracruz', 'Baja California', 'Tamaulipas', 'Sinaloa'],
  'Italy': ['Lazio', 'Lombardy', 'Campania', 'Sicily', 'Veneto', 'Piedmont', 'Emilia-Romagna', 'Apulia', 'Tuscany', 'Liguria'],
  'Spain': ['Madrid', 'Catalonia', 'Andalusia', 'Valencia', 'Basque Country', 'Galicia', 'Castile and León', 'Canary Islands', 'Aragon', 'Murcia'],
  'South Korea': ['Seoul', 'Busan', 'Gyeonggi', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan', 'Gangwon', 'North Gyeongsang'],
  'Russia': ['Moscow', 'Saint Petersburg', 'Moscow Oblast', 'Sverdlovsk Oblast', 'Krasnodar Krai', 'Tatarstan', 'Chelyabinsk Oblast', 'Novosibirsk Oblast', 'Samara Oblast', 'Rostov Oblast'],
  'Argentina': ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Salta', 'Entre Ríos', 'Chaco', 'Misiones', 'Neuquén'],
  'Nigeria': ['Lagos', 'Kano', 'Kaduna', 'Rivers', 'Oyo', 'Abuja', 'Anambra', 'Enugu', 'Ogun', 'Delta'],
  'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Qalyubia', 'Sharqia', 'Dakahlia', 'Beheira', 'Asyut', 'Monufia', 'Gharbia'],
  'South Africa': ['Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Mpumalanga', 'North West', 'Free State', 'Northern Cape'],
  'Indonesia': ['Java', 'Sumatra', 'Kalimantan', 'Sulawesi', 'Bali', 'West Java', 'East Java', 'Central Java', 'North Sumatra'],
  'Pakistan': ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Islamabad'],
  'Bangladesh': ['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Sylhet', 'Barisal', 'Rangpur', 'Mymensingh'],
  'Turkey': ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Kocaeli', 'Mersin'],
  'Iran': ['Tehran', 'Khorasan Razavi', 'Isfahan', 'Fars', 'Khuzestan', 'Mazandaran', 'East Azerbaijan', 'Kerman', 'Gilan'],
  'Saudi Arabia': ['Riyadh', 'Makkah', 'Eastern Province', 'Madinah', 'Asir', 'Qassim', 'Tabuk', 'Ha\'il', 'Jizan'],
  'Thailand': ['Bangkok', 'Chiang Mai', 'Nakhon Ratchasima', 'Chon Buri', 'Songkhla', 'Khon Kaen', 'Nonthaburi', 'Udon Thani', 'Rayong', 'Phuket'],
  'Philippines': ['Metro Manila', 'Cebu', 'Davao', 'Cavite', 'Bulacan', 'Laguna', 'Rizal', 'Pampanga', 'Iloilo', 'Batangas'],
  'Vietnam': ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hai Phong', 'Can Tho', 'Binh Duong', 'Dong Nai', 'Khanh Hoa', 'Thanh Hoa', 'Thua Thien Hue'],
  'Malaysia': ['Selangor', 'Johor', 'Kuala Lumpur', 'Penang', 'Perak', 'Sabah', 'Sarawak', 'Pahang', 'Kedah', 'Negeri Sembilan'],
  'Singapore': ['Singapore'],
  'New Zealand': ['Auckland', 'Wellington', 'Canterbury', 'Waikato', 'Otago', 'Bay of Plenty', 'Manawatu-Wanganui', 'Hawke\'s Bay', 'Northland', 'Taranaki'],
  'Poland': ['Masovian', 'Lesser Poland', 'Silesian', 'Greater Poland', 'Lower Silesian', 'Pomeranian', 'Łódź', 'West Pomeranian', 'Lublin', 'Kuyavian-Pomeranian'],
  'Netherlands': ['North Holland', 'South Holland', 'North Brabant', 'Utrecht', 'Gelderland', 'Limburg', 'Overijssel', 'Groningen', 'Flevoland', 'Friesland'],
  'Belgium': ['Flemish Brabant', 'Antwerp', 'East Flanders', 'West Flanders', 'Liège', 'Hainaut', 'Brussels', 'Walloon Brabant', 'Namur', 'Limburg'],
  'Sweden': ['Stockholm', 'Västra Götaland', 'Skåne', 'Uppsala', 'Östergötland', 'Gävleborg', 'Jönköping', 'Halland', 'Västmanland', 'Örebro'],
  'Norway': ['Oslo', 'Viken', 'Vestland', 'Rogaland', 'Trøndelag', 'Innlandet', 'Vestfold og Telemark', 'Agder', 'Nordland', 'Troms og Finnmark'],
  'Denmark': ['Capital Region', 'Central Denmark', 'Southern Denmark', 'Zealand', 'North Denmark'],
  'Finland': ['Uusimaa', 'Pirkanmaa', 'Southwest Finland', 'North Ostrobothnia', 'Central Finland', 'Päijänne Tavastia', 'Kymenlaakso', 'Lapland', 'Kanta-Häme', 'Satakunta'],
  'Greece': ['Attica', 'Central Macedonia', 'Crete', 'Western Greece', 'Thessaly', 'Peloponnese', 'Epirus', 'Central Greece', 'South Aegean', 'Eastern Macedonia and Thrace'],
  'Portugal': ['Lisbon', 'Porto', 'Setúbal', 'Faro', 'Braga', 'Aveiro', 'Coimbra', 'Leiria', 'Viseu', 'Azores'],
  'Chile': ['Santiago Metropolitan', 'Valparaíso', 'Biobío', 'Araucanía', 'Maule', 'O\'Higgins', 'Los Lagos', 'Antofagasta', 'Coquimbo', 'Tarapacá'],
  'Colombia': ['Bogotá', 'Antioquia', 'Valle del Cauca', 'Atlántico', 'Santander', 'Bolívar', 'Cundinamarca', 'Norte de Santander', 'Tolima', 'Risaralda'],
  'Peru': ['Lima', 'Arequipa', 'La Libertad', 'Piura', 'Lambayeque', 'Cusco', 'Junín', 'Loreto', 'Puno', 'Cajamarca'],
  'Kenya': ['Nairobi', 'Mombasa', 'Nakuru', 'Kiambu', 'Machakos', 'Kisumu', 'Uasin Gishu', 'Nyeri', 'Meru', 'Kajiado'],
  'Ghana': ['Greater Accra', 'Ashanti', 'Western', 'Eastern', 'Northern', 'Central', 'Volta', 'Brong-Ahafo', 'Upper East', 'Upper West'],
  'Morocco': ['Casablanca-Settat', 'Rabat-Salé-Kénitra', 'Fès-Meknès', 'Marrakesh-Safi', 'Tangier-Tétouan-Al Hoceïma', 'Souss-Massa', 'Oriental', 'Béni Mellal-Khénifra', 'Drâa-Tafilalet', 'Laâyoune-Sakia El Hamra'],
  'Algeria': ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Sétif', 'Sidi Bel Abbès', 'Biskra', 'Tébessa'],
  'Ethiopia': ['Addis Ababa', 'Oromia', 'Amhara', 'Tigray', 'Southern Nations', 'Somali', 'Dire Dawa', 'Harari', 'Afar', 'Benishangul-Gumuz']
  };

  const productCategories = [
    'Shoes',
    'Casual Shoes',
    'Boots',

    
    'Formal Shoes',
    'Women Handbags',
    'Sling Bags',
    'Small Crossbody Bags',
    'Trolley Bags',
    'Duffle Bags',
    'Leather Travel Bags',
    'Men\'s Backpacks',
    'Women\'s Backpacks',
    'Men\'s Wallet',
    'Passport Holder',
    'Belt'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      if (name === 'country') {
        newData.state = '';
      }
      
      return newData;
    });
  };

  const handleProductToggle = (product) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.includes(product)
        ? prev.productInterest.filter(p => p !== product)
        : [...prev.productInterest, product]
    }));
  };

  const removeProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.filter(p => p !== product)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form data:', formData);

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        state: '',
        district: '',
        pincode: '',
        productInterest: [],
        message: ''
      });

      setCurrentStep(0);
      setIsSubmitting(false);

      if (onClose) onClose();
    }, 1500);
  };

  const getStates = () => {
    return formData.country && locationData[formData.country] 
      ? locationData[formData.country] 
      : [];
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Personal Information</h3>
            <p className="form-section-description">Tell us about yourself</p>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Location Details</h3>
            <p className="form-section-description">Where are you located?</p>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="country" className="form-label">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select Country</option>
                  {Object.keys(locationData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="state" className="form-label">State / Province</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!formData.country}
                  className="form-input"
                >
                  <option value="">Select State</option>
                  {getStates().map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="district" className="form-label">District / Region</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter district"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode" className="form-label">Pincode / ZIP Code</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Product Selection</h3>
            <p className="form-section-description">Select products you're interested in</p>
            
            <div className="product-selection-wrapper">
              <div className="product-select-container">
                <div className="product-checkbox-list">
                  {productCategories.map((product) => (
                    <label
                      key={product}
                      className="product-checkbox-label"
                    >
                      <input
                        type="checkbox"
                        checked={formData.productInterest.includes(product)}
                        onChange={() => handleProductToggle(product)}
                        className="product-checkbox"
                      />
                      <span className="product-checkbox-text">{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.productInterest.length > 0 && (
                <div className="selected-products-section">
                  <p className="selected-products-label">Selected Products:</p>
                  <div className="selected-products-tags">
                    {formData.productInterest.map((product) => (
                      <span key={product} className="product-tag">
                        {product}
                        <button
                          type="button"
                          onClick={() => removeProduct(product)}
                          className="product-tag-remove"
                          aria-label={`Remove ${product}`}
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-section">
            <h3 className="form-section-title">Message & Review</h3>
            <p className="form-section-description">Share your requirements and review your submission</p>
            
            <div className="message-review-container">
              <div className="message-section">
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Tell us about your requirements, order quantity, and environment."
                  />
                  {!formData.message && (
                    <span className="field-hint">Please fill in this field.</span>
                  )}
                </div>
              </div>

              <div className="review-section">
                <h4 className="review-title">Review Your Information</h4>
                <div className="review-info">
                  <div className="review-item">
                    <span className="review-label">Name:</span>
                    <span className="review-value">{formData.name || 'Not provided'}</span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Email:</span>
                    <span className="review-value">{formData.email || 'Not provided'}</span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Location:</span>
                    <span className="review-value">
                      {[formData.country, formData.state, formData.district]
                        .filter(Boolean)
                        .join(', ') || 'Not provided'}
                    </span>
                  </div>
                  
                  <div className="review-item">
                    <span className="review-label">Products:</span>
                    <span className="review-value">
                      {formData.productInterest.length > 0 
                        ? formData.productInterest.join(', ')
                        : 'None selected'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-content">
        {/* Left Column - Contact Info */}
        <div className="contact-info-column">
          <div className="contact-info-inner">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            {/* Step Indicator */}
            <div className="step-indicator">
              <div className="step-indicator-title">Form Progress</div>
              {['Personal Info', 'Location', 'Products', 'Message'].map((step, index) => (
                <div 
                  key={index} 
                  className={`step-indicator-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form with Slider */}
        <div className="contact-form-column">
          {submitted ? (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <>
              {/* Progress Dots */}
              <div className="form-progress">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={`progress-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                    onClick={() => setCurrentStep(index)}
                    title={`Step ${index + 1}`}
                  />
                ))}
              </div>

              {/* Form Content */}
              <div className="form-section-slider">
                {renderStepContent()}
              </div>

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="nav-button prev"
                  >
                    <ChevronLeft size={18} />
                    <span>Previous</span>
                  </button>
                )}
                
                <div className="nav-spacer"></div>
                
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="nav-button next"
                  >
                    <span>Next</span>
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="nav-button submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Form'}</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
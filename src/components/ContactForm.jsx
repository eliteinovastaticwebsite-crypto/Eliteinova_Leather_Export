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
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4; // Personal Info, Location, Products, Message

  // Expanded Location data (keep your existing locationData)
  const locationData = {
    India: {
      'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'],
      'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'],
      'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
      'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'],
      'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg'],
      'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'],
      'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
      'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Karnal'],
      'Himachal Pradesh': ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Kullu'],
      'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
      'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum'],
      'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
      'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
      'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
      'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'],
      'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongstoin'],
      'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
      'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha'],
      'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur'],
      'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
      'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'],
      'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
      'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
      'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar'],
      'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut'],
      'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Nainital', 'Mussoorie'],
      'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol']
    },
    'United States': {
      'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'],
      'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan'],
      'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'],
      'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
      'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
      'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'],
      'Connecticut': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'],
      'Delaware': ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'],
      'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
      'Georgia': ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens'],
      'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu'],
      'Idaho': ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello'],
      'Illinois': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford'],
      'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'],
      'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City'],
      'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe'],
      'Kentucky': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'],
      'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
      'Maine': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'],
      'Maryland': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie'],
      'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'],
      'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor'],
      'Minnesota': ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
      'Mississippi': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
      'Missouri': ['Kansas City', 'Saint Louis', 'Springfield', 'Columbia', 'Independence'],
      'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
      'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'],
      'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'],
      'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover'],
      'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison'],
      'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
      'New York': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
      'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
      'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'],
      'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
      'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton'],
      'Oregon': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro'],
      'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'],
      'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
      'South Carolina': ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Rock Hill'],
      'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown'],
      'Tennessee': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
      'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
      'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'],
      'Vermont': ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier'],
      'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News'],
      'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
      'West Virginia': ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'],
      'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine'],
      'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs']
    },
    'United Kingdom': {
      'England': ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
      'Scotland': ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness'],
      'Wales': ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Barry'],
      'Northern Ireland': ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Armagh']
    },
    'Canada': {
      'Alberta': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray'],
      'British Columbia': ['Vancouver', 'Victoria', 'Kelowna', 'Abbotsford', 'Nanaimo'],
      'Manitoba': ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'],
      'New Brunswick': ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi'],
      'Newfoundland and Labrador': ['St. Johns', 'Mount Pearl', 'Corner Brook', 'Conception Bay South'],
      'Nova Scotia': ['Halifax', 'Sydney', 'Dartmouth', 'Truro', 'New Glasgow'],
      'Ontario': ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London'],
      'Prince Edward Island': ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall'],
      'Quebec': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil'],
      'Saskatchewan': ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current']
    },
    'Australia': {
      'New South Wales': ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Maitland'],
      'Victoria': ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton'],
      'Queensland': ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns', 'Toowoomba'],
      'Western Australia': ['Perth', 'Mandurah', 'Bunbury', 'Albany', 'Kalgoorlie'],
      'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge'],
      'Tasmania': ['Hobart', 'Launceston', 'Devonport', 'Burnie'],
      'Northern Territory': ['Darwin', 'Alice Springs', 'Palmerston', 'Katherine'],
      'Australian Capital Territory': ['Canberra']
    }
  };

  // Updated product categories to match your screenshots
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
        newData.district = '';
      } else if (name === 'state') {
        newData.district = '';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        if (onClose) onClose();
      }, 3000);
    }
  };

  const getStates = () => {
    return formData.country && locationData[formData.country] 
      ? Object.keys(locationData[formData.country]) 
      : [];
  };

  const getDistricts = () => {
    return formData.country && formData.state && locationData[formData.country]?.[formData.state]
      ? locationData[formData.country][formData.state]
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
      case 0: // Personal Information
        return (
          <div className="form-section">
            <h3 className="form-section-title">Personal Information</h3>
            <p className="form-section-description">Tell us about yourself</p>
            
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

            <div className="form-row">
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
            </div>
          </div>
        );

      case 1: // Location Details
        return (
          <div className="form-section">
            <h3 className="form-section-title">Location Details</h3>
            <p className="form-section-description">Where are you located?</p>
            
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state" className="form-label">State</label>
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
                <label htmlFor="district" className="form-label">District</label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  disabled={!formData.state}
                  className="form-input"
                >
                  <option value="">Select District</option>
                  {getDistricts().map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pincode" className="form-label">Pincode</label>
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
        );

      case 2: // Product Interest
        return (
          <div className="form-section">
            <h3 className="form-section-title">Product Interest</h3>
            <p className="form-section-description">Select products you're interested in (Multiple)</p>
            
            <div className="product-select-container">
              <div className="product-checkbox-grid">
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

              {formData.productInterest.length > 0 && (
                <div className="selected-products-container">
                  <p className="selected-products-label">Selected Products:</p>
                  <div className="selected-products-tags">
                    {formData.productInterest.map((product) => (
                      <span key={product} className="product-tag">
                        {product}
                        <button
                          type="button"
                          onClick={() => removeProduct(product)}
                          className="product-tag-remove"
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

      case 3: // Message & Review
        return (
          <div className="form-section">
            <h3 className="form-section-title">Message & Review</h3>
            <p className="form-section-description">Share your requirements and review your submission</p>
            
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
                placeholder="Tell us about your requirements, order quantity, and any specific details..."
              />
            </div>

            {/* Review Section */}
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
                  <span className="review-label">Products Selected:</span>
                  <span className="review-value">
                    {formData.productInterest.length > 0 
                      ? formData.productInterest.join(', ')
                      : 'None selected'}
                  </span>
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
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
          
          {/* Step Indicator */}
          <div className="step-indicator">
            <div className="step-indicator-title">Progress</div>
            {['Personal Info', 'Location', 'Products', 'Message'].map((step, index) => (
              <div 
                key={index} 
                className={`step-indicator-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
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
                    Previous
                  </button>
                )}
                
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="nav-button next"
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="nav-button submit"
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    <Send size={18} />
                    Submit Form
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
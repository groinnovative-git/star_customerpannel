import { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './LeadPopup.css';

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('leadPopupShown');

    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsRendered(true);
        // Small delay to trigger animation
        setTimeout(() => setIsVisible(true), 50);
        sessionStorage.setItem('leadPopupShown', 'true');
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => setIsRendered(false), 400);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'lead-popup-overlay') {
      closePopup();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you! Our team will contact you shortly.');
    closePopup();
  };

  if (!isRendered) return null;

  return (
    <div 
      className={`lead-popup-overlay ${isVisible ? 'active' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className={`lead-popup-content ${isVisible ? 'active' : ''}`}>
        <button className="lead-popup-close" onClick={closePopup} aria-label="Close popup">
          <FaTimes />
        </button>

        <div className="lead-popup-body">
          <div className="lead-popup-header">
            <h2 className="lead-popup-title">Ready to Take the Next Step?</h2>
            <p className="lead-popup-subtitle">
              Enter your details below and our property experts will reach out to you within 24 hours to help find your dream home.
            </p>
          </div>

          <form className="lead-popup-form" onSubmit={handleSubmit}>
            <div className="lead-popup-input-group">
              <span className="lead-popup-input-icon"><FaUser /></span>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                className="lead-popup-input"
              />
            </div>

            <div className="lead-popup-input-row">
              <div className="lead-popup-phone-group">
                <select className="lead-popup-country-select">
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <div className="lead-popup-input-group phone-input">
                  <span className="lead-popup-input-icon"><FaPhoneAlt /></span>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    required 
                    className="lead-popup-input"
                  />
                </div>
              </div>
            </div>

            <div className="lead-popup-input-group">
              <span className="lead-popup-input-icon"><FaEnvelope /></span>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="lead-popup-input"
              />
            </div>

            <button type="submit" className="lead-popup-submit">
              SUBMIT
            </button>
          </form>
          
          <p className="lead-popup-footer">
            By submitting, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;

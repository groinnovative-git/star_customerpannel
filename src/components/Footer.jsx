import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { logo } from '../assets/index';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Column 1 – Logo & Tagline */}
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Star Properties & Realty" className="footer__logo-img" />
              <span>Star Properties & Realty</span>
            </Link>
            <p className="footer__tagline">
              Your trusted partner in finding the perfect property. 
              We deliver premium real estate solutions across Coimbatore.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="footer__social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Properties</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 – Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__list">
              <li><a href="#">Property Management</a></li>
              <li><a href="#">Rent a Property</a></li>
              <li><a href="#">Sell a Property</a></li>
              <li><a href="#">Loan Assistance</a></li>
            </ul>
          </div>

          {/* Column 4 – Contact Us */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__list footer__contact-list">
              <li>
                <span className="footer__contact-icon"><FaMapMarkerAlt /></span>
                <span>123 Luxury Way, Suite 500, Coimbatore, TN 641039</span>
              </li>
              <li>
                <span className="footer__contact-icon"><FaPhoneAlt /></span>
                <span>+91 12345 64893</span>
              </li>
              <li>
                <span className="footer__contact-icon"><FaEnvelope /></span>
                <span>info@starproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Star Properties & Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

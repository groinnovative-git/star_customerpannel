import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { logo } from '../assets/index';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Service' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar__inner container">
        {/* LEFT — Logo + Brand */}
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          <img src={logo} alt="Star Properties & Realty" className="navbar__logo-img" />
          <span className="navbar__logo-text">Star Properties & Realty</span>
        </Link>

        {/* RIGHT — Nav Links + Contact Button */}
        <div className={`navbar__right ${menuOpen ? 'navbar__right--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="navbar__contact-btn" onClick={handleLinkClick}>
            <FaPhoneAlt style={{ marginRight: '8px', color: '#fff' }} />
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

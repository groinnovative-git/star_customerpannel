import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cityscapeBg from '../assets/cityscape_night_bg.png';
import { HiOutlineHome } from 'react-icons/hi2';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav && nav.type === 'reload') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div
      className="nf-page"
      style={{
        backgroundImage: `linear-gradient(rgba(8,14,18,0.88), rgba(8,14,18,0.96)), url(${cityscapeBg})`,
      }}
    >
      <div className="nf-inner">
        <div className="nf-badge">404</div>

        <div className="nf-divider" />

        <h1 className="nf-heading">Page Not Found</h1>
        <p className="nf-desc">
          The page you're looking for doesn't exist or has been moved.<br />
          Let's get you back on track.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            <HiOutlineHome />
            Back to Home
          </Link>
        </div>

        <p className="nf-brand">Star Properties &amp; Realty</p>
      </div>
    </div>
  );
}

export default NotFound;

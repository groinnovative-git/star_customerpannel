import { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowUp, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import './FloatingActions.css';

const WHATSAPP_NUMBER = '919345306018';
const WHATSAPP_MSG = encodeURIComponent("Hello, I'm interested in your properties. Please share more details.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-menu">
      <div className="floating-menu__actions">
        {/* YouTube - Red */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-menu__btn floating-menu__btn--youtube"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        {/* WhatsApp - Green */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-menu__btn floating-menu__btn--whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Phone Call - Blue */}
        <a
          href="tel:+911234564893"
          className="floating-menu__btn floating-menu__btn--phone"
          aria-label="Phone Call"
        >
          <FaPhoneAlt />
        </a>

        <button
          className={`floating-menu__btn floating-menu__btn--top ${showTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

export default FloatingActions;

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './FloatingActions.css';

const WHATSAPP_NUMBER = '919345306018';
const WHATSAPP_MSG = encodeURIComponent("Hello, I'm interested in your properties. Please share more details.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-actions__btn floating-actions__btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <button
        className={`floating-actions__btn floating-actions__btn--top ${visible ? 'floating-actions__btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default FloatingActions;

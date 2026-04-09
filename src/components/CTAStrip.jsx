import { Link } from 'react-router-dom';
import { FaHeadset, FaArrowRight } from 'react-icons/fa';
import './CTAStrip.css';

function CTAStrip() {
  return (
    <section className="cta-redesign" id="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card__content">
            <div className="cta-card__icon-wrap">
              <FaHeadset className="cta-card__icon" />
            </div>
            <div className="cta-card__text">
              <h2 className="cta-card__title">Get Expert Property Consultation</h2>
              <p className="cta-card__subtitle">
                Planning your next big move? Our specialists are here to guide you with professional advice tailored to your goals.
              </p>
            </div>
          </div>
          <div className="cta-card__action">
            <Link to="/contact" className="cta-card__btn">
              Let's Talk
              <FaArrowRight className="cta-card__btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAStrip;


import { Link } from 'react-router-dom';
import './CTAStrip.css';

function CTAStrip() {
  return (
    <section className="cta-strip" id="cta-strip">
      <div className="cta-strip__inner container">
        <h3 className="cta-strip__text">Get Property Consultation</h3>
        <Link to="/contact" className="cta-strip__btn">
          Let&rsquo;s Talk <span className="cta-strip__arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export default CTAStrip;

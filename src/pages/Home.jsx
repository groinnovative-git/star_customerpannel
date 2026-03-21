import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHandshake, FaHome, FaBullhorn, FaKey, 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaHandHoldingUsd, FaRegHandshake
} from 'react-icons/fa';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import { promoBanner, sellBanner, prop1, prop2, prop3, prop4, prop5, prop13, prop14, prop15, prop20, prop21 } from '../assets/index';
import './Home.css';

function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Banner slider auto-rotate
  const [bannerSlide, setBannerSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const quickMoveItems = [
    { type: 'Apartment', subtitle: 'for sales', image: prop1 },
    { type: 'Villa', subtitle: 'for sales', image: prop2 },
    { type: 'Private House', subtitle: 'for sales', image: prop3 },
    { type: 'Plot', subtitle: 'for sales', image: prop4 },
    { type: 'Farm Land', subtitle: 'for sales', image: prop5 }
  ];

  const featuredItems = [
    { ...properties[0], image: prop13 },
    { ...properties[1], image: prop14 },
    { ...properties[2], image: prop15 }
  ];

  const assistFeatures = [
    { icon: <FaHandshake />, title: 'With Trusted Loan Support', position: 'top-left' },
    { icon: <FaHome />, title: 'Find Your Ideal Property', position: 'top-right' },
    { icon: <FaKey />, title: 'Seamless Buying & Leasing', position: 'bottom-left' },
    { icon: <FaBullhorn />, title: 'Marketing and promotion for your properties', position: 'bottom-right' }
  ];

  const servicesCards = [
    { 
      title: 'Property Management', 
      desc: 'Realty real estate specialise in property management, with services that cover all aspects of residential and commercial leasing.',
      position: 'left'
    },
    { 
      title: 'Rent a property', 
      desc: 'Living in or using a property by paying money regularly to the owner instead of buying it',
      position: 'center'
    },
    { 
      title: 'Sell a property', 
      desc: 'Transferring ownership of a property to another person in exchange for money',
      position: 'right'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero */}
      <HeroSection
        title="Your Journey to the Perfect Home Starts Here"
        subtitle="Discover premium homes in prime locations"
        showSearch={true}
        showCategories={true}
      />

      {/* 2. QuickMove Properties */}
      <section className="home-quickmove" id="quickmove-section" ref={addRevealRef}>
        <div className="container">
          <h2 className="home-section-heading">QuickMove Properties</h2>
        </div>
        <div className="home-quickmove__carousel">
          <div className="home-quickmove__track">
            {/* Original cards */}
            {quickMoveItems.map((item) => (
              <Link to="/services" key={item.type} className="home-quickmove__card">
                <div className="home-quickmove__img-wrap">
                  <img src={item.image} alt={item.type} className="home-quickmove__img" />
                </div>
                <div className="home-quickmove__info">
                  <h3 className="home-quickmove__title">{item.type}</h3>
                  <p className="home-quickmove__subtitle">{item.subtitle}</p>
                </div>
              </Link>
            ))}
            {/* Duplicate cards for seamless infinite loop */}
            {quickMoveItems.map((item) => (
              <Link to="/services" key={`dup-${item.type}`} className="home-quickmove__card" aria-hidden="true">
                <div className="home-quickmove__img-wrap">
                  <img src={item.image} alt={item.type} className="home-quickmove__img" />
                </div>
                <div className="home-quickmove__info">
                  <h3 className="home-quickmove__title">{item.type}</h3>
                  <p className="home-quickmove__subtitle">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Promotional Banner Slider */}
      <section className="home-promo" id="promo-section" ref={addRevealRef}>
        <div className="container">
          <div className="home-promo__slider">
            {[
              {
                //  heading: <>NEW HOUSE<br />FOR <span className="home-promo__cyan">RENTAL</span></>,
                  //discount: 'UP TO 30% DISCOUNT',
               // desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                image: promoBanner
              },
              {
                heading: <>DREAM HOME<br />FOR <span className="home-promo__cyan">SALE</span></>,
                discount: 'BEST PRICE GUARANTEED',
                desc: 'Find your perfect home with our expert guidance. Premium properties in prime locations across Coimbatore.',
                image: sellBanner
              },
              {
                heading: <>LUXURY VILLA<br />FOR <span className="home-promo__cyan">INVESTMENT</span></>,
                discount: 'HIGH ROI PROPERTIES',
                //  desc: 'Invest in premium real estate with guaranteed returns. Trusted by over 1,200 happy families.',
                image: promoBanner
              }
            ].map((slide, index) => index === bannerSlide && (
              <div
                key={index}
                className="home-promo__banner home-promo__banner--active"
              >
                {/* Full Width Image Banner */}
                <div className="home-promo__right">
                  <img
                    src={slide.image}
                    alt="Banner"
                    className="home-promo__image"
                  />
                </div>
              </div>
            ))}

            {/* Slider dots */}
            <div className="home-promo__slider-dots">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`home-promo__slider-dot ${bannerSlide === i ? 'home-promo__slider-dot--active' : ''}`}
                  onClick={() => setBannerSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Find the Right Buyer — Restored for Clarity */}
      <section className="home-featured" id="featured-section" ref={addRevealRef}>
        <div className="container">
          <h2 className="home-section-heading">Find the Right Buyer Faster</h2>
          <div className="home-featured__grid">
            {featuredItems.map((prop) => (
              <PropertyCard key={prop.id} property={prop} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Assist You — Circular Layout Redesign */}
      <section className="home-assist" id="assist-section" ref={addRevealRef}>
        <div className="container">
          <div
            className="home-assist__bg-wrapper"
            style={{ backgroundImage: `url(${prop20})` }}
          >
            <div className="home-assist__overlay"></div>
            
            <div className="home-assist__content-circular">
              {/* Left Column */}
              <div className="home-assist__side-column">
                {assistFeatures.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className={`home-assist__feature-node home-assist__feature--${feature.position}`}>
                    <div className="home-assist__node-icon">{feature.icon}</div>
                    <h3 className="home-assist__node-title">{feature.title}</h3>
                  </div>
                ))}
              </div>

              {/* Center Column */}
              <div className="home-assist__center-column">
                <div className="home-assist__center-node">
                  <div className="home-assist__globe-overlay">
                    <svg viewBox="0 0 100 100" className="globe-svg">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                      <path d="M50 5A45 45 0 0 1 50 95M50 5A45 45 0 0 0 50 95" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                      <path d="M5 50A45 45 0 0 1 95 50M5 50A45 45 0 0 0 95 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                      <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                      <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <h2 className="home-assist__center-title">How We<br />Assist You</h2>
                </div>
              </div>

              {/* Right Column */}
              <div className="home-assist__side-column">
                {assistFeatures.slice(2, 4).map((feature, idx) => (
                  <div key={idx} className={`home-assist__feature-node home-assist__feature--${feature.position}`}>
                    <div className="home-assist__node-icon">{feature.icon}</div>
                    <h3 className="home-assist__node-title">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services & Team Section — Redesigned with Prop21 */}
      <section className="home-services-new" id="services-cards-section" ref={addRevealRef}>
        <div className="container">
          <div
            className="home-services__bg-wrapper-new"
            style={{ backgroundImage: `url(${prop21})` }}
          >
            <div className="home-services__overlay-new"></div>
            
            <div className="home-services__content-new">
              <div className="home-services__grid-new">
                {servicesCards.map((card) => (
                  <div key={card.title} className={`home-services__card-new home-services__card-new--${card.position}`}>
                    <h3 className="home-services__card-title-new">{card.title}</h3>
                    <p className="home-services__card-desc-new">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Centered Button Below Middle Card */}
              <div className="home-services__btn-wrap-new">
                <Link to="/about" className="home-services__team-btn-new">Meet our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Video Section */}
      <section className="home-video" id="video-section">
        <div className="container">
          <div className="home-video__player">
            <div className="home-video__overlay">
              <button className="home-video__play-btn" aria-label="Play video">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
              </button>
            </div>
            <div className="home-video__controls">
              <button className="home-video__ctrl" aria-label="Previous">⏮</button>
              <button className="home-video__ctrl" aria-label="Play">▶</button>
              <button className="home-video__ctrl" aria-label="Pause">⏸</button>
              <button className="home-video__ctrl" aria-label="Next">⏭</button>
              <div className="home-video__progress"></div>
              <button className="home-video__ctrl" aria-label="Volume">🔊</button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default Home;

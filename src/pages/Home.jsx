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
import { promoBanner, sellBanner, prop1, prop2, prop3, prop4, prop5, prop21 } from '../assets/index';
import './Home.css';

function Home() {
  const revealRefs = useRef([]);
  const featuredCarouselRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const autoScrollRaf = useRef(null);
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  // Mouse drag handlers
  const onCarouselMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragScrollLeft.current = featuredCarouselRef.current.scrollLeft;
    featuredCarouselRef.current.classList.add('is-dragging');
  };

  const onCarouselMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (dragStartX.current - e.pageX) * 1.5;
    featuredCarouselRef.current.scrollLeft = dragScrollLeft.current + walk;
  };

  const stopCarouselDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    featuredCarouselRef.current?.classList.remove('is-dragging');
  };

  // Touch drag handlers (mobile)
  const onTouchStart = (e) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].pageX;
    touchScrollLeft.current = featuredCarouselRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const walk = (touchStartX.current - e.touches[0].pageX) * 1.5;
    featuredCarouselRef.current.scrollLeft = touchScrollLeft.current + walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

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

  // Featured carousel: auto-scroll + seamless infinite loop
  useEffect(() => {
    const el = featuredCarouselRef.current;
    if (!el) return;
    const tick = () => {
      if (!isDragging.current) {
        el.scrollLeft += 1.5;
        // When we've scrolled through the original set, reset seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      autoScrollRaf.current = requestAnimationFrame(tick);
    };
    autoScrollRaf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(autoScrollRaf.current);
  }, []);

  const quickMoveItems = [
    { type: 'Apartment', subtitle: 'for sales', image: prop1 },
    { type: 'Villa', subtitle: 'for sales', image: prop2 },
    { type: 'Private House', subtitle: 'for sales', image: prop3 },
    { type: 'Plot', subtitle: 'for sales', image: prop4 },
    { type: 'Farm Land', subtitle: 'for sales', image: prop5 }
  ];

  // All properties used in the draggable featured carousel

  const serviceItems = [
    { icon: <FaHome />, title: 'Find Your Ideal Property', desc: 'Browse premium listings in prime locations to find the home that matches your lifestyle and budget.' },
    { icon: <FaRegHandshake />, title: 'Buy & Sell Property', desc: 'Expert guidance to get the best market value whether you are buying or selling a property.' },
    { icon: <FaKey />, title: 'Rent & Lease', desc: 'Flexible rental and leasing solutions for residential and commercial properties.' },
    { icon: <FaHandHoldingUsd />, title: 'Property Management', desc: 'Full-service management covering all aspects of residential and commercial leasing.' },
    { icon: <FaHandshake />, title: 'Loan Support', desc: 'Trusted financing guidance to make your property purchase smooth and stress-free.' },
    { icon: <FaBullhorn />, title: 'Marketing & Promotion', desc: 'Strategic marketing to reach the right buyers and maximise your property value.' },
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

      {/* 4. Find the Right Buyer — Auto-scroll + Drag Carousel */}
      <section className="home-featured" id="featured-section" ref={addRevealRef}>
        <div className="container home-featured__container">
          <h2 className="home-section-heading">Find the Right Buyer Faster</h2>
        </div>
        <div
          className="home-featured__carousel"
          ref={featuredCarouselRef}
          onMouseDown={onCarouselMouseDown}
          onMouseMove={onCarouselMouseMove}
          onMouseUp={stopCarouselDrag}
          onMouseLeave={stopCarouselDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="home-featured__track">
            {/* Original set */}
            {properties.map((prop) => (
              <div key={prop.id} className="home-featured__card-wrap">
                <PropertyCard property={prop} variant="grid" />
              </div>
            ))}
            {/* Duplicate set for seamless infinite loop */}
            {properties.map((prop) => (
              <div key={`dup-${prop.id}`} className="home-featured__card-wrap" aria-hidden="true">
                <PropertyCard property={prop} variant="grid" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Assist You — Combined Services Section */}
      <section className="home-services-combined" id="services-combined-section" ref={addRevealRef}>
        <div className="container">
          <div
            className="home-svc-combined__wrapper"
            style={{ backgroundImage: `url(${prop21})` }}
          >
            <div className="home-svc-combined__overlay"></div>
            <div className="home-svc-combined__inner">
              {/* Left Panel */}
              <div className="home-svc-combined__left">
                <p className="home-svc-combined__eyebrow">What We Offer</p>
                <h2 className="home-svc-combined__heading">How We<br />Assist You</h2>
                <p className="home-svc-combined__desc">From finding your dream property to securing financing, our expert team guides you through every step of your real estate journey.</p>
                <Link to="/about" className="home-svc-combined__btn">Meet our team</Link>
              </div>
              {/* Right Grid */}
              <div className="home-svc-combined__grid">
                {serviceItems.map((item) => (
                  <div key={item.title} className="home-svc-combined__card">
                    <div className="home-svc-combined__card-icon">{item.icon}</div>
                    <h3 className="home-svc-combined__card-title">{item.title}</h3>
                    <p className="home-svc-combined__card-desc">{item.desc}</p>
                  </div>
                ))}
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

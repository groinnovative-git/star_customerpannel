import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandshake, FaHome, FaBullhorn, FaKey,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaHandHoldingUsd, FaRegHandshake,
  FaChevronLeft, FaChevronRight,
  FaStar, FaQuoteLeft
} from 'react-icons/fa';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { MdSquareFoot, MdExplore, MdAccountBalance } from 'react-icons/md';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import { promoBanner, sellBanner, prop1, prop2, prop3, prop4, prop5, prop21 } from '../assets/index';
import './Home.css';

function Home() {
  const revealRefs = useRef([]);

  // Featured carousel — controlled slide state
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({ step: 310, perView: 4 });

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      if (w >= 1280)      setSlideConfig({ step: 310, perView: 4 });
      else if (w >= 1024) setSlideConfig({ step: 280, perView: 3 });
      else if (w >= 640)  setSlideConfig({ step: 260, perView: 2 });
      else                setSlideConfig({ step: 260, perView: 1 });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => { setSlideIndex(0); }, [slideConfig.perView]);

  const maxSlide = Math.max(0, properties.length - slideConfig.perView);
  const slidePrev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const slideNext = () => setSlideIndex((i) => Math.min(maxSlide, i + 1));

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

  // All properties used in the draggable featured carousel

  const serviceItems = [
    { icon: <FaHome />, title: 'Find Your Ideal Property', desc: 'Browse premium listings in prime locations to find the home that matches your lifestyle and budget.' },
    { icon: <FaRegHandshake />, title: 'Buy & Sell Property', desc: 'Expert guidance to get the best market value whether you are buying or selling a property.' },
    { icon: <FaKey />, title: 'Rent & Lease', desc: 'Flexible rental and leasing solutions for residential and commercial properties.' },
    { icon: <FaHandHoldingUsd />, title: 'Property Management', desc: 'Full-service management covering all aspects of residential and commercial leasing.' },
    { icon: <FaHandshake />, title: 'Loan Support', desc: 'Trusted financing guidance to make your property purchase smooth and stress-free.' },
    { icon: <FaBullhorn />, title: 'Marketing & Promotion', desc: 'Strategic marketing to reach the right buyers and maximise your property value.' },
  ];

  const reviewItems = [
    {
      name: 'Selvakumar',
      location: 'Coimbatore',
      review: 'Excellent service and transparent dealings. The team made my property buying experience smooth and hassle-free. Highly recommended!',
      rating: 5,
      initials: 'S'
    },
    {
      name: 'Priya',
      location: 'R.S. Puram',
      review: 'Best support from start to registration. They guided us through every step with clear communication and genuine care.',
      rating: 5,
      initials: 'P'
    },
    {
      name: 'Arjun',
      location: 'Peelamedu',
      review: 'Professional team and premium properties. Star Properties helped me find the perfect investment property with great returns.',
      rating: 5,
      initials: 'A'
    },
    {
      name: 'Karthik',
      location: 'Gandhipuram',
      review: 'Very reliable and trustworthy. They helped me sell my property at the best market price within weeks.',
      rating: 5,
      initials: 'K'
    },
    {
      name: 'Meena',
      location: 'Saravanampatti',
      review: 'Amazing property options and friendly team. They understood exactly what I needed and delivered beyond expectations.',
      rating: 5,
      initials: 'M'
    },
    {
      name: 'Rahul',
      location: 'Avinashi Road',
      review: 'Smooth loan assistance and complete documentation support. A one-stop solution for all real estate needs.',
      rating: 5,
      initials: 'R'
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
                heading: <>NEW HOUSE<br />FOR <span className="home-promo__cyan">RENTAL</span></>,
                discount: 'UP TO 30% DISCOUNT',
                desc: 'Premium rental homes in top locations across Coimbatore.',
                image: promoBanner
              },
              {
                heading: <>DREAM HOME<br />FOR <span className="home-promo__cyan">SALE</span></>,
                discount: 'BEST PRICE GUARANTEED',
                desc: 'Find your perfect home with our expert guidance.',
                image: sellBanner
              },
              {
                heading: <>LUXURY VILLA<br />FOR <span className="home-promo__cyan">INVESTMENT</span></>,
                discount: 'HIGH ROI PROPERTIES',
                desc: 'Invest in premium real estate with guaranteed returns.',
                image: promoBanner
              }
            ].map((slide, index) => index === bannerSlide && (
              <div
                key={index}
                className="home-promo__banner home-promo__banner--active"
              >
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

      {/* 4. Find the Right Buyer — Premium Controlled Carousel */}
      <section className="home-featured" id="featured-section" ref={addRevealRef}>
        <div className="container">
          {/* Header row */}
          <div className="home-featured__header">
            <h2 className="home-section-heading">Find the Right Buyer Faster</h2>
            <Link to="/services" className="home-featured__view-all">View All Properties</Link>
          </div>

          {/* Carousel viewport */}
          <div className="home-featured__viewport">
            <div
              className="home-featured__track"
              style={{ transform: `translateX(-${slideIndex * slideConfig.step}px)` }}
            >
              {properties.map((prop) => (
                <div key={prop.id} className="home-featured__card-wrap">
                  <PropertyCard property={prop} variant="grid" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="home-featured__nav">
            <button
              className="home-featured__nav-btn"
              onClick={slidePrev}
              disabled={slideIndex === 0}
              aria-label="Previous properties"
            >
              <FaChevronLeft />
            </button>
<button
              className="home-featured__nav-btn"
              onClick={slideNext}
              disabled={slideIndex >= maxSlide}
              aria-label="Next properties"
            >
              <FaChevronRight />
            </button>
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

      {/* 9. Customer Reviews */}
      <section className="home-reviews" id="reviews-section">
        <div className="container">
          <div className="home-reviews__header">
            <span className="home-reviews__eyebrow">Customer Reviews</span>
            <h2 className="home-section-heading">What Our Clients Say</h2>
          </div>
        </div>
        <div className="home-reviews__carousel">
          <div className="home-reviews__track">
            {reviewItems.map((item) => (
              <div key={item.name} className="home-reviews__card">
                <div className="home-reviews__quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="home-reviews__stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="home-reviews__star" />
                  ))}
                </div>
                <p className="home-reviews__text">"{item.review}"</p>
                <div className="home-reviews__author">
                  <div className="home-reviews__avatar">{item.initials}</div>
                  <div className="home-reviews__author-info">
                    <span className="home-reviews__name">{item.name}</span>
                    <span className="home-reviews__location">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {reviewItems.map((item) => (
              <div key={`dup-${item.name}`} className="home-reviews__card" aria-hidden="true">
                <div className="home-reviews__quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="home-reviews__stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="home-reviews__star" />
                  ))}
                </div>
                <p className="home-reviews__text">"{item.review}"</p>
                <div className="home-reviews__author">
                  <div className="home-reviews__avatar">{item.initials}</div>
                  <div className="home-reviews__author-info">
                    <span className="home-reviews__name">{item.name}</span>
                    <span className="home-reviews__location">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default Home;

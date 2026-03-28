import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { prop16, prop17, prop18 } from '../assets/index';
import cityscapeBg from '../assets/cityscape_night_bg.png';
import teamArjun from '../assets/real_arjun.png';
import {
  HiOutlineGlobeAlt,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineDocumentCheck,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBuildingOffice2,
  HiOutlineTrophy,
  HiOutlineArrowTrendingUp,
  HiOutlineLightBulb
} from 'react-icons/hi2';
import CTAStrip from '../components/CTAStrip';
import './About.css';

function About() {

  /* ── Count-up ──────────────────────────────────────── */
  const statsRef  = useRef(null);
  const animated  = useRef(false);
  const [counts, setCounts] = useState({ sold: 0, clients: 0, years: 0 });

  const animateCount = (to, duration, key) => {
    const start = performance.now();
    const tick  = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const v = Math.floor(to * (1 - Math.pow(1 - p, 3)));
      setCounts((prev) => ({ ...prev, [key]: v }));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        animateCount(1200, 2000, 'sold');
        animateCount(1000, 1800, 'clients');
        animateCount(8,    1400, 'years');
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Data ──────────────────────────────────────────── */
  const whyCards = [
    { icon: <HiOutlineUserGroup />,          title: 'Trusted Guidance',        desc: 'Expert advisors by your side from first inquiry to final handover — every step handled with integrity.' },
    { icon: <HiOutlineDocumentCheck />,      title: 'Verified Properties',     desc: 'Every listing is rigorously verified for legal clarity, documentation accuracy, and ownership status.' },
    { icon: <HiOutlineShieldCheck />,        title: 'Transparent Process',     desc: 'No hidden fees, no surprises. Clear communication and honest pricing at every stage of your deal.' },
    { icon: <HiOutlineMapPin />,             title: 'Local Market Expertise',  desc: 'Deep knowledge of Coimbatore\'s urban, industrial, and agricultural real estate landscape.' },
    { icon: <HiOutlineChatBubbleLeftRight />,title: 'End-to-End Support',      desc: 'From property search and legal liaisoning to loan assistance and registration — we handle everything.' },
  ];

  const milestones = [
    { num: '01', year: '2018', icon: <HiOutlineBuildingOffice2 />, label: 'Company Founded',    desc: 'Launched with a clear mission — to simplify property buying and selling across Coimbatore.' },
    { num: '02', year: '2020', icon: <HiOutlineTrophy />,          label: '100+ Deals Closed',  desc: 'Reached our first milestone helping over 100 families and investors find their ideal property.' },
    { num: '03', year: '2022', icon: <HiOutlineArrowTrendingUp />, label: 'Market Expansion',   desc: 'Extended into commercial, industrial, and agricultural real estate across high-demand zones.' },
    { num: '04', year: '2026+',icon: <HiOutlineLightBulb />,       label: 'Future Vision',      desc: 'Building smarter property solutions and deeper client relationships to lead the next chapter.' },
  ];

  return (
    <div className="about-page">

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${prop16})` }}
      >
        <div className="about-hero__overlay" />
        <div className="about-hero__inner">
          <span className="about-eyebrow about-eyebrow--light">About Us</span>
          <h1 className="about-hero__title">Star Properties &amp; Realty</h1>
          <p className="about-hero__tagline">
            We connect people with the right properties through smart real estate
            marketing. Our focus is building trust, value, and long-term
            relationships with every client.
          </p>
        </div>
      </section>

      {/* ── 2. ABOUT BODY ───────────────────────────────── */}
      <section className="about-body">
        <div className="about-page__container">
          <div className="about-body__header">
            <span className="about-eyebrow">Who We Are</span>
            <h2 className="about-body__title">About Star Properties &amp; Realty</h2>
          </div>
          <div className="about-body__grid">
            <div className="about-body__content">
              <p className="about-body__text">
                Welcome to Star Properties &amp; Realty, your trusted partner for
                comprehensive real estate services, property management, liaisoning, and
                specialized expertise in industrial properties and farm lands in Coimbatore.
                With a focus on property sales, commercial leasing, residential
                developments, and end-to-end management solutions, we are dedicated to
                meeting the diverse needs of property buyers, sellers, and investors.
              </p>
              <p className="about-body__text">
                Whether you're looking for DTCP-approved plots, luxurious villas,
                commercial spaces, industrial properties, or farm lands, Star Properties &amp; Realty
                offers professional services built on transparency, integrity, and genuine
                customer satisfaction.
              </p>
              <Link to="/contact" className="btn-gold">Get in Touch</Link>
            </div>
            <div className="about-body__images">
              <img src={prop18} alt="Premium property" className="about-body__img about-body__img--1" />
              <img src={prop17} alt="Real estate"      className="about-body__img about-body__img--2" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VISION / MISSION / VALUES ────────────────── */}
      <section
        className="about-values"
        style={{
          backgroundImage: `linear-gradient(rgba(8,14,18,0.82), rgba(8,14,18,0.92)), url(${cityscapeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="about-page__container">
          <div className="about-values__header">
            <span className="about-eyebrow about-eyebrow--light">What Drives Us</span>
          </div>
          <div className="about-values__grid">

            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <HiOutlineGlobeAlt />
              </div>
              <h3 className="about-values__card-title">Our Vision</h3>
              <p className="about-values__card-desc">
                To be Coimbatore's leading real estate company, delivering innovative
                solutions across commercial, industrial, and agricultural sectors with
                consistently superior customer experiences.
              </p>
            </div>

            <div className="about-values__card about-values__card--featured">
              <div className="about-values__icon-wrap about-values__icon-wrap--gold">
                <HiOutlineRocketLaunch />
              </div>
              <h3 className="about-values__card-title">Our Mission</h3>
              <p className="about-values__card-desc">
                To offer seamless real estate services — from property transactions and
                management to liaisoning — addressing the diverse needs of urban,
                industrial, and rural property markets with precision.
              </p>
            </div>

            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <HiOutlineShieldCheck />
              </div>
              <h3 className="about-values__card-title">Our Core Values</h3>
              <p className="about-values__card-desc">
                Honesty is our foundation. We ensure clear communication, genuine
                property information, and transparent pricing — building lasting trust
                with every client we serve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY ──────────────────────────────────────── */}
      <section className="about-why">
        <div className="about-page__container">
          <div className="about-why__header">
            <span className="about-eyebrow">Why Choose Us</span>
            <h2 className="about-why__heading">Why We Are the Right Choice</h2>
          </div>
          <div className="about-why__grid">
            {whyCards.map((card, idx) => (
              <div key={card.title} className="about-why__card">
                <div className="about-why__card-top">
                  <div className="about-why__icon">{card.icon}</div>
                  <span className="about-why__num">0{idx + 1}</span>
                </div>
                <h3 className="about-why__card-title">{card.title}</h3>
                <p className="about-why__card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP / CEO ─────────────────────────── */}
      <section className="about-team">
        <div className="about-page__container">
          <div className="about-team__header">
            <span className="about-eyebrow">Leadership</span>
            <h2 className="about-team__heading">Meet the People Behind Our Success</h2>
          </div>
          <div className="about-ceo">
            <div className="about-ceo__img-col">
              <img src={teamArjun} alt="Arjun Raman" className="about-ceo__img" />
              <div className="about-ceo__img-label">
                <span>Founder</span>
                <span>Star Properties &amp; Realty</span>
              </div>
            </div>
            <div className="about-ceo__info">
              <span className="about-ceo__badge">Founder &amp; Managing Director</span>
              <h3 className="about-ceo__name">Arjun Raman</h3>
              <div className="about-ceo__divider"></div>
              <p className="about-ceo__desc">
                With years of experience in real estate marketing, Arjun founded Star Properties &amp; Realty
                with a clear vision — to simplify property buying, selling, and investment across Coimbatore.
                Through deep market knowledge, strong professional networks, and an unwavering commitment
                to client satisfaction, he has grown the company into one of the region's most trusted
                real estate names — helping hundreds of families and investors find the right opportunities.
              </p>
              <blockquote className="about-ceo__quote">
                "Real estate is not just about properties — it is about helping people make the most
                important financial decisions of their lives with confidence and clarity."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR EVOLUTION ────────────────────────────── */}
      <section className="about-evolution">
        <div className="about-page__container">
          <div className="about-evolution__header">
            <span className="about-eyebrow">Our Story</span>
            <h2 className="about-evolution__heading">Our Evolution</h2>
            <p className="about-evolution__sub">
              From a bold vision in 2018 to becoming Coimbatore's most trusted real estate partner.
            </p>
          </div>

          <div className="about-evolution__track">
            {milestones.map((item, idx) => (
              <div key={item.year} className="about-evolution__item">
                <div className="about-evolution__card">
                  <div className="about-evolution__card-top">
                    <span className="about-evolution__num">{item.num}</span>
                    <div className="about-evolution__icon">{item.icon}</div>
                  </div>
                  <span className="about-evolution__year">{item.year}</span>
                  <h4 className="about-evolution__label">{item.label}</h4>
                  <p className="about-evolution__desc">{item.desc}</p>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="about-evolution__connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. STATS ────────────────────────────────────── */}
      <section className="about-stats" ref={statsRef}>
        <div className="about-page__container">
          <div className="about-stats__grid">
            <div className="about-stats__card">
              <span className="about-stats__num">{counts.sold.toLocaleString()}+</span>
              <span className="about-stats__label">Properties Sold</span>
            </div>
            <div className="about-stats__card">
              <span className="about-stats__num">{counts.clients.toLocaleString()}+</span>
              <span className="about-stats__label">Happy Clients</span>
            </div>
            <div className="about-stats__card">
              <span className="about-stats__num">{counts.years}+</span>
              <span className="about-stats__label">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <CTAStrip />

    </div>
  );
}

export default About;

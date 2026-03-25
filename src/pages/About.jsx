import { Link } from 'react-router-dom';
import {
  teamDavid,
  prop16, prop17, prop18, prop19
} from '../assets/index';
import cityscapeBg from '../assets/cityscape_night_bg.png';
import teamArjun from '../assets/real_arjun.png';
import teamSarah from '../assets/real_sarah.png';
import teamMichael from '../assets/real_michael.png';
import teamPriya from '../assets/real_priya.png';
import { HiOutlineHomeModern, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { HiOutlineDocumentText } from 'react-icons/hi';
import CTAStrip from '../components/CTAStrip';
import './About.css';

function About() {
  const teamMembers = [
    {
      name: 'Sarah Lansky',
      role: 'Senior Property Consultant',
      image: teamSarah,
      desc: 'Specialising in luxury residential purchases across the city centre.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      image: teamMichael,
      desc: 'Driving digital strategy to connect sellers with qualified global buyers.'
    },
    {
      name: 'Priya Sharma',
      role: 'Client Relationship Manager',
      image: teamPriya,
      desc: 'Ensuring a seamless journey from first viewing to final handover.'
    },
    {
      name: 'David Wright',
      role: 'Investment Advisor',
      image: teamDavid,
      desc: 'Expert in market analysis and high-yield commercial opportunities.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      icon: '🏢',
      label: 'Company Founded',
      desc: 'Started our journey in real estate marketing with a vision to simplify property buying and selling.'
    },
    {
      year: '2022',
      icon: '📈',
      label: 'Market Expansion',
      desc: 'Expanded our services to multiple high-demand real estate markets across the country.'
    },
    {
      year: '2020',
      icon: '👁️',
      label: '100 Successful Deals',
      desc: 'Reached our first milestone by helping clients buy, sell and over 100 properties.'
    },
    {
      year: '2026 & beyond',
      icon: '🚀',
      label: 'Future Growth',
      desc: 'Continuing to innovate with AI technology and global customer-focused solutions.'
    }
  ];

  return (
    <div className="about-page">

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="about-hero">

        <div className="about-hero__image-wrap">
          <img src={prop16} alt="Modern house" className="about-hero__image" />

          {/* Gradient Overlay */}
          <div className="about-hero__overlay"></div>

          {/* TEXT */}
          <div className="about-hero__content">
            <h1 className="about-hero__title">Star Properties &amp; Realty</h1>
            <p className="about-hero__tagline">
              We connect people with the right properties through smart real estate
              marketing. Our focus is building trust, value, and long-term
              relationships with every client.
            </p>
            {/* <div className="about-hero__actions">
              <button className="btn-primary-hero">Contact Us</button>
              <button className="btn-secondary-hero">Learn More</button>
            </div> */}
          </div>
        </div>

      </section>

      {/* ── 2. ABOUT BODY ───────────────────────────── */}
      <section className="about-body">
        <div className="container">
          <div className="about-body__grid">
            <div className="about-body__content">
              <h2 className="about-body__title">About Star properties&amp; reality</h2>
              <p className="about-body__text">
                Welcome to Star Properties &amp; Realty , your trusted partner for
                comprehensive real estate services, property management, liaisoning, and
                specialized expertise in industrial properties and farm lands in Coimbatore.
                With a focus on property sales, commercial leasing, residential
                developments, and end-to-end management solutions, we are dedicated to
                meeting the diverse needs of property buyers, sellers, and
                investors.Whether you're looking for DTCP-approved plots, luxurious villas,
                commercial spaces, industrial properties, or farm lands, Majestan Realty
                offers professional services with a commitment to transparency, integrity,
                and customer satisfaction.
              </p>
              <Link to="/about" className="btn-gold">Meet our team</Link>
            </div>
            <div className="about-body__images">
              <img src={prop18} alt="Building 1" className="about-body__img about-body__img--1" />
              <img src={prop17} alt="Building 2" className="about-body__img about-body__img--2" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES ───────────────────────────────── */}
      <section
        className="about-values"
        style={{
          backgroundImage: `linear-gradient(rgba(10,15,20,0.7), rgba(10,15,20,0.85)), url(${cityscapeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="about-values__grid">
            <div className="about-values__card">
              <span className="about-values__icon">🔭</span>
              <h3 className="about-values__card-title">our vision</h3>
              <p className="about-values__card-desc">
                To be Coimbatore's leading real estate company, providing innovative
                solutions across commercial, industrial, and agricultural sectors while ensuring
                superior customer experiences.
              </p>
            </div>
            <div className="about-values__card about-values__card--center">
              <span className="about-values__icon">🎯</span>
              <h3 className="about-values__card-title">our mission</h3>
              <p className="about-values__card-desc">
                To offer seamless and comprehensive real estate services, including property
                transactions, management, and liaisoning, while addressing the diverse needs of
                urban, industrial, and rural property markets.
              </p>
            </div>
            <div className="about-values__card">
              <span className="about-values__icon">💎</span>
              <h3 className="about-values__card-title">our core value</h3>
              <p className="about-values__card-desc">
                We believe real estate decisions should be built on honesty. Our team ensures
                clear communication, genuine property information, and transparent pricing for
                every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY ──────────────────────────────────── */}
      <section className="about-why">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>why we are the right choice</h2>
          <div className="about-why__grid">
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineHomeModern /></span>
              <h3>wide range of properties</h3>
              <p>We offer a diverse portfolio including apartments, villas, plots, commercial spaces.</p>
            </div>
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineBuildingOffice2 /></span>
              <h3>prime location</h3>
              <p>Properties in Coimbatore's urban, industrial &amp; rural zones with great potential for growth.</p>
            </div>
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineDocumentText /></span>
              <h3>Comprehensive Services</h3>
              <p>Expertise in property management, liaisoning, and industrial and farmland transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TEAM ─────────────────────────────────── */}
      <section className="about-team">
        <div className="container">
          <h2 className="about-team__heading">Meet the people behind our sucess</h2>

          {/* Founder Card */}
          <div className="about-team__founder">
            <img src={teamArjun} alt="Arjun Raman" className="about-team__founder-img" />
            <div className="about-team__founder-info">
              <span className="about-team__founder-label">LEADERSHIP</span>
              <h3 className="about-team__founder-name">Arjun Raman</h3>
              <p className="about-team__founder-role">Founder &amp; Managing Director</p>
              <p className="about-team__founder-desc">
                With years of experience in real estate marketing, the founder started the
                company with a vision to simplify property buying, selling, and investment.
                Through strong market knowledge and client-focused service, the company
                has helped many customers find the right real estate opportunities.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="about-team__grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="about-team__card">
                <img src={member.image} alt={member.name} className="about-team__avatar" />
                <h4 className="about-team__name">{member.name}</h4>
                <p className="about-team__role">{member.role}</p>
                <p className="about-team__desc">{member.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="about-timeline__grid">
            {timeline.map((item) => (
              <div key={item.year} className="about-timeline__card">
                <div className="about-timeline__icon-wrap">
                  <span className="about-timeline__icon">{item.icon}</span>
                </div>
                <span className="about-timeline__year">{item.year}</span>
                <h4 className="about-timeline__label">{item.label}</h4>
                <p className="about-timeline__desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="about-stats__row">
            <div className="about-stats__box">
              <span className="about-stats__tag">PROPERTIES SOLD</span>
              <span className="about-stats__num">1,200+</span>
            </div>
            <div className="about-stats__box">
              <span className="about-stats__tag">HAPPY CLIENTS</span>
              <span className="about-stats__num">1,000+</span>
            </div>
            <div className="about-stats__box">
              <span className="about-stats__tag">EXPERIENCE</span>
              <span className="about-stats__num">8+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA STRIP ────────────────────────────── */}
      <CTAStrip />
    </div>
  );
}

export default About;

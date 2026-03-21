import { Link } from 'react-router-dom';
import { teamArjun, teamSarah, teamMichael, teamPriya, teamDavid, prop16, prop17, prop18, prop19 } from '../assets/index';
import { HiOutlineHomeModern, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { HiOutlineDocumentText } from 'react-icons/hi';
import CTAStrip from '../components/CTAStrip';
import './About.css';

function About() {
  const teamMembers = [
    { name: 'Sarah Lansky', role: 'Senior Property Consultant', image: teamSarah },
    { name: 'Michael Chen', role: 'Marketing Manager', image: teamMichael },
    { name: 'Priya Sharma', role: 'Client Relationship Manager', image: teamPriya },
    { name: 'David Wright', role: 'Investment Advisor', image: teamDavid }
  ];

  const timeline = [
    { year: '2018', label: 'Company Founded', desc: 'Started with a vision to transform real estate in Coimbatore.' },
    { year: '2020', label: '100 Deals', desc: 'Crossed 100 successful property transactions milestone.' },
    { year: '2022', label: 'Market Expansion', desc: 'Expanded services to nearby cities and commercial properties.' },
    { year: '2026+', label: 'Future Growth', desc: 'Aiming for pan-India presence and digital-first real estate.' }
  ];

  return (
    <div className="about-page">
      {/* 1. Hero */}
      <section className="about-hero" id="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <h1 className="about-hero__title">Star Properties & Realty</h1>
            <p className="about-hero__tagline">
              Building trust, delivering dreams. We are Coimbatore&rsquo;s most
              trusted real estate partner — connecting families with their perfect homes.
            </p>
            <Link to="/contact" className="btn-gold">Get in Touch →</Link>
          </div>
          <div className="about-hero__image-wrap">
            <img
              src={prop16}
              alt="Modern house"
              className="about-hero__image"
            />
          </div>
        </div>
      </section>

      {/* 2. About Body */}
      <section className="about-body" id="about-body">
        <div className="container">
          <div className="about-body__grid">
            <div className="about-body__content">
              <h2 className="section-title">Welcome to Star Properties</h2>
              <p className="about-body__text">
                Founded in 2018, Star Properties & Realty has become one of Coimbatore&rsquo;s
                leading real estate firms. We specialize in premium residential and commercial
                properties, offering end-to-end solutions from property search to key handover.
              </p>
              <p className="about-body__text">
                Our team of experienced professionals is committed to understanding your needs
                and delivering properties that match your lifestyle and investment goals. With
                deep market knowledge and a customer-first approach, we have successfully
                helped over 1,200 families find their dream homes.
              </p>
              <Link to="/about" className="btn-gold">Meet Our Team</Link>
            </div>
            <div className="about-body__images">
              <img src={prop17} alt="Building 1" className="about-body__img about-body__img--1" />
              <img src={prop18} alt="Building 2" className="about-body__img about-body__img--2" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision / Mission / Core Value */}
      <section
        className="about-values"
        id="about-values"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 31, 34, 0.85), rgba(15, 31, 34, 0.9)), url(${prop19})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="about-values__grid">
            <div className="about-values__card">
              <span className="about-values__icon">🔭</span>
              <h3 className="about-values__card-title">Our Vision</h3>
              <p className="about-values__card-desc">
                To be the most trusted real estate brand in India, known for
                transparency, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="about-values__card">
              <span className="about-values__icon">🎯</span>
              <h3 className="about-values__card-title">Our Mission</h3>
              <p className="about-values__card-desc">
                To connect every family with their ideal property through expert
                guidance, fair pricing, and seamless service.
              </p>
            </div>
            <div className="about-values__card">
              <span className="about-values__icon">💎</span>
              <h3 className="about-values__card-title">Core Values</h3>
              <p className="about-values__card-desc">
                Integrity, transparency, innovation, and unwavering commitment
                to our clients&rsquo; real estate dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We Are the Right Choice */}
      <section className="about-why" id="about-why">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Why We Are the Right Choice</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Discover what sets us apart from the rest
          </p>
          <div className="about-why__grid">
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineHomeModern /></span>
              <h3>Wide Range of Properties</h3>
              <p>We offer a diverse portfolio including apartments, villas, plots, commercial spaces.</p>
            </div>
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineBuildingOffice2 /></span>
              <h3>Prime Location</h3>
              <p>Properties in Coimbatore's urban, industrial & rural zones with great potential for growth.</p>
            </div>
            <div className="about-why__card">
              <span className="about-why__icon"><HiOutlineDocumentText /></span>
              <h3>Comprehensive Services</h3>
              <p>Expertise in property management, liaisoning, and industrial and farmland transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section className="about-team" id="about-team">
        <div className="container">
          <span className="about-team__label">Leadership</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Meet the Team</h2>

          {/* Founder Card */}
          <div className="about-team__founder">
            <img
              src={teamArjun}
              alt="Arjun Raman"
              className="about-team__founder-img"
            />
            <div className="about-team__founder-info">
              <h3 className="about-team__founder-name">Arjun Raman</h3>
              <p className="about-team__founder-role">Founder & Managing Director</p>
              <p className="about-team__founder-desc">
                With over 15 years of experience in real estate, Arjun founded
                Star Properties with the vision of making property buying transparent
                and accessible. His deep understanding of the Coimbatore market and
                passion for customer satisfaction have driven the company&rsquo;s rapid growth.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="about-team__grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="about-team__card">
                <img src={member.image} alt={member.name} className="about-team__avatar" />
                <h4 className="about-team__name">{member.name}</h4>
                <p className="about-team__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="about-timeline" id="about-timeline">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Journey</h2>
          <div className="about-timeline__track">
            {timeline.map((item, index) => (
              <div key={item.year} className="about-timeline__item">
                <div className="about-timeline__node">
                  <span className="about-timeline__dot"></span>
                </div>
                <div className="about-timeline__content">
                  <span className="about-timeline__year">{item.year}</span>
                  <h4 className="about-timeline__title">{item.label}</h4>
                  <p className="about-timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="about-timeline__line"></div>
          </div>
        </div>
      </section>

      {/* 7. Stats Bar */}
      <section className="about-stats" id="about-stats">
        <div className="container about-stats__inner">
          <div className="about-stats__item">
            <span className="about-stats__number">1,200+</span>
            <span className="about-stats__label">Properties Sold</span>
          </div>
          <div className="about-stats__divider"></div>
          <div className="about-stats__item">
            <span className="about-stats__number">1,000+</span>
            <span className="about-stats__label">Happy Clients</span>
          </div>
          <div className="about-stats__divider"></div>
          <div className="about-stats__item">
            <span className="about-stats__number">8+</span>
            <span className="about-stats__label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* 8. CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default About;

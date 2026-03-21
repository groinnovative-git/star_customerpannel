import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAStrip from '../components/CTAStrip';
import { heroBg, prop4 } from '../assets/index';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert('Message sent successfully! Our team will reach out shortly.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Hero */}
      <section
        className="contact-hero"
        id="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 31, 34, 0.75), rgba(15, 31, 34, 0.85)), url(${heroBg})`
        }}
      >
        <div className="container contact-hero__content">
          <h1 className="contact-hero__title">
            Contact Our <span className="contact-hero__highlight">Real Estate Marketing</span> Experts
          </h1>
          <p className="contact-hero__subtitle">
            Get personalized guidance from our experienced team of real estate professionals
          </p>
        </div>
      </section>

      {/* Two-Column Form Section */}
      <section className="contact-form-section" id="contact-form-section">
        <div className="container contact-form-section__inner">
          <div className="contact-form-section__image-wrap">
            <img
              src={prop4}
              alt="Professional meeting"
              className="contact-form-section__image"
            />
          </div>

          <div className="contact-form-card">
            <h2 className="contact-form-card__title">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-card__group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="contact-form-card__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
              </div>
              <div className="contact-form-card__group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="contact-form-card__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                />
              </div>
              <div className="contact-form-card__group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="contact-form-card__input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  id="contact-phone"
                />
              </div>
              <div className="contact-form-card__group">
                <select
                  name="interest"
                  className="contact-form-card__select"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  id="contact-interest"
                >
                  <option value="">I am interested in</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div className="contact-form-card__group">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-form-card__textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  id="contact-message"
                ></textarea>
              </div>
              <button type="submit" className="btn-teal contact-form-card__btn" id="contact-submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info" id="contact-info">
        <div className="container contact-info__inner">
          <div className="contact-info__left">
            <h2 className="contact-info__title">
              Delivering the finest and most reliable real estate solutions
            </h2>
            <p className="contact-info__subtitle">
              Connecting you with the right property solutions, every step of the way
            </p>
            <ul className="contact-info__list">
              <li>
                <span className="contact-info__icon">📍</span>
                <span>123 Luxury Way, Suite 500, Coimbatore, TN 641039</span>
              </li>
              <li>
                <span className="contact-info__icon">📞</span>
                <span>+91 12345 64893 10</span>
              </li>
              <li>
                <span className="contact-info__icon">✉️</span>
                <span>abc@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="contact-info__right">
            <div className="contact-info__map-card">
              <span className="contact-info__map-pin">📍</span>
              <p className="contact-info__map-label">Star Properties & Realty</p>
              <p className="contact-info__map-address">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default Contact;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleForm from '../components/ScheduleForm';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import { mapPlaceholder } from '../assets/index';
import './PropertyDetail.css';

function PropertyDetail() {
  const property = properties[0]; /* Default to first property */
  const similarProperties = properties.slice(1, 4);

  /* Use the property image plus a few others as gallery thumbnails */
  const images = [
    property.image,
    properties[1].image,
    properties[2].image,
    properties[3].image
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const stats = [
    { icon: '🛏', label: '3 Beds' },
    { icon: '🛁', label: '2 Baths' },
    { icon: '📐', label: '1,450 Sqft' },
    { icon: '📅', label: 'Year Built 2021' }
  ];

  const nearbyLocations = [
    { icon: '🏥', label: 'Hospital', distance: '900 m' },
    { icon: '🎓', label: 'College', distance: '1.9 km' },
    { icon: '🏫', label: 'School', distance: '2.6 km' },
    { icon: '🚉', label: 'Station', distance: '6.2 km' },
    { icon: '🚌', label: 'Bus Stand', distance: '9.4 km' },
    { icon: '🎡', label: 'Theme Park', distance: '10.2 km' }
  ];

  return (
    <div className="detail-page">
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/services">Services</Link>
          <span>/</span>
          <span>Property Details</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container detail-layout">
        {/* LEFT COLUMN */}
        <div className="detail-left" id="detail-left">
          {/* Main Image */}
          <div className="detail-main-image-wrap">
            <img src={mainImage} alt="Property main view" className="detail-main-image" />
          </div>

          {/* Thumbnails */}
          <div className="detail-thumbnails">
            {images.map((img, i) => (
              <button
                key={i}
                className={`detail-thumb ${mainImage === img ? 'detail-thumb--active' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`View ${i + 1}`} />
              </button>
            ))}
          </div>

          {/* Stats Row */}
          <div className="detail-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="detail-stats__item">
                <span className="detail-stats__icon">{stat.icon}</span>
                <span className="detail-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* About */}
          <div className="detail-about">
            <h2 className="detail-about__title">About This Property</h2>
            <p className="detail-about__text">
              This modern 3 BHK apartment is located in the heart of R.S. Puram,
              Coimbatore. With spacious rooms, contemporary design, and premium
              amenities, it offers the perfect blend of comfort and convenience.
              The property features Italian marble flooring, modular kitchen,
              24/7 security, covered parking, and access to a rooftop garden.
              Close proximity to top schools, hospitals, and shopping centres
              makes this an ideal family home.
            </p>
            <p className="detail-about__text">
              Built with high-quality materials and earthquake-resistant
              construction, this property ensures safety and durability. The
              east-facing orientation provides ample natural light throughout
              the day. Kids&rsquo; play area, gymnasium, and swimming pool
              are available within the gated community.
            </p>
          </div>

          {/* Floor Plan & Video Tour */}
          <div className="detail-floorplan">
            <h2 className="detail-floorplan__title">Floor Plan & Video Tour</h2>
            <div className="detail-floorplan__card">
              <div className="detail-floorplan__overlay">
                <button className="detail-floorplan__play" aria-label="Play video tour">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                </button>
                <p className="detail-floorplan__label">Watch Video Tour</p>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="detail-map">
            <h2 className="detail-map__title">Location</h2>
            <div className="detail-map__placeholder">
              <img src={mapPlaceholder} alt="Map location" className="detail-map__image" />
              <div className="detail-map__overlay-pin">
                <span className="detail-map__pin">📍</span>
                <p>R.S. Puram, Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Sticky Sidebar) */}
        <div className="detail-right" id="detail-right">
          <div className="detail-sidebar">
            <h2 className="detail-sidebar__title">Modern 3 BHK Apartment</h2>
            <p className="detail-sidebar__location">
              <span>📍</span> R.S. Puram, Coimbatore
            </p>
            <p className="detail-sidebar__price">{property.priceLabel}</p>

            {/* Schedule Form */}
            <ScheduleForm />

            {/* Nearby Locations */}
            <div className="detail-nearby">
              <h3 className="detail-nearby__title">Nearby Locations</h3>
              <ul className="detail-nearby__list">
                {nearbyLocations.map((loc) => (
                  <li key={loc.label} className="detail-nearby__item">
                    <span className="detail-nearby__icon">{loc.icon}</span>
                    <span className="detail-nearby__label">{loc.label}</span>
                    <span className="detail-nearby__distance">{loc.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <section className="detail-similar" id="similar-properties">
        <div className="container">
          <h2 className="section-title">Similar Properties</h2>
          <div className="detail-similar__grid">
            {similarProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default PropertyDetail;

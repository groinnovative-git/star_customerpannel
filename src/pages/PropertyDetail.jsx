import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaChevronLeft, FaChevronRight, FaMapMarkerAlt,
  FaBed, FaBath, FaVectorSquare, FaCalendarAlt,
  FaCompass, FaChair, FaCheckCircle, FaDumbbell,
  FaParking, FaShieldAlt, FaBolt, FaVideo,
  FaSwimmingPool, FaTree, FaCar
} from 'react-icons/fa';
import {
  MdElevator, MdLocalHospital, MdSchool, MdDirectionsBus
} from 'react-icons/md';
import { IoTrainSharp } from 'react-icons/io5';
import { HiAcademicCap } from 'react-icons/hi';
import ScheduleForm from '../components/ScheduleForm';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import { mapPlaceholder } from '../assets/index';
import './PropertyDetail.css';

function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id)) || properties[0];
  const similarProperties = properties.filter(p => p.id !== property.id).slice(0, 4);

  const images = property.images || [property.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic — unchanged
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextImage, currentIndex]);

  const handleNext = () => {
    nextImage();
  };

  const handlePrev = () => {
    prevImage();
  };

  // Amenity icon map
  const amenityIcons = {
    'Gym': <FaDumbbell />,
    'Parking': <FaParking />,
    'Car Parking': <FaCar />,
    'Lift': <MdElevator />,
    'Power Backup': <FaBolt />,
    'CCTV': <FaVideo />,
    'Security': <FaShieldAlt />,
    'Swimming Pool': <FaSwimmingPool />,
    'Garden Area': <FaTree />,
    'Garden': <FaTree />,
  };

  // Merge property amenities with extra standard amenities
  const extraAmenities = ['Swimming Pool', 'Gym', 'Power Backup', 'Lift', 'Security', 'CCTV', 'Car Parking', 'Garden Area'];
  const mergedAmenities = [...new Set([...(property.amenities || []), ...extraAmenities])];

  // Features row data
  const features = [
    { icon: <FaBed />, value: property.bhk, label: 'Bedroom' },
    { icon: <FaBath />, value: `${property.baths}`, label: 'Bathrooms' },
    { icon: <FaVectorSquare />, value: property.area, label: 'Area' },
    { icon: <FaCalendarAlt />, value: '2018', label: 'Year Built' },
    { icon: <FaDumbbell />, value: 'Gym', label: 'Unisex Gym' },
  ];

  const nearbyLocations = [
    { icon: <MdLocalHospital />, label: 'Hospital', distance: '800 m' },
    { icon: <HiAcademicCap />, label: 'College', distance: '1.9 km' },
    { icon: <MdSchool />, label: 'School', distance: '2.6 km' },
    { icon: <IoTrainSharp />, label: 'Station', distance: '6.2 km' },
    { icon: <MdDirectionsBus />, label: 'Bus Stand', distance: '9.4 km' },
  ];

  // Get 3 thumbnails — show first 3 images (or fewer if not enough)
  const thumbnails = images.slice(0, 3);

  return (
    <div className="detail-page">
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/services">Services</Link>
          <span>/</span>
          <span className="breadcrumb-current">{property.name}</span>
        </div>
      </div>

      {/* Main Content — 2 Column */}
      <div className="container detail-layout">
        {/* ====== LEFT COLUMN (70%) ====== */}
        <div className="detail-left" id="detail-left">

          {/* Main Image Slider */}
          <div className="detail-carousel">
            <div className="detail-carousel__main">
              <div
                className="detail-carousel__slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${property.name} view ${i + 1}`}
                    className="detail-main-image"
                  />
                ))}
              </div>

              {/* Navigation Arrows — unchanged */}
              <button className="carousel-control prev" onClick={handlePrev} aria-label="Previous image">
                <FaChevronLeft />
              </button>
              <button className="carousel-control next" onClick={handleNext} aria-label="Next image">
                <FaChevronRight />
              </button>
            </div>

            {/* 3 Small Thumbnails */}
            <div className="detail-thumb-row">
              {thumbnails.map((img, i) => (
                <button
                  key={i}
                  className={`detail-thumb-sm ${currentIndex === i ? 'detail-thumb-sm--active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <img src={img} alt={`Thumb ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Info Horizontal Card */}
          <div className="detail-quickinfo">
            <div className="detail-quickinfo__item">
              <span className="detail-quickinfo__value">{property.name}</span>
            </div>
            <span className="detail-quickinfo__divider">|</span>
            <div className="detail-quickinfo__item">
              <FaMapMarkerAlt className="detail-quickinfo__icon" />
              <span className="detail-quickinfo__value">{property.location}</span>
            </div>
            <span className="detail-quickinfo__divider">|</span>
            <div className="detail-quickinfo__item">
              <span className="detail-quickinfo__value detail-quickinfo__value--price">{property.priceLabel}</span>
            </div>
            <span className="detail-quickinfo__divider">|</span>
            <div className="detail-quickinfo__item">
              <FaVectorSquare className="detail-quickinfo__icon" />
              <span className="detail-quickinfo__value">{property.area}</span>
            </div>
            <span className="detail-quickinfo__divider">|</span>
            <div className="detail-quickinfo__item">
              <FaCompass className="detail-quickinfo__icon" />
              <span className="detail-quickinfo__value">{property.direction}</span>
            </div>
          </div>

          {/* Property Features Card */}
          <div className="detail-card">
            <h2 className="detail-card__title">Property Features</h2>
            <div className="detail-features-grid">
              {features.map((f, idx) => (
                <div key={idx} className="detail-feature-item">
                  <div className="detail-feature-item__icon">{f.icon}</div>
                  <span className="detail-feature-item__value">{f.value}</span>
                  <span className="detail-feature-item__label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Card */}
          <div className="detail-card">
            <h2 className="detail-card__title">Amenities</h2>
            <div className="detail-amenities-grid">
              {mergedAmenities.map((amenity, idx) => (
                <div key={idx} className="detail-amenity-chip">
                  <span className="detail-amenity-chip__icon">
                    {amenityIcons[amenity] || <FaCheckCircle />}
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About This Property Card */}
          <div className="detail-card">
            <h2 className="detail-card__title">About This Property</h2>
            <p className="detail-card__text">{property.description}</p>
          </div>

          {/* Floor Plan & Video Tour Card */}
          <div className="detail-card detail-floorplan-section">
            <h2 className="detail-card__title">Floor Plan & Video Tour</h2>
            <div className="detail-floorplan__container">
              {/* Video Player Part */}
              <div className="detail-video-player">
                <div className="detail-video-player__overlay">
                  <button className="detail-video-player__play-btn" aria-label="Play video tour">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span className="detail-video-player__label">Watch Virtual Tour</span>
                </div>
              </div>

              {/* Floor Plan Image Part */}
              <div className="detail-floorplan-image">
                <div className="detail-floorplan-image__header">
                  <span className="detail-floorplan-image__title">2D Floor Plan Layout</span>
                </div>
                <div className="detail-floorplan-image__placeholder">
                  <FaVectorSquare className="detail-floorplan-image__icon" />
                  <span>Interactive Floor Plan Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====== RIGHT COLUMN (30%) ====== */}
        <div className="detail-right" id="detail-right">
          <div className="detail-sidebar">

            {/* Property Title Card */}
            <div className="detail-sidebar-title-card">
              <h2 className="detail-sidebar-title-card__name">{property.name}</h2>
              <p className="detail-sidebar-title-card__location">
                <FaMapMarkerAlt className="detail-sidebar-title-card__loc-icon" />
                {property.location}, {property.city}
              </p>
              <p className="detail-sidebar-title-card__price">{property.priceLabel}</p>
            </div>

            {/* Schedule Visit Form */}
            <ScheduleForm propertyName={property.name} />

            {/* Nearby Locations Card */}
            <div className="detail-nearby">
              <h3 className="detail-nearby__title">Nearby Locations</h3>
              <p className="detail-nearby__subtitle">Key Transport & Services</p>
              <ul className="detail-nearby__list">
                {nearbyLocations.map((loc, idx) => (
                  <li key={idx} className="detail-nearby__item">
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

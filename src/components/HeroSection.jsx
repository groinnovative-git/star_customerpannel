import { useState } from 'react';
import { FaBuilding, FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVilla } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { heroBg } from '../assets/index';
import './HeroSection.css';

function HeroSection({
  title = 'Your Journey to the Perfect Home Starts Here',
  highlight = '',
  subtitle = 'Discover premium homes in prime locations',
  showSearch = false,
  showCategories = false,
  bgImage = null
}) {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');

  const backgroundImage = bgImage || heroBg;

  const categories = [
    { icon: <FaBuilding />, label: 'Apartment' },
    { icon: <MdVilla />, label: 'villa' },
    { icon: <FaMapMarkedAlt />, label: 'plot' },
    { icon: <GiFarmTractor />, label: 'farm land' },
    { icon: <FaHome />, label: 'Private House' },
    { icon: <BsFillBuildingFill />, label: 'commercial' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', { searchLocation, searchType });
  };

  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="hero__highlight">{highlight}</span>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <section
      className="hero"
      id="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__overlay"></div>

      <div className="hero__content container">
        <h1 className="hero__title">{renderTitle()}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        {showCategories && (
          <div className="hero__categories">
            {categories.map((cat) => (
              <button key={cat.label} className="hero__category-box">
                <span className="hero__category-icon">{cat.icon}</span>
                <span className="hero__category-label">{cat.label}</span>
              </button>
            ))}
          </div>
        )}

        {showSearch && (
          <form className="hero__search" onSubmit={handleSearch}>
            <div className="hero__search-field">
              <FiMapPin className="hero__search-field-icon" />
              <input
                type="text"
                placeholder="Location"
                className="hero__search-input"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                id="hero-search-location"
              />
            </div>
            <div className="hero__search-divider"></div>
            <div className="hero__search-field">
              <FaHome className="hero__search-field-icon" />
              <select
                className="hero__search-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                id="hero-search-type"
              >
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Farm Land">Farm Land</option>
                <option value="Private House">Private House</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            <button type="submit" className="hero__search-btn" id="hero-search-btn">
              <FiSearch className="hero__search-btn-icon" />
              Search
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default HeroSection;

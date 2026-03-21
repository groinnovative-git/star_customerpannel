import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import './Services.css';

function Services() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Apartment', 'Villa', 'Plot', 'Farm Land', 'Private House', 'Commercial'];

  const filteredProperties = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.type === activeFilter);

  return (
    <div className="services-page">
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </div>
      </div>

      {/* Hero */}
      <HeroSection
        title="Your Journey to the Perfect Home Starts Here"
        subtitle="Discover premium homes in prime locations"
        showSearch={true}
        showCategories={true}
      />

      {/* Filter Tabs */}
      <section className="services-filter" id="services-filter">
        <div className="container">
          <div className="services-filter__tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`services-filter__tab ${activeFilter === tab ? 'services-filter__tab--active' : ''}`}
                onClick={() => setActiveFilter(tab)}
                id={`filter-tab-${tab.toLowerCase().replace(' ', '-')}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="services-grid-section" id="services-grid">
        <div className="container">
          <div className="services-grid">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} variant="grid" />
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <p className="services-empty">No properties found for this category.</p>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </div>
  );
}

export default Services;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVilla } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { FiGrid, FiChevronRight } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import CTAStrip from '../components/CTAStrip';
import properties from '../data/properties';
import { prop0104 } from '../assets';
import './Services.css';

function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filterTabs = [
    { id: 'All', label: 'All', icon: <FiGrid /> },
    { id: 'Apartment', label: 'Apartment', icon: <FaBuilding /> },
    { id: 'Villa', label: 'Villa', icon: <MdVilla /> },
    { id: 'Plot', label: 'Plot', icon: <FaMapMarkedAlt /> },
    { id: 'Farm Land', label: 'Farm Land', icon: <GiFarmTractor /> },
    { id: 'Private House', label: 'Private House', icon: <FaHome /> },
    { id: 'Commercial', label: 'Commercial', icon: <BsFillBuildingFill /> }
  ];

  const filteredProperties = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.type === activeFilter);

  const totalEntries = filteredProperties.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalEntries);
  const displayedProperties = filteredProperties.slice(startIndex, endIndex);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleNextPage = () => {
    if (endIndex < totalEntries) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: document.getElementById('services-grid').offsetTop - 100, behavior: 'smooth' });
    }
  };

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
        title="Find Your Next Premium Address"
        subtitle="Explore a curated selection of apartments, villas, and commercial spaces across Coimbatore's most desired neighborhoods."
        showSearch={true}
        showCategories={false}
        bgImage={prop0104}
      />

      {/* Premium Sticky Filter Section */}
      <section className="services-filter-sticky">
        <div className="container">
          <div className="services-filter__tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`services-filter__tab ${activeFilter === tab.id ? 'services-filter__tab--active' : ''}`}
                onClick={() => handleFilterChange(tab.id)}
              >
                <span className="services-filter__tab-icon">{tab.icon}</span>
                <span className="services-filter__tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="services-grid-section" id="services-grid">
        <div className="container">
          <div className="services-grid">
            {displayedProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} variant="grid" isServicesPage={true} />
            ))}
          </div>

          {/* Pagination Row */}
          {totalEntries > 0 && (
            <div className="services-pagination">
              <div className="services-pagination__info">
                Showing entries {startIndex + 1} – {endIndex} of {totalEntries}
              </div>
              <div className="services-pagination__controls">
                <button 
                  className={`services-pagination__btn services-pagination__btn--prev ${currentPage === 1 ? 'services-pagination__btn--disabled' : ''}`}
                  onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <FiChevronRight style={{ transform: 'rotate(180deg)' }} />
                </button>

                {[...Array(Math.ceil(totalEntries / itemsPerPage))].map((_, i) => (
                  <button
                    key={i + 1}
                    className={`services-pagination__page-link ${currentPage === i + 1 ? 'services-pagination__page-link--active' : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  className={`services-pagination__btn services-pagination__btn--next ${endIndex >= totalEntries ? 'services-pagination__btn--disabled' : ''}`}
                  onClick={handleNextPage}
                  disabled={endIndex >= totalEntries}
                  aria-label="Next page"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          )}

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

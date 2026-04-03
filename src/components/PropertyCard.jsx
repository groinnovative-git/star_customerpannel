import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVilla, MdSquareFoot, MdExplore } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { RiBankLine } from 'react-icons/ri';
import './PropertyCard.css';

function PropertyCard({ property, variant = 'grid', isServicesPage = false }) {
  const typeIcons = {
    'Apartment': <FaBuilding />,
    'Villa': <MdVilla />,
    'Plot': <FaMapMarkedAlt />,
    'Farm Land': <GiFarmTractor />,
    'Private House': <FaHome />,
    'Commercial': <BsFillBuildingFill />
  };
  if (!property) return null;

  const isHorizontal = variant === 'horizontal';

  return (
    <div className={`property-card ${isHorizontal ? 'property-card--horizontal' : 'property-card--grid'}`} id={`property-card-${property.id}`}>
      <div className="property-card__image-wrap">
        <img src={property.image} alt={property.name} className="property-card__image" loading="lazy" />
        
        {/* Type Badge Overlay */}
        <div className="property-card__badge-type">
          <span className="property-card__badge-type-icon">{typeIcons[property.type] || <FaHome />}</span>
          <span className="property-card__badge-type-text">{property.type}</span>
        </div>
      </div>

      <div className="property-card__body">
        <h3 className="property-card__name">{property.name}</h3>
        <p className="property-card__location">
          <FaMapMarkerAlt className="property-card__location-icon" />
          {property.location}, {property.city}
        </p>

        <p className="property-card__price">{property.priceLabel}</p>

        <div className="property-card__details-row">
          <span className="property-card__detail-item">
            <MdSquareFoot className="property-card__detail-icon" />
            {property.area}
          </span>
          <span className="property-card__detail-divider">|</span>
          <span className="property-card__detail-item">
            <MdExplore className="property-card__detail-icon" />
            {property.direction}
          </span>
          {property.loanSupport && (
            <>
              <span className="property-card__detail-divider">|</span>
              <span className="property-card__detail-item property-card__detail-item--loan">
                <RiBankLine className="property-card__detail-icon" />
                Loan
              </span>
            </>
          )}
        </div>

        <div className="property-card__actions">
          <Link to={`/services/details/${property.id}`} className="btn-outline property-card__btn">Details</Link>
          <Link to="/contact" className="btn-teal property-card__btn">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

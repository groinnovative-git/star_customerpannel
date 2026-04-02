import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdVilla } from 'react-icons/md';
import { GiFarmTractor } from 'react-icons/gi';
import { BsFillBuildingFill } from 'react-icons/bs';
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

        {!isServicesPage && (
          <span className={`property-card__badge-status ${property.status === 'Active' ? 'property-card__badge-status--active' : 'property-card__badge-status--sold'}`}>
            {property.status === 'Active' ? '● ACTIVE' : '● SOLD OUT'}
          </span>
        )}
      </div>

      <div className="property-card__body">
        <h3 className="property-card__name">{property.name}</h3>
        <p className="property-card__price">{property.priceLabel}</p>
        <p className="property-card__location">
          <FaMapMarkerAlt className="property-card__location-icon" />
          {property.location}, {property.city}
        </p>

        <div className="property-card__tags">
          <span className="property-card__tag">{property.area}</span>
          <span className="property-card__tag">{property.direction}</span>
          {property.loanSupport && <span className="property-card__tag property-card__tag--loan">Loan Support</span>}
        </div>

        <div className="property-card__actions">
          <Link to="/services/details" className="btn-outline property-card__btn">Details</Link>
          <Link to="/contact" className="btn-teal property-card__btn">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

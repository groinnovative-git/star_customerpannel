import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ property, variant = 'grid' }) {
  if (!property) return null;

  const isHorizontal = variant === 'horizontal';

  return (
    <div className={`property-card ${isHorizontal ? 'property-card--horizontal' : 'property-card--grid'}`} id={`property-card-${property.id}`}>
      <div className="property-card__image-wrap">
        <img src={property.image} alt={property.name} className="property-card__image" loading="lazy" />
        {/* <span className="property-card__badge-sale">FOR SALE</span> */}
        <span className={`property-card__badge-status ${property.status === 'Active' ? 'property-card__badge-status--active' : 'property-card__badge-status--sold'}`}>
          {property.status === 'Active' ? '● ACTIVE' : '● SOLD OUT'}
        </span>
      </div>

      <div className="property-card__body">
        <h3 className="property-card__name">{property.name}</h3>
        <p className="property-card__price">{property.priceLabel}</p>
        <p className="property-card__location">
          <span className="property-card__pin">📍</span>
          {property.location}, {property.city}
        </p>

        <div className="property-card__tags">
          <span className="property-card__tag">{property.type}</span>
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

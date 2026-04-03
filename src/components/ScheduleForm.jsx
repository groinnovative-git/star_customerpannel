import { useState } from 'react';
import './ScheduleForm.css';

function ScheduleForm({ propertyName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule Visit Form Data:', { ...formData, propertyName });
    alert(`Visit scheduled for ${propertyName} successfully! We will contact you shortly.`);
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  return (
    <div className="schedule-form" id="schedule-form">
      <h3 className="schedule-form__title">Schedule a Visit</h3>
      <form onSubmit={handleSubmit}>
        <div className="schedule-form__group">
          <p className="schedule-form__property-name">{propertyName || 'Property'}</p>
        </div>
        <div className="schedule-form__group">
          <label className="schedule-form__label">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="schedule-form__input"
            value={formData.name}
            onChange={handleChange}
            required
            id="schedule-name"
          />
        </div>
        <div className="schedule-form__group">
          <label className="schedule-form__label">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            className="schedule-form__input"
            value={formData.email}
            onChange={handleChange}
            required
            id="schedule-email"
          />
        </div>
        <div className="schedule-form__group">
          <label className="schedule-form__label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            className="schedule-form__input"
            value={formData.phone}
            onChange={handleChange}
            required
            id="schedule-phone"
          />
        </div>
        <div className="schedule-form__group">
          <label className="schedule-form__label">Preferred Date</label>
          <input
            type="date"
            name="date"
            className="schedule-form__input"
            value={formData.date}
            onChange={handleChange}
            required
            id="schedule-date"
          />
        </div>
        <div className="schedule-form__group">
          <label className="schedule-form__label">Message</label>
          <textarea
            name="message"
            placeholder="I'm interested in viewing this..."
            className="schedule-form__textarea"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            id="schedule-message"
          ></textarea>
        </div>
        <button type="submit" className="schedule-form__btn" id="schedule-submit">
          SCHEDULE VISIT
        </button>
      </form>
    </div>
  );
}

export default ScheduleForm;

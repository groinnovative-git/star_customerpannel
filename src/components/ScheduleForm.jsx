import { useState } from 'react';
import './ScheduleForm.css';

function ScheduleForm() {
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
    console.log('Schedule Visit Form Data:', formData);
    alert('Visit scheduled successfully! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  return (
    <div className="schedule-form" id="schedule-form">
      <h3 className="schedule-form__title">Schedule a Visit</h3>
      <form onSubmit={handleSubmit}>
        <div className="schedule-form__group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="schedule-form__input"
            value={formData.name}
            onChange={handleChange}
            required
            id="schedule-name"
          />
        </div>
        <div className="schedule-form__group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="schedule-form__input"
            value={formData.email}
            onChange={handleChange}
            required
            id="schedule-email"
          />
        </div>
        <div className="schedule-form__group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="schedule-form__input"
            value={formData.phone}
            onChange={handleChange}
            required
            id="schedule-phone"
          />
        </div>
        <div className="schedule-form__group">
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
          <textarea
            name="message"
            placeholder="Message (optional)"
            className="schedule-form__textarea"
            rows="4"
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

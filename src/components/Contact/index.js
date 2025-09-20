import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  // State for form handling (simple validation)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    // For now, just show alert - in real app, would send to backend
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities and interesting projects. 
              Feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-text">
                  <strong>Email:</strong>
                  <a href="mailto:rakeshmodugu94@gmail.com">rakeshmodugu94@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-text">
                  <strong>Phone:</strong>
                  <a href="tel:+919121974705">+91 9121974705</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div className="contact-text">
                  <strong>LinkedIn:</strong>
                  <a href="https://linkedin.com/in/rakesh-modugu" target="_blank" rel="noopener noreferrer">
                    rakesh-modugu
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div className="contact-text">
                  <strong>GitHub:</strong>
                  <a href="https://github.com/modugurakesh" target="_blank" rel="noopener noreferrer">
                    modugurakesh
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

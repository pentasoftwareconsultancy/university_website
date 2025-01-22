import React, { useState } from 'react';
import styles from './HelpDesk.module.css';

const HelpDesk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic (you can add an API call here)
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      number:'',
      message: ''
    });
  };

  return (
    
    <div className={styles.contactFormWrapper}>
      <h2 className={styles.title}>Contact Us</h2>
      {formSubmitted ? (
        <div className={styles.successMessage}>
          <p>Your message has been sent successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number">Contact Number</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textareaField}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default HelpDesk;

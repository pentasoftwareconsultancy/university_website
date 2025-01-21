import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container3}>
        {/* Brand section */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>eduka</h2>
          <p className={styles.description}>
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour words
            believable.
          </p>
          <div className={styles.contact}>
            <p>
              📞 <span>+2 123 654 7898</span>
            </p>
            <p>
              📍 <span>25/B Milford Road, New York</span>
            </p>
            <p>
              📧 <span>info@example.com</span>
            </p>
          </div>
        </div>

        {/* Quick Links section */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Testimonials</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Update News</li>
          </ul>
        </div>

        {/* Campus Info section */}
        <div className={styles.links}>
          <h3>Our Campus</h3>
          <ul>
            <li>Campus Safety</li>
            <li>Student Activities</li>
            <li>Academic Department</li>
            <li>Planning & Administration</li>
            <li>Office of the Chancellor</li>
            <li>Facility Services</li>
          </ul>
        </div>

        {/* Newsletter section */}
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and news.</p>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
            />
            <button className={styles.button}>Subscribe Now</button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className={styles.bottom}>
        <p>© Copyright 2025 Eduka. All Rights Reserved.</p>
        <div className={styles.socialIcons}>
          <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
          <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
          <i className="fab fa-youtube"></i> {/* YouTube Icon */}
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;

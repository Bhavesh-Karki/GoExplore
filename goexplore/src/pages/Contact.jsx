import React from 'react';
import '../styles/pages.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Reach out to us for any questions, bookings, or travel advice.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h3>📧 Email Us</h3>
            <p>support@goexplore.example</p>
            <p>bookings@goexplore.example</p>
          </div>
          
          <div className="info-section">
            <h3>📞 Call Us</h3>
            <p>+011 2553 2553</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
          
          <div className="info-section">
            <h3>📍 Visit Us</h3>
            <p>123 Travel Street</p>
            <p>Adventure City, AC 12345</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your travel plans or questions..." rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="contact-info-footer">
              <p><i className="fas fa-envelope"></i> support@goexplore.example</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Travel Street, Adventure City</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected for the latest travel deals, tips, and inspiration!</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter" className="social-link"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="YouTube" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GoExplore. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;



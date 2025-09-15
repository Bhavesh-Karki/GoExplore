import React from 'react';
import { useDestinations } from '../context/DestinationsContext';
import '../styles/pages.css';

// Enhanced destinations page with better styling and layout
function DestinationsPage() {
  const { destinations, isLoading, error } = useDestinations();

  if (isLoading) {
    return (
      <div className="destinations-page">
        <div className="destinations-wrapper">
          <div className="destinations-header">
            <h2>Loading destinations...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="destinations-page">
        <div className="destinations-wrapper">
          <div className="destinations-header">
            <h2 style={{ color: 'red' }}>{error}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="destinations-page">
      <div className="destinations-wrapper">
        <div className="destinations-header">
          <h2>Explore Amazing Destinations</h2>
          <p>Discover the world's most beautiful places and plan your next adventure</p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((d, i) => (
            <div key={i} className={`destination-card ${d.popular ? 'popular' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <span className="destination-flag">{d.flag}</span>
                <span className="destination-name">{d.name}</span>
              </div>
              <div className="destination-description">
                {d.popular 
                  ? 'A must-visit destination with incredible experiences and breathtaking views.' 
                  : 'An amazing place waiting to be discovered with unique culture and attractions.'
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="destinations-footer" style={{ borderRadius: '2px'}}>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About GoExplore</h4>
            <p>Discover amazing destinations around the world with our curated travel experiences.</p>
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
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
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

export default DestinationsPage;



import React, { useState, useRef } from 'react';
import './Traveling.css';

const Traveling = ({ traveling }) => {
  const { id, name, description, price, image, rating, location } = traveling;
  const [count, setCount] = useState(0);
  const [showCountControls, setShowCountControls] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const cardRef = useRef(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleBookNow = () => {
    setShowCountControls(true);
  };

  const handleSubmit = () => {
    // Show checkout form right after submit
    setShowCountControls(false);
    setShowCheckout(true);
    setIsBooked(false);
  };

  const handleProceedToCheckout = () => {
    if (count > 0) {
      setShowCheckout(true);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardRef.current) {
      const cardNum = cardRef.current.value || '';
      const last4 = cardNum.slice(-4);
      alert(`Payment has been initiated for card ending with ${last4}`);
    }
    setShowCheckout(false);
    setIsBooked(false);
    setCount(0);
  };

  return (
    <div className="traveling-card">
      <div className="traveling-image">
        <img src={image} alt={name} />
        <div className="traveling-badge">Featured</div>
      </div>
      
      <div className="traveling-content">
        <div className="traveling-header">
          <h3 className="traveling-title">{name}</h3>
        </div> 
        
        <p className="traveling-description">{description}</p>
        
        <div className="traveling-location">
          <span className="location-icon">📍</span>
          <span>{location}</span>
        </div>
        
        <div className="traveling-footer">
          <div className="traveling-price">
            <span className="price-amount">₹{price}</span>
          </div>
          <div className="book-section">
            {showCountControls && !isBooked && (
              <div className="count-controls">
                <button className="count-btn" onClick={decrementCount}>-</button>
                <span className="count-display">{count}</span>
                <button className="count-btn" onClick={incrementCount}>+</button>
              </div>
            )}
            
            {!showCountControls && !isBooked && !showCheckout && (
              <button className="book-button" onClick={handleBookNow}>
                Book Now
              </button>
            )}
            
            {showCountControls && !isBooked && (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
            
            {isBooked && (
              <button className="book-button booked">
                Booked!
              </button>
            )}

            {!showCheckout && count > 0 && !showCountControls && (
              <button className="submit-button" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>
            )}
            {showCheckout && (
              <form onSubmit={handlePayment} className="checkout-form">
                <div className="form-row">
                  <label>Card Number</label>
                  <input ref={cardRef} type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="form-row">
                  <label>CVV</label>
                  <input type="password" placeholder="123" required />
                </div>
                <button className="submit-button" type="submit">
                  Pay Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traveling;

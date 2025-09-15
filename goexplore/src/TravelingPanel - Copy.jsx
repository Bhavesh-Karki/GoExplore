import React from 'react';
import Traveling from './Traveling';
import './TravelingPanel.css';

const TravelingPanel = () => {
  // Sample travel packages data
  const travelings = [
    {
      id: 1,
      name: "Bali Paradise Getaway",
      description: "Experience the perfect blend of culture, beaches, and adventure in beautiful Bali. Includes temple visits, beach activities, and traditional cuisine.",
      price: "114,560" ,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      location: "Bali, Indonesia"
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      description: "Discover the majestic Swiss Alps with guided hiking tours, cable car experiences, and cozy mountain chalet accommodations.",
      price: "167,475",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      location: "Interlaken, Switzerland"
    },
    {
      id: 3,
      name: "Tokyo Urban Explorer",
      description: "Immerse yourself in the vibrant culture of Tokyo with guided tours of historic temples, modern districts, and authentic sushi experiences.",
      price: "141,018",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      location: "Tokyo, Japan"
    },
    {
      id: 4,
      name: "Santorini Sunset Cruise",
      description: "Sail around the stunning Greek islands with luxury yacht accommodations, private beach access, and breathtaking sunset views.",
      price: "220,390",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      location: "Santorini, Greece"
    },
    {
      id: 5,
      name: "Machu Picchu Trek",
      description: "Embark on an unforgettable journey to the ancient Incan citadel with expert guides, comfortable camping, and stunning mountain vistas.",
      price: "149,837",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      location: "Cusco, Peru"
    },
    {
      id: 6,
      name: "Safari Adventure Kenya",
      description: "Experience the wild beauty of Africa with guided safari tours, luxury tent accommodations, and close encounters with wildlife.",
      price: "255,667",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      location: "Masai Mara, Kenya"
    }
  ];

  return (
    <div className="traveling-panel">
      <div className="panel-header">
        <h2>Featured Travel Packages</h2>
        <p>Discover our handpicked destinations for your next adventure</p>
      </div>
      
      <div className="travelings-grid">
        {travelings.map(traveling => (
          <Traveling key={traveling.id} traveling={traveling} />
        ))}
      </div>
      
      <div className="panel-footer">
        <button className="view-all-button">View All Packages</button>
      </div>
    </div>
  );
};

export default TravelingPanel;

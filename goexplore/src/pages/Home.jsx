import React from 'react';
import { Carousel } from 'react-bootstrap';
import TravelingPanel from '../TravelingPanel';

// Home page composed from existing components
function Home() {
  return (
    <div>
      <div className="carousel-container">
        <Carousel 
          className="main-carousel"
          interval={5000}
          pause="hover"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1715320555464-25f5b87f4407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="First slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Explore the World</h3>
              <p>Discover amazing places with GoExplore.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1728039759349-d5e2a087b402?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Second slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Adventure Awaits</h3>
              <p>Find your dream destinations today.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Travel With Ease</h3>
              <p>Book your packages with just one click.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fourth slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Desert Adventures</h3>
              <p>Explore the beauty of the desert.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1597679266462-dce76a2a14f0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fifth slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Snowfall</h3>
              <p>Experience the beauty of snowfall.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1665413791165-b25d42542b80?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sixth slide"
              style={{ 
                height: "500px", 
                objectFit: "cover",
                width: "100%"
              }}
            />
            <Carousel.Caption>
              <h3>Cultural Experience</h3>
              <p>Experience the rich culture of the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <TravelingPanel />
    </div>
  );
}

export default Home;



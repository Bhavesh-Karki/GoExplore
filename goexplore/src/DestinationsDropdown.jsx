import React from 'react';
import './DestinationsDropdown.css';
import { NavLink } from 'react-router-dom';

const DestinationsDropdown = () => {
    return (
        <div className="dropdown-container">
            <NavLink to="/destinations" className="destinations-link">
                Destinations
            </NavLink>
        </div>
    );
};

export default DestinationsDropdown;

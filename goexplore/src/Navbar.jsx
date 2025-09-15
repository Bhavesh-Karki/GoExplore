import React, { useState }  from 'react';
import './Navbar.css';
import DestinationsDropdown from './DestinationsDropdown';
import { NavLink } from 'react-router-dom';
import myImage from './assets/GoExplore_logo.png';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className='navbar'>
            <img className='navbar-logo' src={myImage} alt="GoExplore Logo" style={{ width: '100px', height: 'auto', maxHeight: '40px', objectFit: 'contain' }} />
            <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
            ☰
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><DestinationsDropdown /></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>               
            </ul>
        </nav>
    );
};

export default Navbar;
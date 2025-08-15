import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">FitLife</span>
                    <span className="logo-subtitle">Fitness Center</span>
                </Link>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/classes" className={`nav-link ${isActive('/classes')}`} onClick={() => setIsOpen(false)}>
                        Classes
                    </Link>
                    <Link to="/trainers" className={`nav-link ${isActive('/trainers')}`} onClick={() => setIsOpen(false)}>
                        Trainers
                    </Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

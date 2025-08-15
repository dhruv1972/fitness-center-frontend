import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>FitLife Fitness Center</h3>
                        <p>Transform your life with our expert trainers and diverse fitness programs. Join our community and achieve your health goals.</p>
                        <div className="social-links">
                            <button className="social-link" aria-label="Facebook">📘</button>
                            <button className="social-link" aria-label="Instagram">📷</button>
                            <button className="social-link" aria-label="Twitter">🐦</button>
                            <button className="social-link" aria-label="YouTube">📺</button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/classes">Classes</Link></li>
                            <li><Link to="/trainers">Trainers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li>Group Classes</li>
                            <li>Personal Training</li>
                            <li>Fitness Assessment</li>
                            <li>Nutrition Guidance</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-info">
                            <p>📍 123 Fitness Street<br />Health City, HC 12345</p>
                            <p>📞 (555) 123-4567</p>
                            <p>✉️ info@fitlife.com</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 FitLife Fitness Center. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <button className="footer-link-btn">Privacy Policy</button>
                        <button className="footer-link-btn">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

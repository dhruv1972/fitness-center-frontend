import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* hero section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Transform Your Life with FitLife</h1>
                        <p className="hero-subtitle">
                            Join our community of fitness enthusiasts and achieve your health goals with our expert trainers and diverse class offerings.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/classes" className="btn btn-primary">View Classes</Link>
                            <Link to="/trainers" className="btn btn-secondary">Meet Trainers</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* features section */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">Why Choose FitLife?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">💪</div>
                            <h3>Expert Trainers</h3>
                            <p>Our certified trainers are here to guide you on your fitness journey with personalized attention.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏋️</div>
                            <h3>Diverse Classes</h3>
                            <p>From yoga to HIIT, we offer a wide range of classes to suit every fitness level and preference.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌟</div>
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art equipment and clean, welcoming environment for your workout sessions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* cta section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Fitness Journey?</h2>
                        <p>Join FitLife today and take the first step towards a healthier, stronger you.</p>
                        <Link to="/contact" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

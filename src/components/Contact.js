import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // simulate api call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">
                    Get in touch with us for any questions or to start your fitness journey.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <div className="contact-details">
                            <div className="contact-item">
                                <h3>Address</h3>
                                <p>123 Fitness Street<br />
                                    Downtown, City, State 12345</p>
                            </div>

                            <div className="contact-item">
                                <h3>Phone</h3>
                                <p>(555) 123-4567</p>
                            </div>

                            <div className="contact-item">
                                <h3>Email</h3>
                                <p>info@fitlife.com</p>
                            </div>

                            <div className="contact-item">
                                <h3>Hours</h3>
                                <p>Monday - Friday: 6:00 AM - 10:00 PM<br />
                                    Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send us a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {submitStatus === 'success' && (
                            <div className="success-message">
                                <p>Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

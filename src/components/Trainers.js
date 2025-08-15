import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trainers.css';

// sample data for when api is not available
const sampleTrainers = [
    {
        _id: '1',
        name: 'Sarah Johnson',
        bio: 'Certified yoga instructor with 8+ years of experience in Vinyasa, Hatha, and Restorative yoga. Sarah specializes in mindfulness and stress relief through movement.',
        specialties: ['Yoga', 'Meditation', 'Flexibility Training', 'Stress Relief'],
        contact: 'sarah.johnson@fitlife.com',
        experience: '8+ years',
        certification: 'RYT-500 Certified'
    },
    {
        _id: '2',
        name: 'Mike Chen',
        bio: 'Former professional athlete turned fitness coach. Mike specializes in high-intensity training and sports performance, helping clients achieve peak physical condition.',
        specialties: ['HIIT', 'Strength Training', 'Sports Conditioning', 'Athletic Performance'],
        contact: 'mike.chen@fitlife.com',
        experience: '12+ years',
        certification: 'NASM Certified'
    },
    {
        _id: '3',
        name: 'Alex Rodriguez',
        bio: 'NASM certified personal trainer with expertise in bodybuilding and functional fitness. Alex helps clients build strength and transform their bodies safely.',
        specialties: ['Bodybuilding', 'Powerlifting', 'Functional Training', 'Muscle Building'],
        contact: 'alex.rodriguez@fitlife.com',
        experience: '6+ years',
        certification: 'NASM Certified'
    },
    {
        _id: '4',
        name: 'Maria Garcia',
        bio: 'International dance instructor with certifications in Zumba, Latin dance, and cardio fitness. Maria brings energy and passion to every class.',
        specialties: ['Zumba', 'Latin Dance', 'Cardio Fitness', 'Dance Fitness'],
        contact: 'maria.garcia@fitlife.com',
        experience: '10+ years',
        certification: 'Zumba Certified'
    },
    {
        _id: '5',
        name: 'Emma Wilson',
        bio: 'Pilates instructor certified in classical and contemporary methods. Emma focuses on core strength, rehabilitation, and mind-body connection.',
        specialties: ['Pilates', 'Core Training', 'Rehabilitation', 'Posture Correction'],
        contact: 'emma.wilson@fitlife.com',
        experience: '7+ years',
        certification: 'Pilates Certified'
    },
    {
        _id: '6',
        name: 'David Thompson',
        bio: 'Cycling coach and former competitive cyclist. David specializes in indoor and outdoor cycling training, helping clients build endurance and cardiovascular fitness.',
        specialties: ['Spinning', 'Cycling', 'Endurance Training', 'Cardio'],
        contact: 'david.thompson@fitlife.com',
        experience: '9+ years',
        certification: 'Cycling Coach Certified'
    }
];

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                // try to fetch from api
                const response = await axios.get('http://localhost:3000/api/trainers', {
                    timeout: 5000 // 5 second timeout
                });
                setTrainers(response.data);
                setLoading(false);
            } catch (err) {
                console.log('api not available, using sample data:', err.message);
                // use sample data if api fails
                setTrainers(sampleTrainers);
                setLoading(false);
                setError('Note: Using sample data. Make sure your backend server is running on port 3000 for live data.');
            }
        };

        fetchTrainers();
    }, []);

    if (loading) {
        return (
            <div className="trainers-page">
                <div className="container">
                    <div className="trainers-header">
                        <h1 className="page-title">Our Expert Trainers</h1>
                        <p className="page-subtitle">
                            Meet our certified fitness professionals who are dedicated to helping you achieve your goals.
                        </p>
                    </div>
                    <div className="loading">
                        <div className="loading-spinner"></div>
                        <p>Loading our amazing trainers...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="trainers-page">
            <div className="container">
                <div className="trainers-header">
                    <h1 className="page-title">Our Expert Trainers</h1>
                    <p className="page-subtitle">
                        Meet our certified fitness professionals who are dedicated to helping you achieve your goals.
                        Each trainer brings unique expertise and passion to create personalized fitness experiences.
                    </p>
                </div>

                {error && (
                    <div className="error" style={{ marginBottom: '2rem' }}>
                        {error}
                    </div>
                )}

                {trainers.length === 0 ? (
                    <div className="no-trainers">
                        <h3>No Trainers Available</h3>
                        <p>We're currently updating our trainer profiles. Please check back soon!</p>
                    </div>
                ) : (
                    <div className="trainers-grid">
                        {trainers.map((trainer) => (
                            <div key={trainer._id} className="trainer-card">
                                <div className="trainer-avatar">
                                    <div className="avatar-placeholder">
                                        <span>👨‍💼</span>
                                    </div>
                                    <div className="trainer-badge">
                                        <span className="experience">{trainer.experience || '5+ years'}</span>
                                    </div>
                                </div>

                                <div className="trainer-info">
                                    <h3 className="trainer-name">{trainer.name}</h3>

                                    {trainer.certification && (
                                        <div className="trainer-certification">
                                            <span className="cert-badge">{trainer.certification}</span>
                                        </div>
                                    )}

                                    {trainer.bio && (
                                        <p className="trainer-bio">{trainer.bio}</p>
                                    )}

                                    {trainer.specialties && trainer.specialties.length > 0 && (
                                        <div className="trainer-specialties">
                                            <h4>Specialties:</h4>
                                            <div className="specialties-list">
                                                {trainer.specialties.map((specialty, index) => (
                                                    <span key={index} className="specialty-tag">
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {trainer.contact && (
                                        <div className="trainer-contact">
                                            <h4>Contact:</h4>
                                            <p>{trainer.contact}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="trainer-actions">
                                    <button className="btn btn-primary">Book Session</button>
                                    <button className="btn btn-secondary">View Schedule</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trainers;

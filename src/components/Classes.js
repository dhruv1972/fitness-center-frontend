import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Classes.css';

// sample data for when api is not available
const sampleClasses = [
    {
        _id: '1',
        name: 'Yoga Flow',
        description: 'A gentle flow class combining breath work with mindful movement to improve flexibility and reduce stress.',
        schedule: new Date(Date.now() + 24 * 60 * 60 * 1000), // tomorrow
        trainer: { name: 'Sarah Johnson' },
        capacity: 15
    },
    {
        _id: '2',
        name: 'HIIT Training',
        description: 'High-intensity interval training to boost cardiovascular fitness and burn calories efficiently.',
        schedule: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // day after tomorrow
        trainer: { name: 'Mike Chen' },
        capacity: 20
    },
    {
        _id: '3',
        name: 'Strength Training',
        description: 'Build muscle and increase strength with our comprehensive weight training program.',
        schedule: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        trainer: { name: 'Alex Rodriguez' },
        capacity: 12
    },
    {
        _id: '4',
        name: 'Zumba Dance',
        description: 'High-energy dance fitness class that combines Latin and international music with dance moves.',
        schedule: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
        trainer: { name: 'Maria Garcia' },
        capacity: 25
    },
    {
        _id: '5',
        name: 'Pilates Core',
        description: 'Focus on core strength, flexibility, and overall body awareness through controlled movements.',
        schedule: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        trainer: { name: 'Emma Wilson' },
        capacity: 18
    },
    {
        _id: '6',
        name: 'Spinning Class',
        description: 'Indoor cycling class that provides an intense cardio workout while being easy on the joints.',
        schedule: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
        trainer: { name: 'David Thompson' },
        capacity: 20
    }
];

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                // try to fetch from api
                const response = await axios.get('http://localhost:3000/api/classes', {
                    timeout: 5000 // 5 second timeout
                });
                setClasses(response.data);
                setLoading(false);
            } catch (err) {
                console.log('api not available, using sample data:', err.message);
                // use sample data if api fails
                setClasses(sampleClasses);
                setLoading(false);
                setError('Note: Using sample data. Make sure your backend server is running on port 3000 for live data.');
            }
        };

        fetchClasses();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="classes-page">
                <div className="container">
                    <h1 className="page-title">Our Classes</h1>
                    <div className="loading">Loading classes...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="classes-page">
            <div className="container">
                <h1 className="page-title">Our Classes</h1>
                <p className="page-subtitle">
                    Discover our wide range of fitness classes designed to help you achieve your goals.
                </p>

                {error && (
                    <div className="error" style={{ marginBottom: '2rem' }}>
                        {error}
                    </div>
                )}

                {classes.length === 0 ? (
                    <div className="no-classes">
                        <p>No classes available at the moment. Please check back later!</p>
                    </div>
                ) : (
                    <div className="classes-grid">
                        {classes.map((classItem) => (
                            <div key={classItem._id} className="class-card">
                                <div className="class-header">
                                    <h3 className="class-name">{classItem.name}</h3>
                                    <div className="class-schedule">
                                        <span className="schedule-label">Next Session:</span>
                                        <span className="schedule-time">{formatDate(classItem.schedule)}</span>
                                    </div>
                                </div>

                                <div className="class-content">
                                    <p className="class-description">{classItem.description}</p>

                                    {classItem.trainer && (
                                        <div className="trainer-info">
                                            <span className="trainer-label">Trainer:</span>
                                            <span className="trainer-name">{classItem.trainer.name}</span>
                                        </div>
                                    )}

                                    <div className="class-details">
                                        <div className="capacity">
                                            <span className="capacity-label">Capacity:</span>
                                            <span className="capacity-value">{classItem.capacity} people</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="class-actions">
                                    <button className="btn btn-primary">Join Class</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Classes;

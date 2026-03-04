import React, { useState, useEffect } from 'react';

const WebinarBenefits = () => {
    const [timeLeft, setTimeLeft] = useState({ days: '05', hours: '24', minutes: '30' });

    useEffect(() => {
        const targetDate = new Date("2026-03-06T16:00:00-07:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00' });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

                setTimeLeft({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0')
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [formData, setFormData] = useState({ name: '', mobile: '', email: '', session: '' });
    const [status, setStatus] = useState({ loading: false, success: '', error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Client-side advanced validation
        if (formData.name.trim().length <= 2) {
            return setStatus({ loading: false, success: '', error: 'Name must be at least 3 characters long.' });
        }

        const phoneRegex = /^[0-9\-\+\s\(\)]{7,15}$/;
        if (!phoneRegex.test(formData.mobile)) {
            return setStatus({ loading: false, success: '', error: 'Please enter a valid mobile number.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return setStatus({ loading: false, success: '', error: 'Please enter a valid email address.' });
        }

        setStatus({ loading: true, success: '', error: '' });

        try {
            const response = await fetch('http://localhost:5000/api/book-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: 'Registration submitted successfully! Check your inbox soon.', error: '' });
                setFormData({ name: '', mobile: '', email: '', session: '' });
            } else {
                setStatus({ loading: false, success: '', error: data.error || 'Failed to submit. Please try again.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: '', error: 'Network error. Make sure your connection is stable.' });
        }

        // Auto hide message after 5 seconds
        setTimeout(() => {
            setStatus(prev => ({ ...prev, success: '', error: '' }));
        }, 5000);
    };

    return (
        <section className="benefit-webiner">
            <div className="custom-container">
                <div className="global-header full-width">
                    <h2>Exclusive Benefits Of Joining <span className="gradient-text-bg">The Webiner</span></h2>
                </div>
                <div className="flex-box book-webinar-box">
                    <div className="webiner-form">
                        <div className="form-wrapper">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-input" placeholder="Name*" required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="mobile" className="form-input" placeholder="Mobile*" required value={formData.mobile} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-input" placeholder="Email*" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="session" className="form-input" placeholder="Session you want to attend" value={formData.session} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn-book" disabled={status.loading} style={{ opacity: status.loading ? 0.7 : 1 }}>
                                    <span>{status.loading ? 'SUBMITTING...' : 'BOOK YOUR SESSION NOW'}</span>
                                </button>
                                {status.success && <p style={{ color: '#008000', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>{status.success}</p>}
                                {status.error && <p style={{ color: '#ff0000', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>{status.error}</p>}
                            </form>
                            <div className="countdown" data-target-datetime="2026-03-06T16:00:00-07:00">
                                <div className="time-block">
                                    <span className="time-number" id="days">{timeLeft.days}</span>
                                    <span className="time-label">DAY</span>
                                </div>
                                <span className="separator">:</span>
                                <div className="time-block">
                                    <span className="time-number" id="hours">{timeLeft.hours}</span>
                                    <span className="time-label">HOUR</span>
                                </div>
                                <span className="separator">:</span>
                                <div className="time-block">
                                    <span className="time-number" id="minutes">{timeLeft.minutes}</span>
                                    <span className="time-label">MINUTE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="webiner-content">
                        <ul>
                            <li>
                                <span><img src="assets/images/blue-round-tick.png" alt="" /></span>
                                <p>Build a systematic interview structure you can use in every encounter</p>
                            </li>
                            <li>
                                <span><img src="assets/images/blue-round-tick.png" alt="" /></span>
                                <p>Write Mental Status Examinations that are accurate, complete, and defensible</p>
                            </li>
                            <li>
                                <span><img src="assets/images/blue-round-tick.png" alt="" /></span>
                                <p>Stop second-guessing your assessment approach during high-stakes appointments</p>
                            </li>
                            <li>
                                <span><img src="assets/images/blue-round-tick.png" alt="" /></span>
                                <p>Strengthen your clinical foundations for rotations, practice, and boards</p>
                            </li>
                            <li>
                                <span><img src="assets/images/blue-round-tick.png" alt="" /></span>
                                <p>Learn directly from an experienced PMHNP who has taught these skills across clinical
                                    settings</p>
                            </li>
                        </ul>
                        <div className="coundown-btn-border">
                            <div className="webiner-buttons">
                                <div className="button-outer">
                                    <div className="button-gap">
                                        <button className="date-button">
                                            <span className="icon-wrap">
                                                <img src="assets/images/calender-icon.png" alt="" />
                                            </span>
                                            <span className="text-wrap">
                                                <span className="label">Date</span>
                                                <span className="date">Mar 6, 2026</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-outer">
                                    <div className="button-gap">
                                        <button className="date-button">
                                            <span className="icon-wrap">
                                                <img src="assets/images/outline-clock-icon.png" alt="" />
                                            </span>
                                            <span className="text-wrap">
                                                <span className="label">Time</span>
                                                <span className="date">16:00 MST</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-outer">
                                    <div className="button-gap">
                                        <button className="date-button">
                                            <span className="icon-wrap">
                                                <img src="assets/images/outline-clock-icon.png" alt="" />
                                            </span>
                                            <span className="text-wrap">
                                                <span className="label">Duration</span>
                                                <span className="date">120 min</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-outer">
                                    <div className="button-gap">
                                        <button className="date-button">
                                            <span className="icon-wrap">
                                                <img src="assets/images/dollar-icon.png" alt="" />
                                            </span>
                                            <span className="text-wrap">
                                                <span className="label">Price</span>
                                                <span className="date">$39</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="button-outer">
                                    <div className="button-gap">
                                        <button className="date-button">
                                            <span className="icon-wrap">
                                                <img src="assets/images/calender-icon.png" alt="" />
                                            </span>
                                            <span className="text-wrap">
                                                <span className="label">Available Seat</span>
                                                <span className="date">21 / 50</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebinarBenefits;

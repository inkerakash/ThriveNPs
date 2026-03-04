import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let start = 0;
                const duration = 2000;
                const increment = target / (duration / 10);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.ceil(start));
                    }
                }, 10);

                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [target]);

    return <span className="counter" data-target={target} ref={countRef}>{count}</span>;
};

const Hero = ({ onVideoTrigger }) => {
    return (
        <section className="hero-banner">
            <div className="custom-container">
                <div className="flex-box">
                    <div className="hero-banner-cntn">
                        <h2>Master the <span className="text-red">Psychiatric</span> Interview and <span
                            className="text-violet">MSE </span> Before Your Next Encounter</h2>
                        <p>A 120-minute live session that gives you a repeatable, evidence-aligned framework for conducting
                            confident psychiatric assessments and writing sharper documentation.</p>
                    </div>
                    <div className="hero-banner-thumb">
                        <div className="hero-video-preview">
                            <img src="assets/images/banner-right-thumb.png" alt="Lakeisha Appleton introduction video" />
                            <button className="hero-video-btn video-trigger" type="button"
                                aria-label="Play Lakeisha Appleton introduction video"
                                data-video-src="assets/videos/webiner-video.mp4"
                                onClick={() => onVideoTrigger('assets/videos/webiner-video.mp4')}>
                                <img src="assets/images/Button-Play-video.png" alt="" />
                            </button>
                        </div>
                        <div className="banner-info">
                            <h4>Lakeisha Appleton</h4>
                            <h5>FNP-C, PMHNP- BC</h5>
                            <p>I'm looking forward to sharing knowledge and helping mentees with their career goals and
                                skills.</p>
                        </div>
                    </div>
                </div>
                <div className="banner-counter">
                    <div className="counter-box">
                        <h4><Counter target={100} />+</h4>
                        <p>Successful Practice Launces</p>
                    </div>
                    <div className="counter-box">
                        <h4><Counter target={3000} />+</h4>
                        <p>Practice Questions</p>
                    </div>
                    <div className="counter-box">
                        <h4><Counter target={200} />+</h4>
                        <p>Happy PMHNP’s Stories</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

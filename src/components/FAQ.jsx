import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="fax-outer">
            <div className="custom-container">
                <div className="global-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Get answers to common questions about Live Didactic and our didactic offerings.</p>
                </div>
                <div className="faq-container">
                    <div className={`faq-item ${openIndex === 0 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(0)}>
                            <h5>What are ThriveNPs Live Sessions?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 0 ? 'auto' : 0, overflow: 'hidden' }}>
                            Live Sessions are interactive, virtual clinical training sessions held every Saturday at 11:00 AM MST. Each 90-minute session covers real-world psychiatric topics that textbooks don't teach—from medication management strategies to complex case presentations. Led by Lakeisha Appleton, FNP, PMHNP-BC, and guest expert instructors, these sessions bridge the gap between academic knowledge and confident clinical practice.
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 1 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(1)}>
                            <h5>How much do Live Sessions cost?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 1 ? 'auto' : 0, overflow: 'hidden' }}>
                            Live Sessions are $39 per session on a pay-as-you-go basis. This flexible model allows you to:
                            <ul>
                                <li>Purchase one session at a time — no commitment required</li>
                                <li>Choose the topics most relevant to you — attend only what you need</li>
                                <li>Build your own learning path — mix and match sessions across cohorts</li>
                                <li>Each $39 purchase includes:</li>
                                <li>Live session attendance with full Q&amp;A access</li>
                                <li>Session recording (lifetime access)</li>
                                <li>Downloadable handouts and clinical resources</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 2 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(2)}>
                            <h5>What if I can't attend a live session?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 2 ? 'auto' : 0, overflow: 'hidden' }}>
                            No problem! Every session purchase includes:
                            <ul>
                                <li>Recording access available within 24 hours of the live session</li>
                                <li>Lifetime access to your purchased recordings — review unlimited times</li>
                                <li>Downloadable materials that accompany each session</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 3 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(3)}>
                            <h5>How do I participate during live sessions?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 3 ? 'auto' : 0, overflow: 'hidden' }}>
                            Our sessions are highly interactive:
                            <ul>
                                <li>Live Q&A: Ask questions via chat or unmute during designated times</li>
                                <li>Polls & Quizzes: Test your knowledge in real-time</li>
                                <li>Case Discussions: Work through clinical scenarios with peers</li>
                                <li>Breakout Rooms: Small group activities for deeper learning</li>
                                <li>We use Zoom for maximum compatibility. You'll receive your unique join link after registration.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 4 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(4)}>
                            <h5>What technology do I need to attend?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 4 ? 'auto' : 0, overflow: 'hidden' }}>
                            Live Sessions are designed for accessibility:
                            <ul>
                                <li>Device: Any computer, tablet, or smartphone with internet access</li>
                                <li>Platform: Zoom (free download, or join via browser)</li>
                                <li>Connection: Stable internet connection recommended</li>
                                <li>Audio/Video: Microphone and camera optional but encouraged for participation</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 5 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(5)}>
                            <h5>Are Live Sessions appropriate for students AND experienced PMHNPs?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 5 ? 'auto' : 0, overflow: 'hidden' }}>
                            Absolutely. Our content is designed to serve multiple experience levels:
                            <ul>
                                <li>Students gain confidence and exam-relevant clinical knowledge</li>
                                <li>New Graduates bridge the gap between school and practice</li>
                                <li>Experienced PMHNPs sharpen skills, learn new protocols, and earn clinical pearls</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`faq-item ${openIndex === 6 ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(6)}>
                            <h5>When do Live Sessions start?</h5>
                            <div className="faq-icon">+</div>
                        </div>
                        <div className="faq-answer" style={{ height: openIndex === 6 ? 'auto' : 0, overflow: 'hidden' }}>
                            Our next 8-week series begins in March 2025. Sessions run every Saturday at 11:00 AM MST
                            <br />Key Details:
                            <ul>
                                <li>Pay-as-you-go model — purchase individual sessions anytime</li>
                                <li>Limited to 30 participants per session for optimal interaction</li>
                                <li>New sessions added regularly — check our website for the current schedule</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import React from 'react';

const WhatYouLearn = () => {
    return (
        <section className="what-you-learn">
            <div className="custom-container">
                <div className="global-header">
                    <h2>What You Will Learn</h2>
                    <p>Each learning outcome is designed to be immediately applicable in your clinical rotations, your
                        practice, and your board preparation.</p>
                </div>
                <div className="learn-wrapper">
                    <div className="learn-card">
                        <span className="number">1</span>
                        <div className="side-content">
                            <h5>Conduct a Structured Psychiatric Interview from Open to Close</h5>
                            <p>Apply a systematic interview framework that keeps encounters focused, thorough, and
                                clinically meaningful regardless of patient complexity.</p>
                        </div>
                    </div>
                    <div className="learn-card">
                        <span className="number">2</span>
                        <div className="side-content">
                            <h5>Document a Complete and Accurate Mental Status Examination</h5>
                            <p>Write MSE findings using precise, clinically defensible language across all nine domains —
                                and understand why each domain matters diagnostically.</p>
                        </div>
                    </div>
                    <div className="learn-card">
                        <span className="number">3</span>
                        <div className="side-content">
                            <h5>Distinguish Clinically Significant Findings from Background Noise</h5>
                            <p>Identify which observations carry diagnostic weight, which require follow-up, and which to
                                include — or exclude — from your documentation.</p>
                        </div>
                    </div>
                    <div className="learn-card">
                        <span className="number">4</span>
                        <div className="side-content">
                            <h5>Navigate Challenging Moments in the Psychiatric Encounter</h5>
                            <p>Apply targeted techniques for managing resistance, disorganized patients, and emotionally
                                charged presentations without losing your structure.</p>
                        </div>
                    </div>
                    <div className="learn-card">
                        <span className="number">5</span>
                        <div className="side-content">
                            <h5>Align Interview Findings with Diagnostic Formulation</h5>
                            <p>Connect what you observe and document in the MSE to your differential diagnosis — a critical
                                skill for both clinical practice and the ANCC exam.</p>
                        </div>
                    </div>
                    <div className="learn-card">
                        <span className="number">6</span>
                        <div className="side-content">
                            <h5>Strengthen Documentation Habits That Reduce Liability</h5>
                            <p>Build charting language that is specific, objective, and defensible — habits that protect you
                                and support continuity of care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouLearn;

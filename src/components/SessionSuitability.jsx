import React from 'react';

const SessionSuitability = () => {
    return (
        <section className="session-right-you">
            <div className="custom-container">
                <div className="global-header">
                    <h2>Is This Session Right for You?</h2>
                    <p>This session is designed for a specific kind of learner. Here is how to know if it is a strong fit.
                    </p>
                </div>
                <div className="flex-box">
                    <div className="session-card gradient-bg">
                        <h4>This Is for You If…</h4>
                        <ul>
                            <li>
                                <span><img src="assets/images/white-tick-icon.png" alt="" /></span>
                                <p>You are approaching your first clinical rotation and want to walk in with structure, not
                                    anxiety</p>
                            </li>
                            <li>
                                <span><img src="assets/images/white-tick-icon.png" alt="" /></span>
                                <p>You are approaching your first clinical rotation and want to walk in with structure, not
                                    anxiety</p>
                            </li>
                            <li>
                                <span><img src="assets/images/white-tick-icon.png" alt="" /></span>
                                <p>You are approaching your first clinical rotation and want to walk in with structure, not
                                    anxiety</p>
                            </li>
                            <li>
                                <span><img src="assets/images/white-tick-icon.png" alt="" /></span>
                                <p>You are approaching your first clinical rotation and want to walk in with structure, not
                                    anxiety</p>
                            </li>
                        </ul>
                    </div>
                    <div className="session-card">
                        <h4>This Is Not for You If…</h4>
                        <ul>
                            <li>
                                <span><img src="assets/images/white-cross-icon.png" alt="" /></span>
                                <p>You are looking for a passive lecture with no practical application or clinical context
                                </p>
                            </li>
                            <li>
                                <span><img src="assets/images/white-cross-icon.png" alt="" /></span>
                                <p>You want an advanced psychopharmacology session — this session focuses on assessment and
                                    interviewing skills</p>
                            </li>
                            <li>
                                <span><img src="assets/images/white-cross-icon.png" alt="" /></span>
                                <p>You are not a PMHNP student, trainee, or practicing psychiatric clinician</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionSuitability;

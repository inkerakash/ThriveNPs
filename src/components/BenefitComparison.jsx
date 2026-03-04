import React from 'react';

const BenefitComparison = () => {
    return (
        <section className="what-change-after-section">
            <div className="custom-container">
                <div className="global-header full-width">
                    <h2>What Changes After This Session</h2>
                </div>
                <div className="flex-box">
                    <div className="change-after-card">
                        <h4>Before</h4>
                        <p>You enter the room with a loose mental checklist
                            and hope the encounter flows. Your interviews
                            drift depending on what the patient brings up.
                            Your MSE documentation tends to be vague —
                            words like "appropriate" and "normal limits" filling
                            in where specific clinical language should be.
                            You leave some encounters unsure whether you
                            captured what mattered.</p>
                    </div>
                    <div className="change-after-card bg-gradient">
                        <h4>After</h4>
                        <p>You have a structured, repeatable approach you
                            can follow with any patient — new intake or
                            established, complex or straightforward. Your
                            MSE reads like it was written by a confident
                            clinician. You know exactly what to observe, what
                            to ask, and how to document it. Encounters feel
                            purposeful. Your notes protect you and tell the
                            clinical story clearly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitComparison;

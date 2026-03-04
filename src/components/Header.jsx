import React from 'react';

const Header = () => {
    return (
        <section className="top-bar">
            <div className="custom-container">
                <div className="flex-box">
                    <a href="#" className="logo-box">
                        <img src="assets/images/logo.svg" alt="" />
                    </a>
                    <ul className="contact-info">
                        <li>
                            <span><img src="assets/images/call-icon.png" alt="" /></span>
                            <a href="tel:(708) 334-5494">
                                (708) 334-5494
                            </a>
                        </li>
                        <li>
                            <span><img src="assets/images/clock-icon.png" alt="" /></span>
                            <a href="#">
                                Office Hours: Mon-Fri, 9am -5pm (PT)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;

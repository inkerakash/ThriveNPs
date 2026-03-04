import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WebinarBenefits from './components/WebinarBenefits';
import Testimonials from './components/Testimonials';
import GetReady from './components/GetReady';
import SessionSuitability from './components/SessionSuitability';
import BenefitComparison from './components/BenefitComparison';
import WhatYouLearn from './components/WhatYouLearn';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VideoPopup from './components/VideoPopup';

function App() {
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (src) => {
        setActiveVideo(src);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <Header />
            <Hero onVideoTrigger={openVideo} />
            <WebinarBenefits />
            <Testimonials onVideoTrigger={openVideo} />
            <GetReady />
            <SessionSuitability />
            <BenefitComparison />
            <WhatYouLearn />
            <FAQ />
            <Footer />
            <VideoPopup videoSrc={activeVideo} onClose={closeVideo} />
        </>
    );
}

export default App;

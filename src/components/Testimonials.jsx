import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Testimonials = ({ onVideoTrigger }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperRef, setSwiperRef] = useState(null);

    const slidesData = [
        {
            id: 'testimonial-02',
            name: "April",
            image: "assets/images/succes-story-thumb-1.png",
            videoParams: "https://ik.imagekit.io/old1moia3/Testimonial/Testimonial-02.mp4",
            text: "I was overwhelmed with the credentialing process until I joined ThriveNPS. My mentor walked me through every step."
        },
        {
            id: 'testimonial-03',
            name: "Izy",
            image: "assets/images/succes-story-thumb-2.png",
            videoParams: "https://ik.imagekit.io/old1moia3/Testimonial/Testimonial-03.mp4",
            text: "Lakeisha's guidance transformed not just my practice, but my entire approach to patient care and business management."
        },
        {
            id: 'testimonial-01',
            name: "Olivia",
            image: "assets/images/succes-story-thumb-3.png",
            videoParams: "https://ik.imagekit.io/old1moia3/Testimonial/Testimonial-01.mov",
            text: "The mentorship program gave me the confidence and tools I needed to launch my private practice. Within 90 days, I had my first clients."
        }
    ];

    // duplicate slides for smooth continuous loop in swiper since 3 items isn't enough for native looping with slidesPerView=2
    const duplicatedSlides = [...slidesData, ...slidesData];

    return (
        <section className="client-testimonial">
            <div className="container-fluid">
                <div className="global-header">
                    <h2>Success Stories from Our Alumni</h2>
                    <p>Hear from PMHNPs who have transformed their careers with ThriveNPs.</p>
                </div>
                <div id="clientTestimonial" className="owl-carousel owl-theme owl-loaded">
                    <Swiper
                        modules={[Autoplay]}
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % 3)}
                        spaceBetween={25}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {duplicatedSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="client-Item">
                                    <div className="testimonial-icon">
                                        <img src={slide.image} alt="" />
                                        <button className="play-btn video-trigger" type="button" aria-label={`Play ${slide.name} testimonial video`}
                                            data-video-src={slide.videoParams}
                                            onClick={() => onVideoTrigger(slide.videoParams)}>
                                            <img src="assets/images/Button-Play-video.png" alt="" />
                                        </button>
                                    </div>
                                    <div className="client-info">
                                        <img src="assets/images/pause-icon.png" alt="" className="info-icon" />
                                        <p>{slide.text}</p>
                                        <div className="info-head">
                                            <h4>{slide.name}</h4>
                                            <h6>PMHNP Student</h6>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Map custom generated dots mathematically mapped to the loop elements */}
                    <div className="owl-dots client-testimonial-pagination" style={{ textAlign: 'center', marginTop: '10px' }}>
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                className={`owl-dot ${activeIndex === idx ? 'active' : ''}`}
                                onClick={() => {
                                    if (swiperRef && typeof swiperRef.slideToLoop === 'function') {
                                        swiperRef.slideToLoop(idx);
                                    }
                                }}
                            >
                                <span></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

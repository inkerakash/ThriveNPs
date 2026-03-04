// Client Testimonial
$('#clientTestimonial').owlCarousel({
    nav: false,
    dots: true,
    center:true,
    items: 3,
    loop: true,
    margin:25,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

// faq
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach(el => {
            if (el !== item) {
                const otherAnswer = el.querySelector(".faq-answer");
                el.classList.remove("active");
                otherAnswer.style.height = 0;
            }
        });

        if (item.classList.contains("active")) {
            answer.style.height = 0;
            item.classList.remove("active");
        } else {
            item.classList.add("active");
            answer.style.height = answer.scrollHeight + "px";
        }
    });
});


// counter
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const startCounting = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.banner-counter'));

// webinar countdown
const countdownElement = document.querySelector('.countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');

if (countdownElement && daysElement && hoursElement && minutesElement) {
    const targetDateString = countdownElement.getAttribute('data-target-datetime');
    const targetTime = targetDateString ? new Date(targetDateString).getTime() : NaN;

    if (!Number.isNaN(targetTime)) {
        const dayMs = 1000 * 60 * 60 * 24;
        const hourMs = 1000 * 60 * 60;
        const minuteMs = 1000 * 60;
        let countdownTimer = null;

        const renderCountdown = () => {
            const now = Date.now();
            const remaining = targetTime - now;

            if (remaining <= 0) {
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                if (countdownTimer) {
                    clearInterval(countdownTimer);
                }
                return;
            }

            const days = Math.floor(remaining / dayMs);
            const hours = Math.floor((remaining % dayMs) / hourMs);
            const minutes = Math.floor((remaining % hourMs) / minuteMs);

            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
        };

        renderCountdown();
        countdownTimer = setInterval(renderCountdown, 1000);
    }
}

// testimonial video popup
const videoPopup = document.getElementById('videoPopup');
const popupVideoPlayer = document.getElementById('videoPopupPlayer');
const videoTriggers = document.querySelectorAll('.video-trigger');

const closeVideoPopup = () => {
    if (!videoPopup || !popupVideoPlayer) return;
    videoPopup.classList.remove('active');
    videoPopup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('video-popup-open');
    popupVideoPlayer.pause();
    popupVideoPlayer.removeAttribute('src');
    popupVideoPlayer.load();
};

const openVideoPopup = (videoSrc) => {
    if (!videoPopup || !popupVideoPlayer || !videoSrc) return;
    popupVideoPlayer.src = videoSrc;
    videoPopup.classList.add('active');
    videoPopup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('video-popup-open');
    popupVideoPlayer.play().catch(() => {});
};

videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        openVideoPopup(trigger.getAttribute('data-video-src'));
    });
});

if (videoPopup) {
    videoPopup.addEventListener('click', (event) => {
        if (event.target.closest('.video-popup-close')) {
            event.preventDefault();
            closeVideoPopup();
            return;
        }
        if (event.target === videoPopup) {
            closeVideoPopup();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && videoPopup && videoPopup.classList.contains('active')) {
        closeVideoPopup();
    }
});

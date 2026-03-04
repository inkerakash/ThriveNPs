import React, { useEffect, useRef } from 'react';

const VideoPopup = ({ videoSrc, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoSrc && videoRef.current) {
            videoRef.current.play().catch(() => { });
            document.body.classList.add('video-popup-open');
        } else {
            document.body.classList.remove('video-popup-open');
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.classList.remove('video-popup-open');
        };
    }, [videoSrc, onClose]);

    if (!videoSrc) return null;

    return (
        <div className="video-popup active" id="videoPopup" onClick={onClose} aria-hidden="false">
            <div className="video-popup-dialog" role="dialog" aria-modal="true" aria-label="Testimonial video" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="video-popup-close" aria-label="Close video popup" onClick={onClose}>×</button>
                <video id="videoPopupPlayer" ref={videoRef} src={videoSrc} controls playsInline preload="metadata"></video>
            </div>
        </div>
    );
};

export default VideoPopup;

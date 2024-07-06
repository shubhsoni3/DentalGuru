import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ScrollTop() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <a href="https://wa.me/+917440992424" target="_blank" rel="noopener noreferrer">+91-7440992424
        <div
            onClick={scrollToTop}
            id="back-to-top"
            className="whatsup-only rounded-pill "
            style={{
                position: 'fixed',
                bottom: '80px',
                right: '20px',
                cursor: 'pointer',
                display: 'inline',
                backgroundColor: '#25D366',
            }}
        >
         <FaWhatsapp className="fea icon-lg icons align-middle mt-2"  />
        </div>
        </a>
    );
}

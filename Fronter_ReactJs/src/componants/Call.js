import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ScrollTop() {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <Container >
        <Link to="tel:+91-7440992424" >+91-7440992424
        <div
            onClick={scrollToTop}
            id="back-to-top"
            className="whatsup-only rounded-pill "
            style={{
                position: 'fixed',
                bottom: '150px',
                right: '22px',
                cursor: 'pointer',
                display: 'inline',
                backgroundColor: '#202942',
            }}
        >
         <FiPhoneCall className="fea icon-lg icons align-middle mt-2 no-border"  />
        </div>
        </Link>
        </Container >
    );
} 
const Container = styled.div`

`; 
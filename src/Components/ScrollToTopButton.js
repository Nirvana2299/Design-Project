import './../App.css'
import React, { useState } from 'react';
import {motion} from 'framer-motion'

const ScrollToTopButton = () => {
    const [scrollTop, setScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrollTop(true);
        } else {
            setScrollTop(false);
        }
    };

    // Add a scroll event listener when the component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.button
        transition={{duration: 0.9}}
        animate={{scale: 1}} 
        initial={{scale: 0}}
            className={`xc wf xf ie ld vg sr gh tr g sa ta _a ${scrollTop ? 'uc' : ''}`}
            onClick={scrollToTop}
        >
            <svg
                className="uh se qd"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
            </svg>
        </motion.button>
    );
};

export default ScrollToTopButton;

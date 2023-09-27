import { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Reveal from '../Components/Reveal';
import './../App.css'
import 'swiper/css'
import 'swiper/element'

import testimonial from './../images/testimonial.png'
import iconQoute from './../images/icon-quote.svg'
import brandLight02 from './../images/brand-light-02.svg'

function TestimonialSection() {
    // Define React state to manage data
    const [sectionTitle] = useState("Client’s Testimonials");
    const [sectionTitleText] = useState(
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
    );

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    // const swiper = useSwiper()
    return (
        <section className="hj rp hr">
            <Reveal>
                <div>
                    <div className="animate_top bb ze rj ki xn vq">
                        <h2>{sectionTitle}</h2>
                        <p>{sectionTitleText}</p>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className="bb ze ki xn ar">
                    <div className="animate_top jb cq">
                        <Swiper ref={sliderRef}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="i hh rm sg vk xm bi qj">
                                    <span className="rc je md/2 gh xg h q r"></span>
                                    <span className="rc je md/2 mh yg h q p"></span>
                                    <div className="tc sf rn tn un zf dp">
                                        <img className="bf" src={testimonial} alt="User" />
                                        <div>
                                            <img src={iconQoute} alt="Quote" />
                                            <p className="ek ik xj _p kc fb">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed,
                                                ullamcorper semper ligula. Mauris consequat justo volutpat.
                                            </p>
                                            <div className="tc yf vf">
                                                <div>
                                                    <span className="rc ek xj kk wm zb">Devid Smith</span>
                                                    <span className="rc">Founder @democompany</span>
                                                </div>
                                                <img className="rk" src={brandLight02} alt="Brand" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="i hh rm sg vk xm bi qj">
                                    <span className="rc je md/2 gh xg h q r"></span>
                                    <span className="rc je md/2 mh yg h q p"></span>
                                    <div className="tc sf rn tn un zf dp">
                                        <img className="bf" src={testimonial} alt="User" />
                                        <div>
                                            <img src={iconQoute} alt="Quote" />
                                            <p className="ek ik xj _p kc fb">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor diam, feugiat quis enim sed,
                                                ullamcorper semper ligula. Mauris consequat justo volutpat.
                                            </p>
                                            <div className="tc yf vf">
                                                <div>
                                                    <span className="rc ek xj kk wm zb">Devid Smith</span>
                                                    <span className="rc">Founder @democompany</span>
                                                </div>
                                                <img className="rk" src={brandLight02} alt="Brand" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="tc wf xf fg jb">
                            <div onClick={handlePrev} className="swiper-button-prev c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                                <svg className="th lm" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.52366 7.83336L7.99366 12.3034L6.81533 13.4817L0.333663 7.00002L6.81533 0.518357L7.99366 1.69669L3.52366 6.16669L13.667 6.16669L13.667 7.83336L3.52366 7.83336Z"
                                        fill='true' />
                                </svg>
                            </div>
                            <div onClick={handleNext} className="swiper-button-next c tc wf xf ie ld rg _g dh pf ml vr hh rm tl zm rl ym">
                                <svg className="th lm" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"
                                        fill='true' />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section >
    );
}

export default TestimonialSection;

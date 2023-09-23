import './../App.css';
import shape01 from './../images/shape-01.svg'
import shape02 from './../images/shape-02.svg'
import shape03 from './../images/shape-03.svg'
import shape04 from './../images/shape-04.svg'
import shape05 from './../images/shape-05.svg'
import shape06 from './../images/shape-06.svg'
import shape07 from './../images/shape-07.svg'

import hero from './../images/hero.png'
import iconPlay from './../images/icon-play.svg'

import about01 from './../images/about-01.png'
import about02 from './../images/about-02.png'
import icon01 from './../images/icon-01.svg'
import icon02 from './../images/icon-02.svg'
import icon03 from './../images/icon-03.svg'

function HeroSection() {
    return (
        <>
            <section class="gj do ir hj sp jr i pg">

                <div class="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
                    <img src={shape01} alt="shape" class="xc 2xl:ud-block h t -ud-left-[10%] ua" />
                    <img src={shape02} alt="shape" class="xc 2xl:ud-block h u p va" />
                    <img src={shape03} alt="shape" class="xc 2xl:ud-block h v w va" />
                    <img src={shape04} alt="shape" class="h q r" />
                    <img src={hero} alt="Woman" class="h q r ua" />
                </div>

                <div class="bb ze ki xn 2xl:ud-px-0">
                    <div class="tc _o">
                        <div class="animate_left jn/2">
                            <h1 class="fk vj zp or kk wm wb">We specialize in UI/UX, Web Development, Digital Marketing.
                            </h1>
                            <p class="fq">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris.
                                Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
                            </p>
                            <div class="tc tf yo zf mb">
                                <a href="#" class="ek jk lk gh gi hi rg ml il vc _d _l">Get Started Now</a>
                                <span class="tc sf">
                                    <a href="#" class="inline-block ek xj kk wm"> Call us (0123) 456 – 789 </a>
                                    <span class="inline-block">For any question or concern</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div class="bb ze ki yn 2xl:ud-px-12.5">
                    <div class="tc uf zo xf ap zf bp mq">

                        <div class="animate_top kn to/3 tc cg oq">
                            <div class="tc wf xf cf ae cd rg mh">
                                <img src={icon01} alt="Icon" />
                            </div>
                            <div>
                                <h4 class="ek yj go kk wm xb">24/7 Support</h4>
                                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                            </div>
                        </div>

                        <div class="animate_top kn to/3 tc cg oq">
                            <div class="tc wf xf cf ae cd rg nh">
                                <img src={icon02} alt="Icon" />
                            </div>
                            <div>
                                <h4 class="ek yj go kk wm xb">Take Ownership</h4>
                                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                            </div>
                        </div>

                        <div class="animate_top kn to/3 tc cg oq">
                            <div class="tc wf xf cf ae cd rg oh">
                                <img src={icon03} alt="Icon" />
                            </div>
                            <div>
                                <h4 class="ek yj go kk wm xb">Team Work</h4>
                                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ji gp uq 2xl:ud-py-35 pg">
                <div class="bb ze ki xn wq">
                    <div class="tc wf gg qq">

                        <div class="animate_left xc gn gg jn/2 i">
                            <div>
                                <img src={shape05} alt="Shape" class="h -ud-left-5 x" />
                                <img src={about01} alt="About" class="ib" />
                                <img src={about02} alt="About" />
                            </div>
                            <div>
                                <img src={shape06} alt="Shape" />
                                <img src={shape03} alt="About" class="ob gb" />
                                <img src={shape07} alt="Shape" class="bb" />
                            </div>
                        </div>

                        <div class="animate_right jn/2">
                            <h4 class="ek yj mk gb">Why Choose Us</h4>
                            <h2 class="fk vj zp pr kk wm qb">We Make Our customers happy by giving Best services.</h2>
                            <p class="uo">It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                            <a href="#" data-fslightbox class="vc wf hg mb">
                                <span class="tc wf xf be dd rg i gh ua">
                                    <span class="nf h vc yc vd rg gh qk -ud-z-1"></span>
                                    <img src={iconPlay} alt="Play" />
                                </span>
                                <span class="kk">SEE HOW WE WORK</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
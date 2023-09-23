import './../App.css'

import shape11 from './../images/shape-11.svg'
import shape07 from './../images/shape-07.svg'
import shape14 from './../images/shape-14.svg'
import shape15 from './../images/shape-15.svg'

import brandLight01 from './../images/brand-light-01.svg'
import brandLight02 from './../images/brand-light-02.svg'
import brandLight03 from './../images/brand-light-03.svg'
import brandLight04 from './../images/brand-light-04.svg'
import brandLight05 from './../images/brand-light-05.svg'
import brandLight06 from './../images/brand-light-06.svg'

function Brand() {
    return (
        <>
        <section class="i pg qh rm ji hp">
            <img src={shape11} alt="Shape" class="of h ga ha ke" />
            <img src={shape07} alt="Shape" class="h ia o ae jf" />
            <img src={shape14} alt="Shape" class="h ja ka" />
            <img src={shape15} alt="Shape" class="h q p" />
            <div class="bb ze i va ki xn br">
                <div class="tc uf sn tn xf un gg">
                    <div class="animate_top me/5 ln rj">
                        <h2 class="gk vj zp or kk wm hc">785</h2>
                        <p class="ek bk aq">Global Brands</p>
                    </div>
                    <div class="animate_top me/5 ln rj">
                        <h2 class="gk vj zp or kk wm hc">533</h2>
                        <p class="ek bk aq">Happy Clients</p>
                    </div>
                    <div class="animate_top me/5 ln rj">
                        <h2 class="gk vj zp or kk wm hc">865</h2>
                        <p class="ek bk aq">Winning Award</p>
                    </div>
                    <div class="animate_top me/5 ln rj">
                        <h2 class="gk vj zp or kk wm hc">346</h2>
                        <p class="ek bk aq">Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="pj vp mr">

            <div>
                <div class="animate_top bb ze rj ki xn vq">
                        <h2 class="fk vj pr kk wm on/5 gq/2 bb _b">Trusted by Global Brands</h2>
                        <p class="bb on/5 wo/5 hq" x-text="sectionTitleText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                </div>
            </div>

            <div class="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
                <div class="wc rf qn zf cp kq xf wf">
                    <a href="#" class="rc animate_top">
                        <img class="th wl ml il zl om" src={brandLight01} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-01.svg" alt="Clients" />
                    </a>
                    <a href="#" class="rc animate_top">
                        <img class="tk ml il zl om" src={brandLight02} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-02.svg" alt="Clients" />
                    </a>
                    <a href="#" class="rc animate_top">
                        <img class="tk ml il zl om" src={brandLight03} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-03.svg" alt="Clients" />
                    </a>
                    <a href="#" class="rc animate_top">
                        <img class="tk ml il zl om" src={brandLight04} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-04.svg" alt="Clients" />
                    </a>
                    <a href="#" class="rc animate_top">
                        <img class="tk ml il zl om" src={brandLight05} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-05.svg" alt="Clients" />
                    </a>
                    <a href="#" class="rc animate_top">
                        <img class="tk ml il zl om" src={brandLight06} alt="Clients" />
                        <img class="xc sk ml il zl nm" src="images/brand-dark-06.svg" alt="Clients" />
                    </a>
                </div>
            </div>
        </section>
        </>
    )
};

export default Brand;
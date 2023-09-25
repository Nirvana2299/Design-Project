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
    const icons = [
        {
            brand: brandLight01,
            link: '#'
        },
        {
            brand: brandLight02,
            link: '#'
        },
        {
            brand: brandLight03,
            link: '#'
        },
        {
            brand: brandLight04,
            link: '#'
        },
        {
            brand: brandLight05,
            link: '#'
        },
        {
            brand: brandLight06,
            link: '#'
        },
    ]
    return (
        <div>
            <section className="i pg qh rm ji hp">
                <img src={shape11} alt="Shape" className="of h ga ha ke" />
                <img src={shape07} alt="Shape" className="h ia o ae jf" />
                <img src={shape14} alt="Shape" className="h ja ka" />
                <img src={shape15} alt="Shape" className="h q p" />
                <div className="bb ze i va ki xn br">
                    <div className="tc uf sn tn xf un gg">
                        <div className="animate_top me/5 ln rj">
                            <h2 className="gk vj zp or kk wm hc">785</h2>
                            <p className="ek bk aq">Global Brands</p>
                        </div>
                        <div className="animate_top me/5 ln rj">
                            <h2 className="gk vj zp or kk wm hc">533</h2>
                            <p className="ek bk aq">Happy Clients</p>
                        </div>
                        <div className="animate_top me/5 ln rj">
                            <h2 className="gk vj zp or kk wm hc">865</h2>
                            <p className="ek bk aq">Winning Award</p>
                        </div>
                        <div className="animate_top me/5 ln rj">
                            <h2 className="gk vj zp or kk wm hc">346</h2>
                            <p className="ek bk aq">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pj vp mr">

                <div>
                    <div className="animate_top bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Trusted by Global Brands</h2>
                        <p className="bb on/5 wo/5 hq" x-text="sectionTitleText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                    </div>
                </div>

                <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
                    <div className="wc rf qn zf cp kq xf wf">
                        {icons.map((icon) => {
                            return (
                                <a href={icon.link} className="rc animate_top">
                                    <img className="th wl ml il zl om" src={icon.brand} alt="Clients" />
                                    {/* <img className="xc sk ml il zl nm" src="images/brand-dark-01.svg" alt="Clients" /> */}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Brand;
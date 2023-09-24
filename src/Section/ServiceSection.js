import './../App.css'
import icon04 from './../images/icon-04.svg'
import icon05 from './../images/icon-05.svg'
import icon06 from './../images/icon-06.svg'
import icon07 from './../images/icon-07.svg'

function ServiceSection() {
    return (
        <section className="lj tp kr">
            <div className="animate_top bb ze rj ki xn vq">
                <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">We Offer The Best Quality Service for You</h2>
                <p className="bb on/5 wo/5 hq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
            </div>
            <div className="bb ze ki xn yq mb en">
                <div className="wc qf pn xo ng">

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon04} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">Crafted for Startups</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon05} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">High-quality Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon06} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">All Essential Sections</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon07} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">Speed Optimized</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon05} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">Fully Customizable</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    <div className="animate_top sg oi pi zq ml il am cn _m">
                        <img src={icon06} alt="Icon" />
                        <h4 className="ek zj kk wm nb _b">Regular Updates</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
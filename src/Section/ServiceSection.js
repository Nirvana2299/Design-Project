import './../App.css'
import icon04 from './../images/icon-04.svg'
import icon05 from './../images/icon-05.svg'
import icon06 from './../images/icon-06.svg'
import icon07 from './../images/icon-07.svg'
import healthSaftey from './../images/health-and-safety.svg'
import Reveal from '../Components/Reveal'

function ServiceSection() {

    const Services = [
        {
            id: 1,
            icon: icon04,
            title: 'Crafted for Startups',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            id: 2,
            icon: icon05,
            title: 'High-quality Design',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            id: 3,
            icon: icon06,
            title: 'All Essential Sections',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            id: 4,
            icon: icon07,
            title: 'Speed Optimized',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            id: 5,
            icon: icon05,
            title: 'Fully Customizable',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            id: 6,
            icon: icon06,
            title: 'Regular Updates',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
    ]

    return (
        <section className="lj tp kr">
            <Reveal>
                <div className="animate_top bb ze rj ki xn vq">
                    <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">We Offer The Best Quality Service for You</h2>
                    <p className="bb on/5 wo/5 hq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                </div>
            </Reveal>
            <div className="bb ze ki xn yq mb en">
                <div className="wc qf pn xo ng">

                    {Services.map((service) => {
                        return (
                            <Reveal>
                                <div key={service.id} className="animate_top sg oi pi zq ml il am cn _m">
                                    <img className='inline-block' src={service.icon} alt="Icon" />
                                    <h4 className="ek zj kk wm nb _b inline-block ml-3 2xl:ml-4">{service.title}</h4>
                                    <p className='ml-16 2xl:ml-20 inline-block'>{service.discription}</p>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
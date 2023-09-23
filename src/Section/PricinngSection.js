import React, { useState } from 'react';
import shape03 from './../images/shape-03.svg'
import shape06 from './../images/shape-06.svg'
import shape07 from './../images/shape-07.svg'
import shape12 from './../images/shape-12.svg'
import shape13 from './../images/shape-13.svg'

const PricingPlan = ({ plan, billPlan, onToggleBilling, onTryFree }) => {
    const monthlyPrice = plan.price.monthly;
    const annuallyPrice = plan.price.annually;

    return (
        <div className="animate_top rj sg hh sm vk xm hi nj oj">
            <h4 className="wj kk wm fb">{plan.name}</h4>
            <div className={`tc wf xf kg cc ${plan.name === 'Basic' ? 'text-green-500' : ''}`}>
                <h2 className='fk _j kk wm'>{billPlan === 'monthly' ? `$${monthlyPrice}` : `$${annuallyPrice}`}</h2>
                <span className='sc ak kk wm'>{billPlan === 'monthly' ? '/per month' : '/per year'}</span>
            </div>
            <p className="ur dc">No credit card required</p>
            <a href="#" className={`ek rg lk ml il gi ri ${plan.name === 'Growth Plan' ? 'gh sl' : 'mh tl'}`} onClick={() => onTryFree(plan)}>
                Try for free
            </a>
            <ul className="tc sf bg ob fb">
                {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
            <p className="kk wm">7-day free trial</p>
        </div>
    );
};

const PricingSection = () => {
    const [billPlan, setBillPlan] = useState('monthly'); // Initialize with monthly as default

    const plans = [
        // Define your plans here as objects with name, price, and features properties
        // Example:
        {
            name: 'Starter', price: { monthly: 29, annually: 149 }, features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support']
        },
        {
            name: 'Growth Plan', price: { monthly: 59, annually: 608 }, features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support']
        },
        {
            name: 'Business', price: { monthly: 139, annually: 1568 }, features: ['400 GB Storage', 'Unlimited Photos & Videos', 'Exclusive Support']
        }
    ];

    const toggleBilling = () => {
        setBillPlan((prevBillPlan) => (prevBillPlan === 'monthly' ? 'annually' : 'monthly'));
    };

    const tryFree = (plan) => {
        // Handle the "Try for free" action here
    };

    return (
        <section className="i pg fh rm ji gp uq">
            {/* Add your images here */}
            <img src={shape06} alt="Shape" class="h aa y" />
            <img src={shape03} alt="Shape" class="h ca u" />
            <img src={shape07} alt="Shape" class="h w da ee" />
            <img src={shape12} alt="Shape" class="h p s" />
            <img src={shape13} alt="Shape" class="h r q" />
            <div>
                <div className="animate_top bb ze rj ki xn vq">
                    <h2 className='fk vj pr kk wm on/5 gq/2 bb _b'>We Offer Great Affordable Premium Prices.</h2>
                    <p className='bb on/5 wo/5 hq'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using.
                    </p>
                </div>
            </div>

            <div className="tc wf xf jb og">
                <span className="ek kk wm">Bill Monthly</span>
                <button className="i rg gm" onClick={toggleBilling}>
                    {/* Add your toggle switch UI here */}
                    <div class="fe id bl gh rg xk outline-none"></div>
                    <div class={`h vc wf xf ge jd cl jl ml mf hh rg yk ea fa ${billPlan === 'monthly' ? 'ff' : 'gf'}`}></div>
                </button>
                <span className="ek kk wm">Bill Annually</span>
            </div>

            <div className="bb ze i va ki xn yq bc">
                <div className="wc qf pn xo jg">
                    {plans.map((plan, i) => (
                        <PricingPlan key={i} plan={plan} billPlan={billPlan} onToggleBilling={toggleBilling} onTryFree={tryFree} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

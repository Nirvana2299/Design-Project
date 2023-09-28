import React, { useState, useEffect } from 'react';
import project01 from './../images/project-01.png'
import project02 from './../images/project-02.png'
import project03 from './../images/project-03.png'
import project04 from './../images/project-04.png'
import Isotope from 'isotope-layout';
import Reveal from '../Components/Reveal';

const ProjectSection = () => {
    const [sectionTitle] = useState('We Offer Great Affordable Premium Prices.');
    const [sectionTitleText] = useState(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.'
    );

    const [isotope, setIsotop] = useState(null)
    const [filterTab, setFilterTab] = useState('*'); // Default filter is "*"

    // const handleFilterClick = (tab) => {
    //     setFilterTab(tab);
    // };

    useEffect(() => {
        setTimeout(() => {
            setIsotop(
                new Isotope('.projects-wrapper', {
                    itemSelector: '.project-item',
                    masonry: {
                        columnWidth: '.project-sizer'
                    },
                })
            );
            return () => isotope.destroy()
        }, 1500)
    }, [])

    useEffect(() => {
        if (filterTab === "*") isotope?.arrange({ filter: `*` });
        else isotope?.arrange({ filter: `.${filterTab}` });
    }, [filterTab]);

    // Sample project data
    const projects = [
        {
            id: 1,
            imageSrc: project01,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: 'branding ecommerce',
            link: '#'
        },
        {
            id: 2,
            imageSrc: project02,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: 'digital',
            link: '#'
        },
        {
            id: 3,
            imageSrc: project04,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: 'branding ecommerce',
            link: '#'
        },
        {
            id: 4,
            imageSrc: project03,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: 'digital ecommerce',
            link: '#'
        },
    ];

    // const filteredProjects = filterTab === 'all' ? projects : projects.filter(project => project.categories.includes(filterTab));

    return (
        <section className="pg pj vp mr oj wp nr">
            <Reveal>
                <div>
                    <div className="animate_top bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
                        <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
                    </div>
                </div>
            </Reveal>
            <div className="bb ze ki xn 2xl:ud-px-0 jb">
                <Reveal>
                    <div className="projects-tab _e bb tc uf wf xf cg rg hh rm vk xm si ti fc">
                        <button
                            onClick={() => setFilterTab('*')}
                            className={filterTab === '*' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilterTab('branding')}
                            className={filterTab === 'branding' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                        >
                            Branding Strategy
                        </button>
                        <button
                            onClick={() => setFilterTab('digital')}
                            className={filterTab === 'digital' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                        >
                            Digital Experiences
                        </button>
                        <button
                            onClick={() => setFilterTab('ecommerce')}
                            className={filterTab === 'ecommerce' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                        >
                            Ecommerce
                        </button>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="projects-wrapper tc -ud-mx-5">
                        <div className="project-sizer"></div>

                        {projects.map((project) => {
                            return (
                                <div className={`project-item wi fb vd ${project.imageSrc === project03 ? 'vo/3' : 'jn/2 to/3'} ${project.categories}`}>
                                    <div className="c i pg sg z-1">
                                        <img src={project.imageSrc} alt="Project" />
                                        <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                            <h4 className="ek tj kk hc">{project.title}</h4>
                                            <p>{project.description}</p>
                                            <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href={project.link}>
                                                <svg className="th lm ml il" width="25" height="25" viewBox="0 0 50 50" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ProjectSection;

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
    // const projects = [
    //     {
    //         id: 1,
    //         imageSrc: project01,
    //         title: 'Photo Retouching',
    //         description: 'Branded Ecommerce',
    //         categories: 'branding ecommerce',
    //         link: '#'
    //     },
    //     {
    //         id: 2,
    //         imageSrc: project02,
    //         title: 'Photo Retouching',
    //         description: 'Branded Ecommerce',
    //         categories: 'digital',
    //         link: '#'
    //     },
    //     {
    //         id: 3,
    //         imageSrc: project04,
    //         title: 'Photo Retouching',
    //         description: 'Branded Ecommerce',
    //         categories: 'branding ecommerce',
    //         link: '#'
    //     },
    //     {
    //         id: 4,
    //         imageSrc: project03,
    //         title: 'Photo Retouching',
    //         description: 'Branded Ecommerce',
    //         categories: 'digital ecommerce',
    //         link: '#'
    //     },
    // ];

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
                <div className="projects-wrapper tc -ud-mx-5">
                    <div className="project-sizer"></div>

                    {/* {projects.map((project) => {
                        return (
                        <div className={`project-item wi fb vd jn/2 to/3 ${project.categories}`}>
                            <div className="c i pg sg z-1">
                                <img src={project.imageSrc} alt="Project" />
                                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                    <h4 className="ek tj kk hc">{project.title}</h4>
                                    <p>{project.description}</p>
                                    <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href={project.link}>
                                        <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        )
                    })} */}
                    
                    <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
                        <div className="c i pg sg z-1">
                            <img src={project01} alt="Project" />
                            <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                <h4 className="ek tj kk hc">Photo Retouching</h4>
                                <p>Branded Ecommerce</p>
                                <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item wi fb vd jn/2 to/3 digital">
                        <div className="c i pg sg z-1">
                            <img src={project02} alt="Project" />
                            <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                <h4 className="ek tj kk hc">Photo Retouching</h4>
                                <p>Branded Ecommerce</p>
                                <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item wi fb vd jn/2 to/3 branding ecommerce">
                        <div className="c i pg sg z-1">
                            <img src={project04} alt="Project" />
                            <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                <h4 className="ek tj kk hc">Photo Retouching</h4>
                                <p>Branded Ecommerce</p>
                                <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item wi fb vd vo/3 digital ecommerce">
                        <div className="c i pg sg z-1">
                            <img src={project03} alt="Project" />
                            <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                                <h4 className="ek tj kk hc">Photo Retouching</h4>
                                <p>Branded Ecommerce</p>
                                <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                                    <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

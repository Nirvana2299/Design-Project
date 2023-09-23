import React, { useState } from 'react';
import project01 from './../images/project-01.png'
import project02 from './../images/project-02.png'
import project03 from './../images/project-03.png'
import project04 from './../images/project-04.png'
import ProjectItem from '../Components/ProjectItem';

const ProjectSection = () => {
    const [sectionTitle] = useState('We Offer Great Affordable Premium Prices.');
    const [sectionTitleText] = useState(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.'
    );

    const [filterTab, setFilterTab] = useState('all'); // Default filter is "all"

    const handleFilterClick = (tab) => {
        setFilterTab(tab);
    };

    // Sample project data
    const projects = [
        {
            id: 1,
            imageSrc: project01,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: ['branding', 'ecommerce'],
        },
        {
            id: 2,
            imageSrc: project02,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: ['digital'],
        },
        {
            id: 3,
            imageSrc: project03,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: ['digital'],
        },
        {
            id: 4,
            imageSrc: project04,
            title: 'Photo Retouching',
            description: 'Branded Ecommerce',
            categories: ['branding', 'ecommerce'],
        },
    ];

    // Filter projects based on the selected tab
    const filteredProjects = filterTab === 'all' ? projects : projects.filter(project => project.categories.includes(filterTab));

    return (
        <section className="pg pj vp mr oj wp nr">
            <div>
                <div className="animate_top bb ze rj ki xn vq">
                    <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">{sectionTitle}</h2>
                    <p className="bb on/5 wo/5 hq">{sectionTitleText}</p>
                </div>
            </div>

            <div className="bb ze ki xn 2xl:ud-px-0 jb">
                <div className="projects-tab _e bb tc uf wf xf cg rg hh rm vk xm si ti fc">
                    <button
                        onClick={() => handleFilterClick('all')}
                        className={filterTab === 'all' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleFilterClick('branding')}
                        className={filterTab === 'branding' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                    >
                        Branding Strategy
                    </button>
                    <button
                        onClick={() => handleFilterClick('digital')}
                        className={filterTab === 'digital' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                    >
                        Digital Experiences
                    </button>
                    <button
                        onClick={() => handleFilterClick('ecommerce')}
                        className={filterTab === 'ecommerce' ? 'project-tab-btn ek rg ml il vi mi gh lk' : 'project-tab-btn ek rg ml il vi mi'}
                    >
                        Ecommerce
                    </button>
                </div>

                <div className="projects-wrapper tc -ud-mx-5">
                    {/* <div class="project-sizer"></div> */}
                    {filteredProjects.map((project) => (
                        <ProjectItem
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

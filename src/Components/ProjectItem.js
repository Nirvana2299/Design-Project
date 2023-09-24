import React from 'react';
import './../App.css'

const ProjectItem = ({ imageSrc, title, description }) => {
    return (
        <div className="project-item wi fb vd jn/2 to/3">
            <div className="c i pg sg z-1">
                <img src={imageSrc} alt="Project" />
                <div className="h s r df nl kl im tc sf wf xf vd yc sg al hh/20 z-10">
                    <h4 className="ek tj kk hc">{title}</h4>
                    <p>{description}</p>
                    <a className="c tc wf xf ie ld rg _g dh ml il ph jm km jc" href="#">
                        <svg className="th lm ml il" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;

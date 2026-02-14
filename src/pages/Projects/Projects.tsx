import React, { useRef, useEffect, useState } from 'react'
import './Projects.scss';
import IntroProjectBackground from '../../assets/staticImages/imageFive.png';
import ProjectImage from '../../assets/staticImages/imageThree.png';
import ProjectItem from './ProjectItem';
import { client } from '../../lib/client';

type project = {
    id: number,
    name: string,
    description: string,
    images: any,
    link: string
}


function Projects() {
    const about_ref = useRef(null);
    const arr = [1,2,3,4,5]
    const [projects, setProjects] = useState<Array<project>>([])
    const [error, setError] = useState<any>(false)
    useEffect(() => {
        client.fetch(`*[_type == "projects"]{
            id,
            name,
            description,
            images[]{
                asset->{ url }
            },
            link
        }`)
        .then((data: any) => setProjects(data))
        .catch((console) => setError(console.error))
        
    }, [])
    return (
        <div className="home-wrapper-project">
                <img alt='intro-background' src={IntroProjectBackground} className="intro-background-project"/>
                <div className="intro-wrapper-project">
                    <div className="intro-desc-project">
                        <h1 className="intro-title-project">Projects i have worked on...</h1>
                    </div>
                </div>
                <div className="projects-wrapper-project">
                    {
                        projects.map((item, index) => {
                            return (
                                <ProjectItem key={item.id} id={item.id} name={item.name} images={item.images}/>
                            )
                        })
                    }
                </div>
                <div className="find-me-wrapper-project">
                    <h1>Find me on.</h1>
                    <div className="social-connect-project">
                        <button className="social-button-project" onClick={() => window.location.assign('https://www.linkedin.com/in/buwaneka-ranatunga-649626103/')}>
                            <h1 className="social-title-project">In</h1>
                        </button>
                        <button className="social-button-project" onClick={() => window.location.assign('https://www.behance.net/bsirinath338b')}>
                            {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                            <h1 className="social-title-project">Be</h1>
                        </button>
                        <button className="social-button-project">
                            <h1 className="social-title-project">S</h1>
                        </button>
                    </div>
                </div>
                <div className="all-rights-wrapper-project">
                    <h3>@2025 all rights reserved..</h3>
                </div>
            </div>
    )
}

export default Projects
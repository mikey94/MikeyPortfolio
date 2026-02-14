import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IntroBackground from '../../assets/staticImages/imageNine.png';
import './Project.scss';
import { client } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

interface ProjectPageProps {}

type project = {
    id: number,
    name: string,
    description: string,
    images: any,
    link: string
}

const ProjectPage: React.FunctionComponent<ProjectPageProps> = () => {
    const params = useParams()
    const [project, setProjects] = useState<project>()
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
        .then((data: Array<project>) => setProjects(data.find((project) => project.id === parseInt(params.projectId!))))
        .catch((console) => setError(console.error))
        
    }, [params.projectId])
    return (
        <div className="home-wrapper-project-item">
            <img alt='intro-background' src={IntroBackground} className="intro-background-project-item"/>
            <div className="projects-wrapper-project-item">
                {
                    typeof project !== 'undefined' && 
                    <div className='project-item-wrapper-project-item'>
                        <div className='project-item-description'>
                            <h1>{project.name}</h1>
                            <h3>{project.description}</h3>
                            {
                                project.link !== null ?
                                <div className='project-link-project-item'>
                                <h3>Project Link: </h3><a href={project.link}>Click here to see the project!</a>
                                </div> 
                                : <h3>Project Link: Not Available</h3>
                            }
                        </div>
                        <div>
                            {
                                project.images.length && 
                                <>
                                    {
                                        project.images.map((image: any) => 
                                            <img alt='pi' src={urlFor(image).url()} className='project-image'/>
                                        )
                                    }
                                </>
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="find-me-wrapper-project-item">
                <h1>Find me on.</h1>
                <div className="social-connect-project-item">
                    <button className="social-button-project-item" onClick={() => window.location.assign('https://www.linkedin.com/in/buwaneka-ranatunga-649626103/')}>
                        <h1 className="social-title-project-item">In</h1>
                    </button>
                    <button className="social-button-project-item" onClick={() => window.location.assign('https://www.behance.net/bsirinath338b')}>
                        {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                        <h1 className="social-title-project-item">Be</h1>
                    </button>
                    <button className="social-button-project-item">
                        <h1 className="social-title-project-item">S</h1>
                    </button>
                </div>
            </div>
            <div className="all-rights-wrapper-project-item">
                <h3>@2025 all rights reserved..</h3>
            </div>
        </div>
    );
};

export default ProjectPage;

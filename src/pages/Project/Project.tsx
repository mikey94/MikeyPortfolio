import React, { useRef } from 'react';
import IntroBackground from '../../assets/staticImages/imageOne.png';
import IntroImage from '../../assets/staticImages/me_avatar.png';
import ProjectImage from '../../assets/staticImages/imageThree.png';
import AboutImage from '../../assets/staticImages/imageFour.png'
import './Project.scss';

interface ProjectPageProps {}

const ProjectPage: React.FunctionComponent<ProjectPageProps> = () => {
    const about_ref = useRef(null);
    return (
        <div className="home-wrapper-project">
            <img alt='intro-background' src={IntroBackground} className="intro-background-project"/>
            <div className="intro-wrapper-project">
                <div className="intro-desc-project">
                    <h1 className="intro-title-project">Hi</h1>
                    <h3>I'm Buwaneka Ranatunga...</h3>
                    <h3>And this is my portfolio... 🙂</h3>
                </div>
                <div className="intro-image-project">
                    <img alt="logo" className="intro-image-logo-project" src={IntroImage} />
                </div>
            </div>
            <div className="projects-wrapper-project">
                <img alt="logo" className="intro-image-logo-project" src={ProjectImage} />
                <div className='project-show-wrapper-project'>
                    <h1>Want to see my projects...</h1>
                    <button className="project-button-project">
                        <h3>Show more...</h3>
                    </button>
                </div>
            </div>
            <div ref={about_ref} className="about-wrapper-project">
                <div className='about-show-wrapper-project'>
                    <h1>About my self and what i do...</h1>
                    <button className="about-button-project">
                        <h3>Show more..</h3>
                    </button>
                </div>
                <img alt="logo" className="intro-image-logo-project" src={AboutImage} />
            </div>
            <div className="find-me-wrapper-project">
                <h1>Find me on.</h1>
                <div className="social-connect-project">
                    <button className="social-button-project">
                        <h1 className="social-title-project">In</h1>
                    </button>
                    <button className="social-button-project">
                        {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                        <h1 className="social-title-project">Tw</h1>
                    </button>
                    <button className="social-button-project">
                        <h1 className="social-title-project">S</h1>
                    </button>
                </div>
            </div>
            <div className="all-rights-wrapper-project">
                <h3>@2022 all rights reserved..</h3>
            </div>
        </div>
    );
};

export default ProjectPage;

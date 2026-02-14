import React, { useRef } from 'react';
import IntroBackground from '../../assets/staticImages/imageOne.png';
import IntroImage from '../../assets/staticImages/me_avatar.png';
import ProjectImage from '../../assets/staticImages/imageThree.png';
import AboutImage from '../../assets/staticImages/imageFour.png'
import './Home.scss';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
    const about_ref = useRef(null);
    const navigate = useNavigate()
    return (
        <div className="home-wrapper">
            <img alt='intro-background' src={IntroBackground} className="intro-background"/>
            <div className="intro-wrapper">
                <div className="intro-desc">
                    <h1 className="intro-title">Hi</h1>
                    <h3>I'm Buwaneka Ranatunga...</h3>
                    <h3>And this is my portfolio... 🙂</h3>
                </div>
                <div className="intro-image">
                    <img alt="logo" className="intro-image-logo" src={IntroImage} />
                </div>
            </div>
            <div className="projects-wrapper">
                <img alt="logo" className="intro-image-logo" src={ProjectImage} />
                <div className='project-show-wrapper'>
                    <h1>Want to see my projects...</h1>
                    <button onClick={()=> navigate('projects')} className="project-button">
                        <h3>Show more...</h3>
                    </button>
                </div>
            </div>
            <div ref={about_ref} className="about-wrapper">
                <div className='about-show-wrapper'>
                    <h1>About my self and what i do...</h1>
                    <button onClick={()=> navigate('about')} className="about-button">
                        <h3>Show more..</h3>
                    </button>
                </div>
                <img alt="logo" className="intro-image-logo" src={AboutImage} />
            </div>
            <div className="find-me-wrapper">
                <h1>Find me on.</h1>
                <div className="social-connect">
                    <button className="social-button" onClick={() => window.location.assign('https://www.linkedin.com/in/buwaneka-ranatunga-649626103/')}>
                        <h1 className="social-title">In</h1>
                    </button>
                    <button className="social-button" onClick={() => window.location.assign('https://www.behance.net/bsirinath338b')}>
                        {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                        <h1 className="social-title">Be</h1>
                    </button>
                    <button className="social-button">
                        <h1 className="social-title">S</h1>
                    </button>
                </div>
            </div>
            <div className="all-rights-wrapper">
                <h3>@2025 all rights reserved..</h3>
            </div>
        </div>
    );
};

export default HomePage;

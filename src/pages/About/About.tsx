import React, { useEffect, useRef, useState } from 'react';
import './About.scss';
import IntroAboutBackground from '../../assets/staticImages/imageFour.png';
import MeImage from '../../assets/staticImages/me_avatar_side.png';
import AboutImage from '../../assets/staticImages/imageFour.png';
import { client } from '../../lib/client';
import { Progress } from 'antd';


type skill = {
    skill: string,
    percentage: number
}

interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
    const about_ref = useRef(null);
    const [skills, setSkills] = useState<Array<skill>>([]);
    const [error, setError] = useState<any>(false)
    useEffect(() => {
        client.fetch(`*[_type == "skills"]{
            skill,
            percentage
        }`)
        .then((data: any) => setSkills(data))
        .catch((console) => setError(console.error))
        
    }, [])
    return (
        <div className="home-wrapper-about">
                <img alt='intro-background' src={IntroAboutBackground} className="intro-background-about"/>
                <div className="intro-wrapper-about">
                    <div className="intro-image-about">
                        <img alt="logo" className="intro-image-logo-about" src={MeImage} />
                    </div>
                    <div className="intro-desc-about">
                        <h1 className="intro-title-about">Hey there</h1>
                        <h3>I'm Buwaneka Ranatunga...</h3>
                        <h3>A Software Engineer who loves to do cool stuff and create something new.</h3>
                    </div>
                </div>
                <div className="skills-wrapper-about">
                    <h1>Skills</h1>
                    <div className='skill-progress-layout'>
                    {
                        skills.length &&
                        (
                            skills.map((item) => {
                                return (
                                    <div className='skill-item'>
                                        <div className='skill-circle'>
                                            <Progress 
                                                type='circle' 
                                                percent={item.percentage} 
                                                status="active" 
                                                showInfo={true} 
                                                strokeColor={'#06B994'}
                                                format={() => <div style={{ color: '#ffffff' }}>{item.percentage}%</div>}
                                            />
                                        </div>
                                        <h3>{item.skill}</h3>
                                        <div className='skill-line'>
                                            <Progress
                                                percent={item.percentage} 
                                                status="active" 
                                                showInfo={true} 
                                                strokeColor={'#06B994'}
                                                strokeWidth={10}
                                                format={() => <div style={{ color: '#ffffff' }}>{item.percentage}%</div>}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    </div>
                </div>
                <div ref={about_ref} className="about-wrapper-about">
                    <div className='about-show-wrapper-about'>
                        <h1>About my self and what i do...</h1>
                        <button className="about-button-about">
                            <h3>Show more..</h3>
                        </button>
                    </div>
                    <img alt="logo" className="intro-image-logo-about" src={AboutImage} />
                </div>
                <div className="find-me-wrapper-about">
                    <h1>Find me on.</h1>
                    <div className="social-connect-about">
                        <button className="social-button-about">
                            <h1 className="social-title-about">In</h1>
                        </button>
                        <button className="social-button-about">
                            {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                            <h1 className="social-title-about">Tw</h1>
                        </button>
                        <button className="social-button-about">
                            <h1 className="social-title-about">S</h1>
                        </button>
                    </div>
                </div>
                <div className="all-rights-wrapper-about">
                    <h3>@2022 all rights reserved..</h3>
                </div>
            </div>
    );
};

export default AboutPage;

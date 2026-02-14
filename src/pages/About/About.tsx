import React, { useEffect, useState } from 'react';
import './About.scss';
import IntroAboutBackground from '../../assets/images/imageTwo.png';
import MeImage from '../../assets/images/me_avatar_side.png';
import { client } from '../../lib/client';
import { Progress } from 'antd';


type skill = {
    skill: string,
    percentage: number
}

type certificate = {
    certificate_name: string,
    certificate_by: string
}

interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
    const [skills, setSkills] = useState<Array<skill>>([]);
    const [certificates, setCertificates] = useState<Array<certificate>>([]);
    const [error, setError] = useState<any>(false)

    const getSkills = () => {
        client.fetch(`*[_type == "skills"]{
            skill,
            percentage
        }`)
        .then((data: any) => setSkills(data))
        .catch((console) => setError(console.error))
    }
    console.log(error)
    const getCertificates = () => {
        client.fetch(`*[_type == "certificates"]{
            certificate_name,
            certificate_by
        }`)
        .then((data: any) => setCertificates(data))
        .catch((console) => setError(console.error))
    } 
    useEffect(() => {
        getSkills()
        getCertificates()
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
                <div className="certificate-wrapper-about">
                    <h1>Certifications</h1>
                    <div className="certificate-list-wrapper">
                        {
                            certificates.length && 
                            (
                                certificates.map((certificate) => {
                                    return (
                                        <div className="certificate-item">
                                            <h3>{certificate.certificate_name}</h3>
                                            <h4>{certificate.certificate_by}</h4>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div className="find-me-wrapper-about">
                    <h1>Find me on.</h1>
                    <div className="social-connect-about">
                        <button className="social-button-about" onClick={() => window.location.assign('https://www.linkedin.com/in/buwaneka-ranatunga-649626103/')}>
                            <h1 className="social-title-about">In</h1>
                        </button>
                        <button className="social-button-about" onClick={() => window.location.assign('https://www.behance.net/bsirinath338b')}>
                            {/* <img alt="git" src={GitLogo} className="social-logo" /> */}
                            <h1 className="social-title-about">Be</h1>
                        </button>
                        <button className="social-button-about">
                            <h1 className="social-title-about">S</h1>
                        </button>
                    </div>
                </div>
                <div className="all-rights-wrapper-about">
                    <h3>@2025 all rights reserved..</h3>
                </div>
            </div>
    );
};

export default AboutPage;

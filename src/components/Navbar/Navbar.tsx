import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/buwa_right.png';
import { useOutsideAlerter } from '../../hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
    const navigate = useNavigate()
    const ref = useRef(null)
    const ref2 = useRef(null)
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(false);
    };
    useOutsideAlerter(ref, ref2, handleClick);
    const onNavClick = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="logoWrapper">
                    <img onClick={()=> navigate('/')} alt="logo" className="logo" src={logo} />
                </div>
                <div className="navigation-web">
                    <h4 onClick={()=> navigate('/')}>Home</h4>
                    <h4 onClick={()=> navigate('projects')}>Projects</h4>
                    <h4 onClick={()=> navigate('about')}>About</h4>
                    {/* <h4>Contact</h4> */}
                </div>
                <div ref={ref2} className="menu-mobile" onClick={onNavClick}>
                    <FontAwesomeIcon icon={faBars} size="2x" className="bars-style" />
                </div>
            </div>
            <div ref={ref} className={`${isVisible ? 'navigation-mobile-open' : 'navigation-mobile-close'}`}>
                <h4 onClick={()=> navigate('/')}>Home</h4>
                <h4 onClick={()=> navigate('projects')}>Projects</h4>
                <h4 onClick={()=> navigate('about')}>About</h4>
                {/* <h4>Contact</h4> */}
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;

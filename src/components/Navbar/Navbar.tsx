import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/buwa_right.png';
import { useOutsideClick } from '../../hooks/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        console.log('click outside');
        setIsVisible(false);
    };
    const ref = useOutsideClick(handleClick);
    const onNavClick = () => {
        console.log('sasa');
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        console.log('isVisible', isVisible);
    }, [isVisible]);

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
                <div className="menu-mobile" onClick={onNavClick}>
                    <FontAwesomeIcon icon={faBars} size="2x" className="bars-style" />
                </div>
            </div>
            <div className={`${isVisible ? 'navigation-mobile-open' : 'navigation-mobile-close'}`}>
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

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
        <div className="header">
            <div className="navbar">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};


export default function HambergerMenu() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            {windowWidth <= 768 ? (
                <div className="hamberger-menu">
                    <div onClick={toggleMenu}>
                        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> :
                            <FontAwesomeIcon icon={faBars} />
                        }
                    </div>
                    {isMenuOpen && (
                        <div className="navbar-dropdown">
                            <ul className="nav-list">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <Navbar />
            )}
        </div>
    );
}
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="header">
            <div className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/articles">Articles</Link></li>
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
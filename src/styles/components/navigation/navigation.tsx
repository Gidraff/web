import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styled from "styled-components";



const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;

    li {
        margin: 10px;

        a  {
           &:hover {
             text-decoration: underline;
           }
        }
    }
`;






function Navbar() {
    return (
        <NavContainer>
            <NavList>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/articles">Articles</Link></li>
            </NavList>
        </NavContainer>
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
        <NavContainer>
            {windowWidth <= 768 ? (
                <div className="hamberger-menu">
                    <div onClick={toggleMenu}>
                        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> :
                            <FontAwesomeIcon icon={faBars} />
                        }
                    </div>
                    {isMenuOpen && (
                        <NavContainer>
                            <NavList>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/articles">Articles</Link></li>
                            </NavList>
                        </NavContainer>
                    )}
                </div>
            ) : (
                <Navbar />
            )}
        </NavContainer>
    );
}
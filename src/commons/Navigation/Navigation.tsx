import React from "react";
import { HashLink } from "react-router-hash-link"


const Navigation = () => {
    return (
        <nav className="navbar">
            <p>Raff</p>
            <ul className="nav-links">
                <li className="nav-item">
                    <HashLink smooth to={'#about'}>About</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to={'#experience'}>Experience.</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to={'#articles'}>Article.</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to={'#contact'}>Contacts.</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to={'#resume'}>Resume.</HashLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
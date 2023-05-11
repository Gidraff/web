import React from "react";
import Image from '../../assets/images/myImage.jpg';

const About = () => {
    return (
        <section id="about" className="aboutme-container">
            <h3>About Me.</h3>
            <div className="about-content">
                <div className="about-text-container">
                    <div>
                        <p>Hello! I'm Gidraff Kamande. My friends call me Raff, which is short name for Gidraff</p>
                        <p>I design, develop and deploy cloud agnostic infrastructure for simple to complex architecture applications.</p>
                        <p>I occassionally write backend code, mainly for web applications.</p>
                        <p>Here are few technologies I have worked with recently</p>
                    </div>
                    <ul className="about-skill">
                        <li>Python</li>
                        <li>Golang</li>
                        <li>AWS/GCP</li>
                        <li>Kubernetes</li>
                        <li>Docker</li>
                        <li>gRPC</li>
                    </ul>
                </div>
                <div className="about-image-container">
                    <a href="https://github.com/Gidraff">
                        <div className="image-content"></div>
                        <img src={Image} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
};


export default About;
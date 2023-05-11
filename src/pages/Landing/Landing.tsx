import React from "react";

const Landing = () => {
    return (
        <section id="home" className="landing-container">
            <div className="landing-headers">
                <h3>Hello there!</h3>
                <h2>I'm Gidraff Karanja</h2>
                <h1>A DevOps/SRE Engineer</h1>
            </div>
            <div className="landing-content">
                <p>I'm a software craftsman and cloud expert</p>
                <p>I talk about go, containers cloud, and distributed systems</p>
                <p>I share my know knowledge and experience <a href="#articles">through this article</a> </p>
            </div>
            <a className="button-container" href="#contact">
                Say Hi
            </a>
        </section>
    )
}

export default Landing;
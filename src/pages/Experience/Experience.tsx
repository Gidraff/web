import React from "react";
import ExperienceContent from "./components/ExperienceContent";
import List from "./components/List";

const Experience = () => {
    return (
        <section id="experience" className="experience-container">
            <h1>Work Experience</h1>
            <List />
            <ExperienceContent />
        </section>
    )
}


export default Experience;
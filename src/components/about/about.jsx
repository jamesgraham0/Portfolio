/**
 * Projects component should not be here, but it is here for now.
 */

import "./about.css";
import Projects from "../projects/projects";
import { Slide } from "react-awesome-reveal";

function About() {
    return (
        <Slide direction='right'>
            <div id="projects" className="container about-container">
                <Projects />
            </div>
        </Slide>
    )
}

export default About;
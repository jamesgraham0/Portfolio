import './contact.css';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="https://github.com/jamesgraham0"
                    className="contact github"
                    target={"blank"}
                    >
                    <AiOutlineGithub className="icon" />
                    <h2>
                        github <span>jamesgraham0</span>
                    </h2>
                </a>
                <a
                    href="https://www.linkedin.com/in/james-graham-292873145/"
                    className="contact linkedin"
                    target={"blank"}
                    >
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        linkedin <span>james graham</span>
                    </h2>
                </a>
                <a
                    href="https://www.instagram.com/james___graham/"
                    className="contact instagram"
                    target={"blank"}
                    >
                    <AiOutlineInstagram className="icon" />
                    <h2>
                        instagram <span>james___graham</span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
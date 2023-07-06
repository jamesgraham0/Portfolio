import './contact.css';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";


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
                    href="mailto:jgraham.paul@gmail.com?subject=Hello%20James&body=We%20really%20like%20your%20portfolio!%20So%20much%20in%20fact,%20we%20want%20to%20offer%20you%20a%20high%20five.%20*SLAP*"
                    className="contact instagram"
                    target={"blank"}
                    >
                    <CgMail className="icon" />
                    <h2>
                        gmail <span>jgraham.paul@gmail.com</span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
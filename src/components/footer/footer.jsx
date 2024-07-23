import './footer.css';
import { BsInstagram } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { DiReact } from "react-icons/di";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
            <DiReact className="react-logo" />
            <h1>Created Using React</h1>
            <div className="social-links">
                <a href="https://github.com/jamesgraham0">
                    <TiSocialGithub className="social" />
                </a>
                <a href="https://www.linkedin.com/in/jamesgraham99">
                    <TiSocialLinkedin className="social" />
                </a>
                <a href="https://www.instagram.com/james___graham/">
                    <BsInstagram className="social" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
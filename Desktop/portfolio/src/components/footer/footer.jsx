import './footer.css';
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
            <h1>
                created using React
                <a href="#home">
                    <h2>
                        <BsMouse /> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://github.com/jamesgraham0">
                    <TiSocialGithub className="social" />
                </a>
                <a href="https://www.linkedin.com/in/james-graham-292873145/">
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
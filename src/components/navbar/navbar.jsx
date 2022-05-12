import './navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
    return (    
        <div className="navigation">
            <a href="#home">
                <AiOutlineHome className="icon active-nav home" />
            </a>
            <a href="#about">
                <AiOutlineUser className="icon about" />
            </a>
            <a href="#projects">
                <AiOutlineRocket className="icon projects" />
            </a>
            <a href="#contact">
                <BiMessageRoundedDots className="icon contact" />
            </a>
            <a href="#footer">
                <BsArrowDownCircle className="icon footer" />
            </a>
        </div>
    );
}

export default Navbar;
import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  const [activeButton, setActiveButton] = useState('home');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (    
    <div className="navigation">
      <a href="#home" onClick={() => handleClick('home')}>
        <AiOutlineHome className={`icon home ${activeButton === 'home' ? 'active-nav' : ''}`} />
      </a>
      <a href="#about" onClick={() => handleClick('about')}>
        <AiOutlineUser className={`icon about ${activeButton === 'about' ? 'active-nav' : ''}`} />
      </a>
      <a href="#projects" onClick={() => handleClick('projects')}>
        <AiOutlineRocket className={`icon projects ${activeButton === 'projects' ? 'active-nav' : ''}`} />
      </a>
      <a href="#contact" onClick={() => handleClick('contact')}>
        <BiMessageRoundedDots className={`icon contact ${activeButton === 'contact' ? 'active-nav' : ''}`} />
      </a>
      <a href="#footer" onClick={() => handleClick('footer')}>
        <BsArrowDownCircle className={`icon footer ${activeButton === 'footer' ? 'active-nav' : ''}`} />
      </a>
    </div>
  );
}

export default Navbar;

import './home.css';
import React, { useState } from 'react';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import image from '../images/me.jpg';
import Experiences from '../experiences/experiences';

function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className={`hover-show ${isActive ? 'active' : ''}`} onClick={handleClick}>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <div className='click-me-container'>
          <p className={`click-me ${isActive ? 'active' : ''}`}>Click me</p>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path strokeLinecap="round" strokeLinejoin="round" className={`draw-arrow ${isActive ? 'active' : ''}`} d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
            <path strokeLinecap="round" strokeLinejoin="round" className={`tail-1 ${isActive ? 'active' : ''}`} d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
            <path strokeLinecap="round" strokeLinejoin="round" className={`tail-2 ${isActive ? 'active' : ''}`} d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
          </svg>
        </div>
        <img id='me-img' src={image} alt='' />
      </div>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      <Buttons />
      <h2 id="about" >
        <span>About Me</span> <br/>
        <p>
          I study Computer Science at the University of British Columbia. I love to stay active, watch movies, and play my guitar! 
        </p>
      </h2>
      <Experiences/>
    </div>
  );
}

export default Home;

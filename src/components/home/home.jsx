import './home.css';
import React, { useEffect, useState } from 'react';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import image from '../images/me.jpg';
import Experiences from '../experiences/experiences';

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, []);

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
        <div className='click-me-container' hidden={isActive}>
          <p className={`click-me ${isActive ? 'active' : ''}`}>Click me</p>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
          Hey there! I'm a Software Engineer from the Prairies of Canada! 🌾🇨🇦
        </p>
        <br/>
        <p>
          Recently, I graduated from the University of British Columbia with a Bachelor's degree in Computer Science. During my time there, I balanced playing Varsity Soccer with diving into a wide array of tech topics, including:
        </p>
        <ul className="columns">
          <li>Software Engineering 💻</li>
          <li>Cyber Security 🔒</li>
          <li>Machine Learning 🤖</li>
          <li>Artificial Intelligence 🧠</li>
          <li>Full-Stack Web Development 🖥️</li>
          <li>Data Structures and Algorithms 📚</li>
          <li>Networking 🌐</li>
          <li>Distributed Systems 🔮</li>
          <li>Database Management Systems 🗃️</li>
          <li>Computer Vision 📸</li>
          <li>Hardware and OS 🕹️</li>
          <li>Scientific Writing 📝</li>
          <li>Graphics 🎨</li>
          <li>Statistics 📊</li>
          <li>Data Visualization 📈</li>
        </ul>
        <p>
          My mission is to create functional, safe, and engaging experiences that improve lives. I specialize in full-stack software development, UI/UX design, testing, and web security, but I'm also enthusiastic about leveraging my broad skill set (as evidenced above).
        </p>
        <br/>
        <p>
          In my spare time, I explore bug-bounty programs to stay sharp and contribute to internet security.
        </p>
        <br/>
        <p>
          I'm actively seeking new opportunities in the tech industry and am open to exciting ventures that come my way. Ideally, I'm looking for a role in software engineering or cyber security where I can apply my passion and skills.
        </p>
        <br/>
        <p>
          If you're seeking a dedicated, creative, and hard-working team player, I'm your guy! Check out my work experience below. 👇
        </p>
      </h2>
      <Experiences/>
    </div>
  );
}

export default Home;

import './home.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import image from '../images/me.jpg';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
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
        <h3>Click me</h3>
        <img src={image} alt='' />
      </div>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      
      <h2 id="about" >
        <span>About Me</span> <br />
        <p>
          I'm a Computer Science student at the University of British Columbia. I love to stay active, watch movies, and play my guitar! 
        </p>
      </h2>
      <Buttons />
    </div>
  );
}

export default Home;
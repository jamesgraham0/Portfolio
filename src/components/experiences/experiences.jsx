import './experiences.css';
import { Slide } from "react-awesome-reveal";
import Experience1 from '../experience1/experience1';
import Experience2 from '../experience2/experience2';

function Experiences() {
  return (
    <div className='experiences-container'>
      <span id='experience-quali-text' className='quali-text'>Experience</span>
      <div className="experiences-box">
        <Slide direction='left'>
          <Experience1 id='experience1'/>
        </Slide>
        <Slide direction='right'>
          <Experience2 id='experience2'/>
        </Slide>
      </div>
    </div>
  );
}

export default Experiences;
import './experience2.css';
import image from '../images/Equitable-logo.png';

function Experience2() {
  return (
    <div className='experience2-container'>
      <div className='title-container2'>
        <h2 className="experience2-title">Equitable Life of Canada</h2>
        <img className="experience-img2" src={image} alt='' />
      </div>
        <div className="experience2-description-container">
            <p className='experience2-description'>
              As a member of the Production Support team, I focused on the maintenance and enhancement of internal web applications. 
              Additionally, I undertook a project involving the development of Python, Bash, and VBA Macros. 
            </p>
      </div>
    </div>
  );
}

export default Experience2;

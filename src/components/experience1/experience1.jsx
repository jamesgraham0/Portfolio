import image from '../images/amazon-logo.png';
import './experience1.css';


function Experience1() {
  return (
    <div className='experience1-container'>
      <div className='title-container1'>
        <img className="experience-img1" src={image} alt='' />
        <h2 className="experience1-title">Amazon Web Services</h2>
      </div>
        <div className="experience1-description-container">
            <p className='experience1-description'>
                I interned as a software engineer on the AWS Payments - Collections 
                team in Vancouver, British Columbia.
            </p>
        </div>
    </div>
  );
}

export default Experience1;
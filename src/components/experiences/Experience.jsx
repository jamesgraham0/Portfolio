import './Experience.css';
import { useState } from 'react';

function Experience({ id, imageInfo, title, company, employmentType, responsibilities, positionLeft }) {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    const hideDetails = () => {
        setIsDetailsVisible(false);
    };

    return (
        <div className={`experience-container ${positionLeft}`}>
            <div className='title-container' onClick={toggleDetails}>
                <img className="experience-img" src={imageInfo.path} alt={`Work ${id}`} style={
                    {
                        height: imageInfo.height,
                        width: imageInfo.width
                    }
                }/>
                <div className="experience-main-info-container">
                    <h3 className="experience-title">{title}</h3>
                    <p className="experience-company">{company}</p>
                    <p className="experience-employmentType">{employmentType}</p>
                </div>
            </div>
            {isDetailsVisible && (
                <div className="experience-details-container" onClick={hideDetails}>
                    <ul className="experience-responsibilities">
                        {responsibilities?.map((responsibility, index) => (
                            <li key={index} className="li-experience">{responsibility}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Experience;
import './Experience.css';

function Experience({ id, imageInfo, title, company, employmentType, responsibilities, positionLeft }) {    
    return (
        <div className={`experience-container ${positionLeft}`}>
            <div className='title-container'>
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
            <div className="experience-details-container">
                <ul className="experience-responsibilities">
                    {responsibilities?.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;
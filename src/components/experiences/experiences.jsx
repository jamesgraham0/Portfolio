import './experiences.css';
import Experience from './Experience';

import awsLogo from './images/aws-logo.png';
import equitableLogo from './images/equitable-logo.png';
import frLogo from './images/fr-logo.png';
import ubcLogo from './images/ubc-logo.png';
import utgLogo from './images/utg-logo.png';
import webDevLogo from './images/freelance-web-dev-logo.png';

function Experiences() {
  const experienceData = [
    {
      title: "Software Developer and Technical Consultant",
      company: "Foyer Richelieu Welland",
      employmentType: "Contract",
      duration: "July 2024 - Present",
      location: "",
      workMode: "",
      responsibilities: [
        "Professional consulting services to assist Foyer Richelieu in clinical programming enhancements."
      ],
      imageInfo: {
        path: frLogo,
        height: "80px",
        width: "120px",
      }
    },
    {
      title: "Freelance Web Developer",
      company: "",
      employmentType: "",
      duration: "Mar 2024 - Present",
      location: "Vancouver, British Columbia, Canada",
      workMode: "Remote",
      responsibilities: [
        "Collaborated with clients to understand their needs and delivered customized web solutions tailored to their business objectives.",
        "Ensured cross-browser and cross-device compatibility for continued smooth operation of websites.",
        "Employed a user-centred approach to ensure sufficient feedback, typography, consistency, and accessibility standards were met."
      ],
      skills: [
        "Web Development",
        "Client Relations",
        "HTML",
        "Cascading Style Sheets (CSS)",
        "JavaScript",
        "Liquid",
        "User-centered Design"
      ],
      imageInfo: {
        path: webDevLogo,
        height: "120px",
        width: "120px",
      }
    },
    {
      title: "Computer Science Tutor",
      company: "The University of British Columbia",
      employmentType: "Freelance",
      duration: "Feb 2023 - Dec 2023",
      location: "Vancouver, British Columbia, Canada",
      workMode: "Hybrid",
      responsibilities: [
        "Helped students grasp and master topics in:",
        "CPSC 110 (Introduction to Programming)",
        "CPSC 210 (Object-Oriented Programming)"
      ],
      imageInfo: {
        path: ubcLogo,
        height: "150px",
        width: "150px",
      }
    },
    {
      title: "Software Engineer Intern",
      company: "Amazon Web Services (AWS)",
      employmentType: "Internship",
      duration: "May 2023 - Aug 2023",
      location: "Vancouver, British Columbia, Canada",
      workMode: "On-site",
      responsibilities: [
        "Developed APIs for customer payment data management, eliminating technical debt, and aligning the service with current Engineering Excellence standards.",
        "Built and configured a new CI/CD infrastructure featuring robust unit, integration, and end-to-end tests.",
        "Implemented auto-scaling and load-balancing to adjust capacity of EC2 instances in order to maintain steady, predictable performance at the lowest possible cost.",
        "Utilized Amazon EC2 instances, ECS tasks, and DynamoDB to provide an efficient and reliable service."
      ],
      skills: [
        "Java",
        "JavaScript",
        "JUnit",
        "DynamoDB",
        "Amazon EC2",
        "Amazon ECS",
        "Amazon Web Services (AWS)",
        "Spring Boot",
        "Software Design"
      ],
      imageInfo: {
        path: awsLogo,
        height: "150px",
        width: "120px",
      }
    },
    {
      title: "Software Developer",
      company: "Equitable",
      employmentType: "Co-op",
      duration: "Sep 2022 - Dec 2022",
      location: "Waterloo, Ontario, Canada",
      workMode: "Remote",
      responsibilities: [
        "Maintained and enhanced internal web apps, primarily focused on front-end improvements.",
        "Wrote Python and Bash scripts to automate workflows, resulting in tens of thousands of dollars saved."
      ],
      skills: [
        "Object-Oriented Programming (OOP)",
        "Node.js",
        "SQL",
        "Automation",
        "HTML",
        "Software Design"
      ],
      imageInfo: {
        path: equitableLogo,
        height: "40px",
        width: "120px",
      }
    },
    {
      title: "Software Programming Instructor",
      company: "UTG Academy",
      employmentType: "Full-time",
      duration: "Jun 2021 - Aug 2021",
      location: "Vancouver, British Columbia, Canada",
      workMode: "On-site",
      responsibilities: [
        "Shared my passion for Computer Science with the next generation by teaching programming and game development fundamentals.",
        "Fostered an inclusive, exciting environment for students to express their creativity by developing games with Python."
      ],
      skills: [
        "Python"
      ],
      imageInfo: {
        path: utgLogo,
        height: "50px",
        width: "120px",
      }
    }
  ];

  return (
    <div className='experiences-container'>
      <span id='experience-quali-text' className='quali-text'>Experience
      <div className="directions"> *click on an experience to learn more about it</div>
      </span>
      <div className="timeline-container">
      <div className="timeline">
      {experienceData.map((experience, index) => {
        const positionLeft = 'right';
        return (
            <div className={`experience-content-container ${positionLeft}`} key={index}>
                <h3 className={`experience-duration ${positionLeft}`}>{experience.duration}</h3>
                <Experience
                  id={`experience${index + 1}`}
                  imageInfo={experience.imageInfo}
                  title={experience.title}
                  company={experience.company}
                  employmentType={experience.employmentType}
                  duration={experience.duration}
                  responsibilities={experience.responsibilities}
                  skills={experience.skills}
                  positionLeft={positionLeft}
                />
            </div>
        );
      })}
      </div>
    </div>
    </div>
  );
}

export default Experiences;
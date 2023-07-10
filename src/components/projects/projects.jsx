import React, { useState } from "react";
import "./projects.css";
import spotify_votes_img from '../images/spotify-votes.jpg';
import ml_img from '../images/machine-learning.png';
import spotify_logo_img from '../images/spotify-logo.png';
import env_map_img from '../images/env-map.png';
import grade_calculator_img from '../images/grade-calculator.png';
import neural_network_img from '../images/neural-network.png';
import pano_stitching_img from '../images/pano-stitching.png';
import sift_img from '../images/SIFT2.png';
import tower_defense_img from '../images/tower-defense.png';
import translink_img from '../images/translink.png';

const projectData = [
  {
    title: "Spotify Votes",
    technologies: "Javascript | React Native | Node | Express | Expo | Sockets | Spotify API",
    image: spotify_votes_img,
    description: "A native iOS app which allows multiple Spotify users to add songs to the same queue and determine playing order by upvoting songs added by others."
  },
  {
    title: "Machine Learning Models",
    technologies: "Python",
    image: ml_img,
    description: "Supervised classification models, including Naive Bayes, Decision Trees, Random Forests, K-Nearest Neighbors, and Neural Networks, assessing their performance through training and validation error calculations. Utilized unsupervised learning methods, such as Principal Component Analysis, K-Means Clustering, and K-Medians Clustering to analyze and uncover patterns in unlabeled datasets."
  },
  {
    title: "Tower Defense",
    technologies: "Python | Pygame",
    image: tower_defense_img,
    description: "A tower defense game that includes seamless waves of enemies that follow the path and trigger the action of your towers. The goal of the game is to defend your home-base for all of the waves using towers that you place. This game was an opportunity to practice OOP best practices and get familiar with the Pygame library. I also created the artwork for this game and I really enjoy playing it!"
  },
  {
    title: "Spotify logo",
    technologies: "Three.js | Blender | HTML",
    image: spotify_logo_img,
    description: "In this project I created my own 3D model of the Spotify logo in Blender, which I plan to integrate into my Spotify Votes app. I got the chance to mess around with different types of lighting and controls, to which I found ambient and orbital to function the best for my particular use-case. I really like how the coloured orbs fly around and cast dreamy light combinations onto the rotating logo."
  },
  {
    title: "Experimental Graphics",
    technologies: "Three.js | WebGL | GLSL | HTML",
    image: env_map_img,
    description: "Here, I experimented with vertex UV coordinates to apply texture mapping. THREE.js was used to handle program set up, orbital controls, and keyboard input, vector and fragment shaders written in GLSL use various computer graphics and shading algorithms including skyboxes, Blinn-Phong, Toon, reflective environment mapping, and shadow mapping."
  },
  {
      title: "Neural Networks",
      technologies: "Python | Pytorch",
      image: neural_network_img,
      description: "This project exposed me to machine learning libraries like Pytorch, which helped implement object detection and classification. This particular model finds and highlights common objects in images like bicycles and people. Validation error is calculated and the model displays the confidence in its decision."
    },
    {
        title: "Panorama Stitching",
        technologies: "Python",
        image: pano_stitching_img,
        description: "Panorama stitching works by combining multiple photographic images with overlapping fields of view to produce a segmented panorama or high-resolution image. In this case, many small images of a mountain-side were augmented and stitched together."
    },
    {
        title: "SIFT Keypoint Detection",
        technologies: "Python",
        image: sift_img,
        description: "SIFT (Scale-Invariant Feature Transform) is a computer vision algorithm developed at my very own university, UBC! It is used to detect and describe local features in images, and is widely used in image processing. The process of SIFT includes Difference of Gaussians, Space Generation, Keypoints Detection, and Feature Description. In this case we can see the book on the right having its keypoints matched to an image with many other objects."
    },
    {
        title: "Translink Website",
        technologies: "PHP | HTML | CSS | Oracle",
        image: translink_img,
        description: "This project is a tool for admins for the Translink bus company in Vancouver, BC. It allows the user to control the database of bus drivers. Specifically, they could add, delete, and look up bus drivers based on specific information like Driver ID or what bus they drive."
    },
    {
      title: "Grade Calculator",
      technologies: "Javascript | HTML | CSS",
      image: grade_calculator_img,
      description: "This was one of the first websites I've ever made, and I ended up using it all throughout university to calculate my current and expected grades in classes."
    },
];

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  return (
    <div>
      <span className="quali-text">My Projects</span>
      <div className="directions"> click on a project to learn more about it*</div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`project ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div
              className="front"
              style={{
                display: flippedIndex === index ? "none" : "block"
              }}
            >
              <div className="image">
                <img src={project.image} alt="N/A" />
              </div>
              <h3>{project.title}</h3>
              <h4>{project.technologies}</h4>
            </div>
            <div
              className="back"
              style={{
                display: flippedIndex === index ? "block" : "none"
              }}
            >
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

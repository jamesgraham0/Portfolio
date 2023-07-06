import "./projects.css";

const Projects = () => {
    return (
        <div>
            <span className="quali-text">My Projects</span>
            <span className="directions"> hover over images with *</span>
            <div className="projects-container">
                <div className="project">
                        <div className="content spotify-votes"></div>
                        <h3>Spotify Votes</h3>
                        <h2>Javascript | React Native | Node | Express | Expo | Sockets | Spotify API</h2>
                </div>
                <div className="project">
                        <div className="content machine-learning"></div>
                        <h3>Classification | Clustering | Regression </h3>
                        <h3>Machine Learning Algorithms</h3>
                        <h2>Python3</h2>
                </div>
                <div className="project">
                    <div className="content spotify"></div>
                    <h3>*Spotify logo</h3>
                    <h2>Three.js | HTML</h2>
                </div>
                <div className="project">
                    <div className="content env-map"></div>
                    <h3>*Experimental Graphics</h3>
                    <h2>Three.js | WebGL | GLSL | HTML</h2>
                </div>
                <div className="project">
                    <div className="content grade-calculator"></div>
                    <h3>*Grade Calculator</h3>
                    <h2>Javascript | HTML | CSS</h2>
                </div>
                <div className="project">
                    <div className="content SIFT-keypoints"></div>
                    <h3>SIFT Keypoint Detection</h3>
                    <h2>Python3</h2>
                </div>
                <div className="project">
                    <div className="content neural-networks"></div>
                    <h3>Neural Networks</h3>
                    <h2>Python3 | Pytorch</h2>
                </div>
                <div className="project">
                    <div className="content pano-stitching"></div>
                    <h3>Panorama Stitching</h3>
                    <h2>Python3</h2>
                </div>
                <div className="project">
                    <div className="content translink"></div>
                    <h3>Translink Website</h3>
                    <h2>PHP | HTML | CSS | Oracle</h2>
                </div>
                <div className="project">
                    <div className="content tower-defense"></div>
                    <h3>Tower Defense</h3>
                    <h2>Python3 | Pygame</h2>
                </div>
                <div className="project">
                    <div className="content smtp-pop3"></div>
                    <h3>SMTP + POP3 Mail Servers</h3>
                    <h2>C</h2>
                </div>
                <div className="project">
                    <div className="content note-sharing-application"></div>
                    <img src="" alt="No Screenshot"></img>
                    <h3>Full-Stack Note Sharing Web App</h3>
                    <h2>Typescript | React | Redux | Node | Express | Firebase | Stripe | MongoDB | Heroku | YAML</h2>
                </div>
            </div>
        </div>
    );
};

export default Projects;
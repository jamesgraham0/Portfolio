import "./projects.css";

const Projects = () => {
    return (
        <div>
            <span className="quali-text">My Projects</span>
            <span className="directions"> hover over images with *</span>
            <div className="projects-container">
                <div className="project">
                    <div className="content spotify"></div>
                    <h1>*Spotify logo</h1>
                    <h2>Three.js | HTML</h2>
                </div>
                <div className="project">
                    <div className="content env-map"></div>
                    <h1>*Experimental Graphics</h1>
                    <h2>Three.js | WebGL | GLSL | HTML</h2>
                </div>
                <div className="project">
                    <div className="content grade-calculator"></div>
                    <h1>*Grade Calculator</h1>
                    <h2>Javascript | HTML | CSS</h2>
                </div>
                <div className="project">
                    <div className="content SIFT-keypoints"></div>
                    <h1>SIFT Keypoint Detection</h1>
                    <h2>Python3</h2>
                </div>
                <div className="project">
                    <div className="content neural-networks"></div>
                    <h1>Neural Networks</h1>
                    <h2>Python3 | Pytorch</h2>
                </div>
                <div className="project">
                    <div className="content pano-stitching"></div>
                    <h1>Panorama Stitching</h1>
                    <h2>Python3</h2>
                </div>
                <div className="project">
                    <div className="content translink"></div>
                    <h1>Translink Website</h1>
                    <h2>PHP | HTML | CSS | Oracle</h2>
                </div>
                <div className="project">
                    <div className="content tower-defense"></div>
                    <h1>Tower Defense</h1>
                    <h2>Python3 | Pygame</h2>
                </div>
                <div className="project">
                    <div className="content smtp-pop3"></div>
                    <h1>SMTP + POP3 Mail Servers</h1>
                    <h2>C</h2>
                </div>
            </div>
        </div>
    );
};

export default Projects;
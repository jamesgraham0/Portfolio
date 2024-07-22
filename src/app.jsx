import React, { useState } from 'react';
import Hi from "./components/hi/hi.jsx";
// import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

const WebContent = () => {
  const [showComponents, setShowComponents] = useState(false);

  const handleButtonClick = () => {
    setShowComponents(true);
  };

  return (
    <>
      <div className="background-circle1"></div>
      <div className="background-circle2"></div>
      <div className="background-circle3"></div>
      <Hi onButtonClick={handleButtonClick} />
      {showComponents && (
        <>
          {/* <Navbar /> */}
          <Home />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default WebContent;

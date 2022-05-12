import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from  "./components/footer/footer.jsx";

const WebContent = () => {
  return (
    <>
      <div className="background-circle1"></div>
      <div className="background-circle2"></div>
      <div className="background-circle3"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default WebContent;
import React, { useContext } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import MySkill from "./Components/MySkill/MySkill";
import BarSkill from "./Components/BarSkill/BarSkill";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";


// Import the sky image
import skyImage from './img/Space4.png';  // Make sure the path is correct


function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode
          ? `url(${skyImage}) repeat center top`  // Sky background for dark mode, scrolls with content and repeats
          : '#FFF0F5',  // Light purple background for light mode
        backgroundSize: darkMode ? 'contain' : 'auto',  // Contain the image within its container without stretching
        color: darkMode ? 'white' : 'black',  // Text color adjustment
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <MySkill />
      <BarSkill />
      <Experience/>
      <Education />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

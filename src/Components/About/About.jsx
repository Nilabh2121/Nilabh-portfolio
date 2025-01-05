import React from 'react';
import './About.css';
import DP from '../../img/DP5.png';
import thumsup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/React3d.png';
import Floating from '../FloatingDiv/Floating';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`About ${darkMode ? '' : 'light-mode'}`} id="About">
      <div className="A-left">
        <div className="A-name">
          <div></div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>Nilabh Kumar</span>
          <span>
            "A"
            <span className="txt-clr"> Web Developer </span>
            based in <span className="txt-clr">India</span>
          </span>
          <span style={{ color: darkMode ? 'white' : 'black' }}>
            Welcome to my portfolio website! I am Nilabh Kumar, a final year B.Tech student at 
            <span className="txt-clr1"> Jaypee University of Engineering and Technology</span>, 
            Guna, Madhya Pradesh. Hailing from Deoghar, Jharkhand, I am an Enthusiastic 
            <span className="txt-clr1"> Web Developer, Designer, Coder, and Programmer. </span> 
            With a keen eye for design and a love for coding, I aim to build stylish websites that leave a long-lasting 
            <span className="txt-clr1"> Impact.</span> Let's embark on a journey of innovation and design excellence together.
        </span>

          <div className="InfoTable">
          <table className={`InfoTable ${darkMode ? 'dark-border' : 'light-border'}`}>
              <tbody>
                <tr className="Info">
                  <td style={{ color: darkMode ? 'white' : 'black' }}>Birthday</td>
                  <td className="Info5">27 JAN 2002</td>
                </tr>
                <tr className="Info">
                  <td style={{ color: darkMode ? 'white' : 'black' }}>Residence</td>
                  <td className="Info1" style={{ color: darkMode ? 'white' : 'black' }}>INDIA</td>
                </tr>
                <tr className="Info">
                  <td style={{ color: darkMode ? 'white' : 'black' }}>Address</td>
                  <td className="Info2">DEOGHAR JHARKHAND</td>
                </tr>
                <tr className="Info">
                  <td style={{ color: darkMode ? 'white' : 'black' }}>Mobile No.</td>
                  <td className="Info3" style={{ color: darkMode ? 'white' : 'black' }}>8340XXXX63</td>
                </tr>
                <tr className="Info">
                  <td style={{ color: darkMode ? 'white' : 'black' }}>Email</td>
                  <td className="Info4">nilabhkumar2121@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="A-right">
        <div className="glowingcircle">
          <span></span>
          <span></span>
          <div className="dp">
            <img src={DP} alt="" />
          </div>
        </div>

        <motion.img
          className="glassesimoji"
          initial={{ left: '10%' }}
          whileInView={{ left: '0%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="floating-div1">
          <Floating image={Crown} description={'Web Developer'} />
        </div>
        <div className="floating-div2">
          <Floating image={thumsup} description={'Programmer'} />
        </div>
      </div>
    </div>
  );
};

export default About;

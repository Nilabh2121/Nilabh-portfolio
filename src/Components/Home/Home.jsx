import React, { useContext } from 'react';
import './Home.css';
import Github from '../../img/Github.svg';
import Linkedin from '../../img/Linkedin.svg';
import Instagram from '../../img/Instagram.svg';
import Home1 from '../../img/Home2.png';
import Purple1 from '../../img/Purple2.png';
import Line from '../../img/Linebelow3.png';
import { themeContext } from '../../Context';
import { ReactTyped as Typed } from 'react-typed';
import { Link } from 'react-scroll';

const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`home ${darkMode ? '' : 'light-mode'}`}>
      <div className="home-img">
        <img src={Purple1} alt="" className='Home-dp' />
        <img src={Home1} alt="" className='HomeBack-dp' />
        <div className="line-below">
          <img src={Line} alt="" className='line-below' />
        </div>
      </div>

      <div className="home-content">
        <h1 style={{ color: darkMode ? 'white' : 'black' }}>
          Hey, It's <span className='name-text'>Nilabh</span>
        </h1>
        <div className="animated-text" style={{ color: darkMode ? 'white' : 'black' }}>
          I&apos;m a{' '}
          <Typed
            strings={[
              `<span class="blue">Developer</span>`,
              `<span class="red">Coder</span>`,
              `<span class="green">Designer</span>`,
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
            smartBackspace
          />
        </div>
        <p style={{ color: darkMode ? 'white' : 'black' }}>
          I am a skilled full-stack developer and Programmer with a knack for turning ideas into functional, user-friendly web experiences. From responsive designs to robust backend solutions, I ensure every project stands out. Let’s work together to bring your vision to reality!
        </p>

        <div className={`social-icons ${darkMode ? '' : 'light-mode-icons'}`}>
          <a href="https://www.instagram.com/nilabhmishra_21" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com/Nilabh2121" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/nilabh-kumar-4b256b200" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>

        {/* Link component for smooth scrolling to Contact page */}
        <Link to="Contact" smooth={true} className="btn">Hire me</Link> 
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useContext } from 'react';
import { themeContext } from '../../Context';
import './Navbar.css';
import Toogle from '../Toogle/Toogle';
import { Link } from 'react-scroll';
import { UilBars, UilTimes } from '@iconscout/react-unicons'; // For hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`n-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Left Section */}
      <div className="n-left">
        <div className="n-name">{/* Dynamic text color */}
          <span style={{ color: darkMode ? 'white' : 'black' }}>NILABH</span>
        </div>
        <Toogle  style={{ color: darkMode ? 'white' : 'black' }} />
      </div>

      {/* Middle Section */}
      <div className={`n-middle ${isOpen ? 'open' : ''}`}>
        <ul className="n-list">
          <Link spy={true} to="About" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>About</li>
          </Link>
          <Link spy={true} to="Myskill" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>Myskill</li>
          </Link>
          <Link spy={true} to="BarSkill" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>BarSkill</li>
          </Link>
          <Link spy={true} to="Experience" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>Experience</li>
          </Link>
          <Link spy={true} to="Education" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>Education</li>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>Portfolio</li>
          </Link>
          <Link spy={true} to="Testimonials" smooth={true}>
            <li style={{ color: darkMode ? 'white' : 'black' }}>Testimonials</li>
          </Link>
        </ul>
      </div>

      {/* Right Section */}
      <div className="n-right">
        <Link to="Contact" smooth={true}>
          <button className="button n-button">
            <span style={{ color: darkMode ? 'white' : 'black' }}>Contact Us</span>
          </button>
        </Link>
      </div>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? (
          <UilTimes size="30" color={darkMode ? 'white' : 'black'} /> // Dynamic icon color
        ) : (
          <UilBars size="30" color={darkMode ? 'white' : 'black'} />
        )}
      </div>

      {/* Sidebar for Mobile & Tablet View */}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-close" onClick={closeSidebar}>
          <UilTimes size="30" color="white" />
        </div>
        <ul className="sidebar-list">
          <Link spy={true} to="About" smooth={true}>
            <li>About</li>
          </Link>
          <Link spy={true} to="Myskill" smooth={true}>
            <li>Myskill</li>
          </Link>
          <Link spy={true} to="BarSkill" smooth={true}>
            <li>BarSkill</li>
          </Link>
          <Link spy={true} to="experience" smooth={true}>
            <li>Experience</li>
          </Link>
          <Link spy={true} to="Education" smooth={true}>
            <li>Education</li>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <li>Portfolio</li>
          </Link>
          <Link spy={true} to="Testimonials" smooth={true}>
            <li>Testimonials</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

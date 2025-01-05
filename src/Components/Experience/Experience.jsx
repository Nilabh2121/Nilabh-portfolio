import './Experience.css';
import React, { useEffect } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri'; // Import the link icon
import Google from '../../img/LTIMindtree1.png';
import Amazon from '../../img/Scribit1.png';
import Tesla from '../../img/VRARMR1.png';
import Flipkart from '../../img/Nullclass1.png';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    useEffect(() => {
      const rows = document.querySelectorAll('.row');
      const blueLight = document.querySelector('.blue-light');
  
      const handleScroll = () => {
        rows.forEach((row, index) => {
          const rect = row.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            row.classList.add('visible');
            blueLight.style.height = `${(index + 1) * 140}px`; // adjust multiplier as per layout
          } else {
            row.classList.remove('visible');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className={`experience ${darkMode ? '' : 'light-mode'}`}>
        <div className="experineceheading">
            <h2>
                <span className="work" style={{ color: darkMode ? 'white' : 'black' }}>Work</span> 
                <span className="experience">Experience</span>
            </h2>
        </div>
      <div class="wrapper">
          <div class="center-line">
            <div class="blue-light"></div>
          </div>

          {/* LTIMindtree Experience */}
          <div class="row row-1">
            <section>
              <i className='icon'><img src={Google} alt='Google Logo' /></i>
              <div class="details">
                <span class="title" style={{ color: darkMode ? 'white' : 'black' }}>LTIMindtree</span>
                <span>Graduate Engineer Trainee - Nov 2024 to Present</span>
              </div>
              <ul>
                <li>Java full-stack development focusing on backend and frontend integration.</li>
                <li>Collaborated in an agile team to optimize application performance.</li>
              </ul>
              <div class="bottom" >
                <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine style={{ color: darkMode ? 'white' : 'black' }}/></a>
              </div>
            </section>
          </div>

          {/* ScribIT Solutions Experience */}
          <div class="row row-2">
            <section>
              <i className='icon'><img src={Amazon} alt='Amazon Logo' /></i>
              <div class="details">
                <span class="title" style={{ color: darkMode ? 'white' : 'black' }}>ScribIT Solutions</span>
                <span>IT & Operations Engineer - July 2024 to Oct 2024</span>
              </div>
              <ul>
                <li>Managed IT operations  tasks to improve workflow efficiency.</li>
                <li>Troubleshot Technical issues in codebase to ensure smooth operations.</li>
              </ul>
              <div class="bottom">
                <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine  style={{ color: darkMode ? 'white' : 'black' }}/></a>
              </div>
            </section>
          </div>

          {/* VR AR MR Experience */}
          <div class="row row-1">
            <section>
              <i className='icon'><img src={Tesla} alt='Tesla Logo' /></i>
              <div class="details">
                <span class="title" style={{ color: darkMode ? 'white' : 'black' }}>VR AR MR</span>
                <span>Web Developer Intern -   Sept 2023 to Nov 2023</span>
                
              </div>
              <ul className='experiencetext'>
                <li>Developed immersive web applications using React, Node.js, and Three.js.</li>
                <li>Integrated VR/AR functionalities to enhance user experiences.</li>
              </ul>
              <div class="bottom" >
                <a href="https://drive.google.com/file/d/18Tq-I8cELNRmOLZQC3rsl2OItxzN72-c/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine  style={{ color: darkMode ? 'white' : 'black' }}/></a>
              </div>
            </section>
          </div>

          {/* Nullclass Experience */}
          <div class="row row-2">
            <section>
              <i className='icon'><img src={Flipkart} alt='Flipkart Logo' /></i>
              <div class="details">
                <span class="title" style={{ color: darkMode ? 'white' : 'black' }}>Nullclass</span>
                <span>Full Stack Developer Intern - June 2023 to Aug 2023</span>
              </div>
              <ul>
                <li>Built web applications using HTML, CSS, JavaScript, and React.</li>
                <li>Worked on API integrations for improved user experience.</li>
              </ul>
              <div class="bottom" >
                <a href="https://drive.google.com/file/d/1i_LSCcqCE5xDPo9hG3-wpM7gbpkme44L/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><RiExternalLinkLine style={{ color: darkMode ? 'white' : 'black' }}/></a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Experience;


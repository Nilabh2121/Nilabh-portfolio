import React, { useContext } from 'react';
import './MySkill.css';
import Glasses from '../../img/Algorithms.png';
import Heart from '../../img/Js.png';
import Humble from '../../img/Vscode.png';
import { themeContext } from '../../Context';

const MySkills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`skills ${darkMode ? '' : 'light-mode'}`} id="Myskill">
      <div className="S-left">
        <div className="title">
          <span style={{ color: darkMode ? 'white' : 'black' }}>My</span>
          <span style={{ color: darkMode ? 'white' : 'black' }}>Skills</span>
        </div>
        <div className="skill-section">
          <span className="txt-clr3">
            WEB DEVELOPMENT:
          </span>
          <p className="description" style={{ color: darkMode ? 'white' : 'black' }}>
            Proficient in HTML, CSS, and JavaScript. Experienced in building
            responsive and accessible websites using Bootstrap and other frameworks
            like React.js. Skilled in modern back-end technologies like Node.js,
            ExpressJS, MongoDB, APIs, etc.
          </p>
        </div>
        <div className="skill-section">
          <span className="txt-clr3" >
            DSA:
          </span>
          <p className="description" style={{ color: darkMode ? 'white' : 'black' }}>
            Strong knowledge of data structures such as Arrays, Linked lists,
            Stacks, Queues, and Trees. Experienced in implementing algorithms
            like sorting, searching, and Graph algorithms, and skilled in analyzing
            time and space complexity.
          </p>
        </div>
        <a href="/NILABHKUMAR_RESUME_MAIN.pdf" download="" className='skills-section-anchor'>
          <button className="button s-button" style={{ color: darkMode ? 'white' : 'black' }}>Download Resume</button>
        </a>
      </div>

      <div className="SC-right">
  <div className="card card1">
    <img src={Glasses} alt="" />
    <span>Data Structures</span>
    <span style={{ color: darkMode ? 'white' : 'black' }}>
      Array, Recursion, LinkedList, Stack, Queue, Trees, Graph, DP
    </span>
  </div>

  <div className="card card2">
    <img src={Heart} alt="" />
    <span>Web Development</span>
    <span style={{ color: darkMode ? 'white' : 'black' }}>
      HTML, CSS, JavaScript, React.js, Node.js, MongoDB, SQL, Express.js
    </span>
  </div>

  <div className="card card3">
    <img src={Humble} alt="" />
    <span>Tools & Technology</span>
    <span style={{ color: darkMode ? 'white' : 'black' }}>
      VS Code, MS Excel, Android Studio, Canva, Figma, Adobe XD
    </span>
  </div>
</div>

    </div>
  );
};

export default MySkills;

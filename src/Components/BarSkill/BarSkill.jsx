import React from 'react';
import './BarSkill.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

// Importing images for each technology
import Html from '../../img/Html.png';
import CSS1 from '../../img/Css.png';
import JavaScript1 from '../../img/Javascript.png';
import React1 from '../../img/React.png';
import Node from '../../img/Node.png';
import Angular from '../../img/Angular.png';
import MongoDB from '../../img/MongoDb.png';
import MySQL from '../../img/MySQL.png';
import Tailwind from '../../img/Tailwind.png';

const BarSkill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // List of images for slider items
  const techImages = [Html, CSS1, JavaScript1, React1, Node, Angular, MongoDB, MySQL, Tailwind];

  return (
    <div className={`barskill ${darkMode ? '' : 'light-mode'}`} id="BarSkill">
      {/* Top Title Section */}
      <div className='Bs-left'>
        <span className="title" style={{ color: darkMode ? 'white' : 'black' }}>
          Skills & <span className="purple">Languages</span>
        </span>
      </div>

      {/* Middle Skills Section */}
      <div className="Bs-right">
        <div className="Achievement">
          <div className="circle">80%</div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>Web Dev</span>
        </div>
        <div className="Achievement">
          <div className="circle">70%</div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>DSA</span>
        </div>
        <div className="Achievement">
          <div className="circle">85%</div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>C++</span>
        </div>
        <div className="Achievement">
          <div className="circle">60%</div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>Python</span>
        </div>
        <div className="Achievement">
          <div className="circle">60%</div>
          <span style={{ color: darkMode ? 'white' : 'black' }}>JAVA</span>
        </div>
      </div>

      {/* Bottom Slider Section */}
      <div className="slider-section">
        <div className="slider">
          {/* List of technology logos in square containers with infinite loop */}
          {techImages.concat(techImages).map((imgSrc, index) => (
            <div className="slide-item" key={index}>
              <img src={imgSrc} alt="Tech Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarSkill;

import React, { useState } from 'react';
import './Footer.css';
import Github from '../../img/Github.svg';
import Linkedin from '../../img/Linkedin.svg';
import Instagram from '../../img/Instagram.svg';
import { Link } from 'react-scroll';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Subscribe');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Change button text to 'Subscribed'
    setButtonText('Subscribed');
    setIsSubscribed(true);

    // Reset email input after 3 seconds
    setTimeout(() => {
      setEmail('');
      setButtonText('Subscribe');
      setIsSubscribed(false); // Allow another subscription attempt
    }, 3000);
  };

  return (
    <div className="footer">
      <footer className="footer_area">
        <div className="footer_top">
          <div className="footer_container1">
            <div className="footer_content">
              <div className="footer_section newsletter">
                <h3 className="footer_title">Get in Touch</h3>
                <p>Don’t miss any updates of our new templates and extensions!</p>
                <form className="subscribe_form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    className="email_input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="button"
                    type="button"
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                  >
                    {buttonText}
                  </button>
                </form>
              </div>

              {/* Other sections */}
              <div className="footer_section download">
                <h3 className="footer_title">Quick</h3>
                <ul className="footer_links" style={{ listStyleType: 'none' }}>
                  <Link spy={true} to="Home" smooth={true}><li>Home</li></Link>
                  <Link spy={true} to="About" smooth={true}><li>About</li></Link>
                  <Link spy={true} to="Myskill" smooth={true}><li>Myskill</li></Link>
                  <Link spy={true} to="BarSkill" smooth={true}><li>BarSkill</li></Link>
                  <Link spy={true} to="experience" smooth={true}><li>Experience</li></Link>
                  <Link spy={true} to="Education" smooth={true}><li>Education</li></Link>
                </ul>
              </div>

              <div className="footer_section help">
                <h3 className="footer_title">Links</h3>
                <ul className="footer_links" style={{ listStyleType: 'none' }}>
                  <Link spy={true} to="Portfolio" smooth={true}><li>Portfolio</li></Link>
                  <Link spy={true} to="Testimonials" smooth={true}><li>Testimonials</li></Link>
                  <Link spy={true} to="Contact" smooth={true}><li>Contact</li></Link>
                  <Link spy={true} to="Testimonials" smooth={true}><li>Blogs</li></Link>
                  <Link spy={true} to="Testimonials" smooth={true}><li>Updates</li></Link>
                </ul>
              </div>

              <div className="footer_section social">
                <h3 className="footer_title">Connect with Me</h3>
                <div className="social_icons">
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

                <div className="footer_text">
                  <p className='Trademark'>Made with <span className="heart_icon">❤️</span> by Nilabh</p>
                  <p className='Copyright'>© All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

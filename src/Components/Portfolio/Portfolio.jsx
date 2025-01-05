import React, { useContext, useState } from 'react';
import './Portfolio.css';
import UrbanElegance from "../../img/UrbanElegance.png";
import SavoryHeaven from "../../img/SavoryHeaven.png";
import StackOverflow from "../../img/StackOverflow.png";
import WeatherMania from "../../img/WeatherMania.png";
import Travelpur from "../../img/Travelpur.png";
import Tvshow from "../../img/TVshow.png";
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            img: UrbanElegance,
            title: "Urban Elegance",
            description: "Urban Elegance, a fully dynamic website utilizing the MERN stack, equipped with comprehensive functionalities.",
            link: "https://nilabhmishra.netlify.app/",
        },
        {
            img: SavoryHeaven,
            title: "Savory Heaven",
            description: "Crafted Savory Heaven, a restaurant and food delivery website powered by dynamic features and functionalities.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: StackOverflow,
            title: "Stack Overflow",
            description: "Engineered a Stack Overflow clone, featuring full dynamic functionality using the MERN stack.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: WeatherMania,
            title: "Weather Mania",
            description: "A React Native weather app delivering real-time forecasts and an intuitive user experience for weather enthusiasts.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: Travelpur,
            title: "Travelpur",
            description: "Travel app and website, offering users a seamless platform for planning, booking, and enhancing their travel experiences.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: Tvshow,
            title: "TV Show Explorer",
            description: "Designed and developed a TV show app, providing users a platform for exploring their favorite shows.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: UrbanElegance,
            title: "Urban Elegance",
            description: "Urban Elegance, a fully dynamic website utilizing the MERN stack, equipped with comprehensive functionalities.",
            link: "https://nilabhmishra.netlify.app/",
        },
        {
            img: SavoryHeaven,
            title: "Savory Heaven",
            description: "Crafted Savory Heaven, a restaurant and food delivery website powered by dynamic features and functionalities.",
            link: "https://github.com/Nilabh2121",
        },
        {
            img: StackOverflow,
            title: "Stack Overflow",
            description: "Engineered a Stack Overflow clone, featuring full dynamic functionality using the MERN stack.",
            link: "https://github.com/Nilabh2121",
        },
    ];

    const displayedProjects = showMore ? projects : projects.slice(0, 6);

    return (
        <section className={`portfolio ${darkMode ? '' : 'light-mode'}`} id="Portfolio">
            <span className="Portfolio-Heading" style={{ color: darkMode ? 'white' : 'black' }}>
                Projects <span className="highlight1">Highlights</span>
            </span>

            <div className="portfolio-container">
                {displayedProjects.map((project, index) => (
                    <div className='portfolio-box' key={index}>
                        <img className='project' src={project.img} alt='' />
                        <div className='portfolio-layer'>
                            <h4 >{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} className='button button1'>Link</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="explore-more-container">
                <span className="explore-text" >......Explore More Projects</span>
                <button className="button explore-more-button " onClick={() => setShowMore(!showMore)} style={{ color: darkMode ? 'white' : 'black' }}>
                {showMore ? "Show Less" : "More Projects"}</button>
            </div>

        </section>
    );
};

export default Portfolio;

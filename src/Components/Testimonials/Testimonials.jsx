import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Nullclass from "../../img/Nullclass1.png";
import VRARMR from "../../img/VRARMR1.png";
import Scribit from "../../img/Scribit1.png";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [
        { img: Scribit,
            review: "As an IT and Operations Engineer at ScribIT Solutions, Nilabh displayed remarkable versatility and initiative. He skillfully managed a range of technical and operational projects, demonstrating his attention to detail through quality assurance of Python code and identifying necessary corrections. His work on the front end for various projects and his adaptability in both technical and non-technical tasks showcased his ability to deliver high-quality results consistently. Nilabh has proven to be a reliable, efficient, and forward-thinking professional, making a positive impact in every project he undertakes.— HR , ScribIT Solutions",
            rating: "⭐⭐⭐⭐⭐" 
       },

       { img: VRARMR, 
        review: "Nilabh's work with VR AR MR has been exceptional, particularly in delivering high-quality web development projects with a modern tech stack. He displayed a deep understanding of front-end technologies like HTML, CSS, JavaScript, React, and Next.js, and his skills with Three.js and WebGL were especially impressive in creating interactive, immersive experiences. His work with Spark AR and MongoDB added further value to our projects, showing his ability to adapt quickly to new technologies and push boundaries in web development. Nilabh’s technical proficiency and problem-solving mindset greatly contributed to our project success.— Tech Head, VR AR MR", 
        rating: "⭐⭐⭐⭐⭐"
       },
       
       { img: Nullclass, 
            review: "During Nilabh's internship at Nullclass, his contributions were integral to the success of our Stack Overflow clone project. His full-stack expertise enabled him to build essential features, including a robust chatbot for programming queries and a secure payment gateway using Razorpay for subscription plans. He also created an interactive community page, enhancing social engagement within the platform. Nilabh’s proactive approach, technical acumen, and attention to detail consistently exceeded our expectations, making him a valuable asset to the team. — Supervisor, Nullclass ,",
            rating: "⭐⭐⭐⭐" 
        }, 
    ];

    return (
        <div className={`t-wrapper ${darkMode ? '' : 'light-mode'}`} id='Testimonials'>
            <div className="t-heading">
                <span style={{ color: darkMode ? 'white' : 'black' }}>"Feedback from </span>
                <span className="highlight">My Professional Journey"</span>
            </div>

            <Swiper
            modules={[ Pagination, Autoplay]} // Include Autoplay module here
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
            spaceBetween={20}
            
            // pagination={{ clickable: true }}
    className="testimonials-swiper"
>
    {clients.map((client, index) => (
        <SwiperSlide key={index}>
            <div className="testimonials">
                <img src={client.img} alt="" className="profile-pic" />
                <div className="review-text" style={{ color: darkMode ? 'white' : '' }}>
                    <p style={{ color: darkMode ? 'white' : 'black' }}>{client.review}</p>
                    <span>{client.rating}</span>
                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>
        </div>
    );
}


export default Testimonials;

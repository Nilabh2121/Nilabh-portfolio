import React, { useContext } from 'react';
import './Education.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jaypee from '../../img/Jaypee.jpg';
import Aklank from '../../img/Aklank.jpg';
import DAV from '../../img/DAV.jpg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { themeContext } from '../../Context';   
import Lottie from 'lottie-react';
import astronautLeft from '../../img/Astronaut1.png';
import astronautRight from '../../img/Astronaut2.png';




const Education = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const educationDetails = [
        {
            img: Jaypee,
            institution: "Jaypee University of Engineering and Technology",
            qualification: "B.Tech in Computer Science and Engineering",
            year: "(2020-2024)  CGPA = 7.9",
        },
        {
            img: Aklank,
            institution: "Aklank Public School Kota Rajasthan",
            qualification: "Higher Secondary School Examination (Class XII)",
            year: "(2018-2019)  CGPA = NA",
        },
        {
            img: DAV,
            institution: "GD D.A.V Public School, Satar Rd B. Deoghar",
            qualification: "Secondary School Examination (Class X)",
            year: "(2016-2017)  CGPA = 9.4",
        },
    ];

    return (
        <div className={`Education-Wrapper ${darkMode ? '' : 'light-mode'}`} id="Education">
            <div className="Lottie-Wrapper left">
                <img src={astronautRight} alt='' />
            </div>
            <div className="Lottie-Wrapper right">
                <img src={astronautLeft} alt='' />
            </div>

            <div className="Education-Heading">
                <span className="title" style={{ color: darkMode ? 'white' : 'black' }}>
                    Education <span className="highlight">Details</span>
                </span>
            </div>

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }}
                style={{ color: darkMode ? 'white' : 'black' }}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {educationDetails.map((entry, index) => (
                    <SwiperSlide key={index}>
                        <article className="Education-Entry">
                            <img src={entry.img} alt={`${entry.institution} logo`} />
                            <span className="institution" style={{ color: darkMode ? 'white' : '' }}>
                                {entry.institution}
                            </span>
                            <div className="details">
                                <span className="qualification">{entry.qualification}</span>
                                <span className="year">{entry.year}</span>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
                {/* <div className="swiper-button-next custom-next"></div>
                <div className="swiper-button-prev custom-prev"></div> */}
            </Swiper>
        </div>
    );
};

export default Education;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import BloodDonation from "../../img/bloodDonation.png";
import BistroBoss from "../../img/bistroBoss.png";
import DonationCamp from "../../img/donationCamp.png";
import FruitBrust from "../../img/fruitBrust.png";
import StudentDashboard from "../../img/studentDashboard.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://blood-donation-f7ec4.web.app/"><img src={BloodDonation} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://65731fda62d11516496a829b--bejewelled-licorice-aacd3a.netlify.app/"><img src={BistroBoss} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://glittering-tartufo-9fc729.netlify.app/"><img src={DonationCamp} alt="" /></a>
          
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://nahida30.github.io/fruit-brust/"><img src={FruitBrust} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://nahida30.github.io/education_website/index.html"> <img src={StudentDashboard} alt="" /></a>
          
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Hero.css";
import Navbar from "../NavBar/Navbar";
import { BiTargetLock } from "react-icons/bi";
import back1 from '../../assets/background.webp'
import back2 from '../../assets/BarboraBg.webp'
import back3 from '../../assets/johnBg.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
   function SamplePrevArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, display: "none" }}
         onClick={onClick}
       />
     );
   }
   function SampleNextArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, display: "none" }}
         onClick={onClick}
       />
     );
   }
   let settings = {
     dots: false,
     infinite: true,
     speed: 1000,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 5000,
     centerPadding: "60px",
     swipeToSlide: false,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
   };
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="hero-main">
        <div className="hero-slide">
          <Slider {...settings}>
            <img className="slide-img" src={back1} alt="" />
            <img className="slide-img" src={back2} alt="" />
            <img className="slide-img" src={back3} alt="" />
          </Slider>
        </div>
        <div className="hero-main-text">
          <p>THE BEST HOLIDAY EXPERIENCE</p>
          <h1>Stay like a local</h1>
          <div className="input-forms">
            <input placeholder="What are you searching for?" type="text" />
            <input placeholder="Location" className="location" type="text" />
            <BiTargetLock className="target" />
            <select placeholder="Categories">
              <option>Restaurants</option>
              <option>Hotels</option>
              <option>Cafes</option>
              <option>Garages</option>
            </select>
            <button className="search-btn">SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

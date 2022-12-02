import React from "react";
import "./middleSectionOne.css";
import MiddleSectionOneCard from "./MiddleSectionOneCard";
import prague from "../../assets/Prague.webp";
import paris from "../../assets/Paris.webp";
import newyork from "../../assets/New York.webp";
import barcelona from "../../assets/Barcelona.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { localAreas } from "../../constants/data";

const MiddleSectionOne = () => {
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
  const settings = {
    dots: true,
    // className: "slider variable-width",
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="middle-top">
      <p className="top-text">STAY AND EAT LIKE A LOCAL</p>
      <div className="guide">
        <h2>Our guides</h2>
        <a className="guide" href="#">
          see all guides
        </a>
      </div>

      {/* Show on larger devices */}
        <div className="grid">
            {localAreas.map((area, index) => {
                return (
                  <div className="xtra" key={index}>
                    <MiddleSectionOneCard
                      Poster={area.image}
                      City={area.location}
                      Description={area.description}
                    />
                  </div>
                )
            })}
        </div>

        <div className="mobile">
       <Slider {...settings}>
              {localAreas.map((area, index) => {
                  return (
                    <div className="xtra" key={index}>
                      <MiddleSectionOneCard
                        Poster={area.image}
                        City={area.location}
                        Description={area.description}
                      />
                    </div>
                  )
              })}
          
      </Slider>
      </div>
    </div>
  );
};

export default MiddleSectionOne;

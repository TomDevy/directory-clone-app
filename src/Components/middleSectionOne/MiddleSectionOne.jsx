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
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
      <div className="flex-card">
        <Slider {...settings}>
    <div className="link">
          <div className="place">
            <MiddleSectionOneCard
              Poster={prague}
              City="Prague"
              Description="City of hundred towers"
            />
          </div>
        </div>
        <div className="link">
          <div className="place">
            <MiddleSectionOneCard
              Poster={newyork}
              City="New York"
              Description="The big apple"
            />
          </div>
        </div>
        <div className="link">
          <div className="place">
            <MiddleSectionOneCard
              Poster={paris}
              City="Paris"
              Description="Artist capital of Europe"
            />
          </div>
        </div>
        <div className="link">
          <div className="place">
            <MiddleSectionOneCard
              Poster={barcelona}
              City="Barcelona"
              Description="Dali, Gaudi, Barrio, Gotico"
            />
          </div>
        </div>
        <div className="link">
          <div className="place">
            <MiddleSectionOneCard
              Poster={prague}
              City="Prague"
              Description="City of hundred towers"
            />
          </div>
        </div>
    </Slider>
      </div>
    </div>
  );
};

export default MiddleSectionOne;

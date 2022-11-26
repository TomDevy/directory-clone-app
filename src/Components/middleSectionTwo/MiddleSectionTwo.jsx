import React from "react";
import "./middleSectionTwo.css";
import MiddleSectionTwoCard from "./middleSectionTwoCard/MiddleSectionTwoCard";
import testD from "../../assets/stuartBg.webp";
import avatarD from "../../assets/stuart.webp";
import testC from "../../assets/BarboraBg.webp";
import avatarC from "../../assets/Barbora.webp";
import testB from "../../assets/pamelaBg.webp";
import avatarB from "../../assets/pamela.webp";
import testA from "../../assets/johnBg.webp";
import avatarA from "../../assets/john.webp";
import test from "../../assets/julieBg.webp";
import avatar from "../../assets/julie.webp";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiddleSectionTwo = () => {
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
    dots: true,
    // className: "slider variable-width",
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="Two-top">
      <p className="two-text">HURRY UP, THESE ARE EXPIRING SOON.</p>
      <div className="section-II-flex">
        <h1>Last minute deals</h1>
        <a href="">see all deals</a>
      </div>
      <div className="slide">
        <Slider {...settings}>
          <div>
            <MiddleSectionTwoCard
              Name="Julie"
              test={test}
              avatar={avatar}
              apartment="Sunny Private Studio-Apartment"
              room="Shared Room"
              amount="93"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="John"
              test={testA}
              avatar={avatarA}
              apartment="Cute Quirky Garden apt, NYC adjacent"
              room="Entire Apartment"
              amount="113"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Pamela"
              test={testB}
              avatar={avatarB}
              apartment="Modern Well-Appointed Room"
              room="Private Room"
              amount="80"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Barbora"
              test={testC}
              avatar={avatarC}
              apartment="Modern Apt-Vibrant Neighborhood"
              room="Shared Room"
              amount="93"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Stuart"
              test={testD}
              avatar={avatarD}
              apartment="Brooklyn Life, easy to Manhattan"
              room="Private Room"
              amount="123"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Julie"
              test={test}
              avatar={avatar}
              apartment="Sunny Private Studio-Apartment"
              room="Shared Room"
              amount="93"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="John"
              test={testA}
              avatar={avatarA}
              apartment="Cute Quirky Garden apt, NYC adjacent"
              room="Entire Apartment"
              amount="113"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Pamela"
              test={testB}
              avatar={avatarB}
              apartment="Modern Well-Appointed Room"
              room="Private Room"
              amount="80"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Barbora"
              test={testC}
              avatar={avatarC}
              apartment="Modern Apt-Vibrant Neighborhood"
              room="Shared Room"
              amount="93"
            />
          </div>
          <div>
            <MiddleSectionTwoCard
              Name="Stuart"
              test={testD}
              avatar={avatarD}
              apartment="Brooklyn Life, easy to Manhattan"
              room="Private Room"
              amount="123"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MiddleSectionTwo;

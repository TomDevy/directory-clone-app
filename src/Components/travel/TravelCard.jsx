import React from "react";
import './travelCard.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci"

const TravelCard = ({ poster, title, sub, description }) => {
  return (
    <div className="travel-card">
      <div>
        <img className="travel-bg" src={poster}></img>
      </div>
      <div className="travel">
        <div className="title-travel">
          <p>{title}</p>
        </div>
        <div className="sub">
          <p>{sub}</p>
        </div>
        <div className="date">
          <p>
            <CiClock2 />
            January 16, 2016
          </p>
        </div>
        <div className="desc">
          <p>{description}</p>
          <div>
            <p className="more">
              READ MORE
              <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;

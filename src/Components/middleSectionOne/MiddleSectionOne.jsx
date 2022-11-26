import React from "react";
import "./middleSectionOne.css";
import MiddleSectionOneCard from "./MiddleSectionOneCard";
import prague from "../../assets/Prague.webp";
import paris from "../../assets/Paris.webp";
import newyork from "../../assets/New York.webp";
import barcelona from "../../assets/Barcelona.webp";

const MiddleSectionOne = () => {
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
      </div>
    </div>
  );
};

export default MiddleSectionOne;

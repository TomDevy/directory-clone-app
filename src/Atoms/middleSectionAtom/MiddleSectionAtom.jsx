import React from "react";
import { BiDetail } from "react-icons/bi";
import "./middleSectionAtom.css";

const MiddleSectionAtom = ({ head, details, icon }) => {
  return (
    <div className="mid-atom">
      <span className="icon">{icon}</span>
      <h1 className="middle-head">{head}</h1>
      <p className="middle-details">{details}</p>
    </div>
  );
};

export default MiddleSectionAtom;

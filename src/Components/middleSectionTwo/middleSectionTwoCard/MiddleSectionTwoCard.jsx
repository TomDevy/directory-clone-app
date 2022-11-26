import React from "react";
import "./middleSectionTwoCard.css";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";

const MiddleSectionTwoCard = ({
  test,
  avatar,
  Name,
  apartment,
  room,
  amount,
}) => {
  return (
    <div className="section-II-card">
      <div className="">
        <img className="section-II-background" src={test} alt="" />
        <div className="avatar-name">
          <img className="avatar" src={avatar} alt="" />
          <p>{Name}</p>
        </div>
        <div>
          <AiOutlineHeart className="love" />
        </div>
        <div className="section-II-body">
          <h4>{apartment}</h4>
          <div className="star-text">
            <p>{room}</p>
            <div className="stars">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
          </div>
          <div className="card-footer">
            <h1>${amount}</h1>
            <p>per night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSectionTwoCard;

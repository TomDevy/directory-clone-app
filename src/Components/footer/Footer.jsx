import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { ImPinterest } from "react-icons/im";
import { FaVimeo } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import "./footer.css";

import visa from "../../assets/visa-card.svg";
import master from "../../assets/mastercard.svg";
import paypal from "../../assets/paypal.svg";
import western from "../../assets/western-union.svg";

const Footer = () => {
  return (
    <div className="footer-main-b">
      <div className="footer-b">
        <div className="directory">
          <h1 className="d-2">DIRECTORY</h1>
          <p className="d-text">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
          </p>
          <div className="d-icons">
            <AiOutlineTwitter />
            <BsFacebook />
            <IoLogoInstagram />
            <ImPinterest />
            <FaVimeo />
          </div>
        </div>
        <div className="rentals">
          <h1 className="d-2">RENTALS</h1>
          <ul>
            <li>Rooms</li>
            <li>Map on top</li>
            <li>Side map</li>
            <li>No map</li>
            <li>Room detail</li>
          </ul>
        </div>
        <div className="p-3">
          <h1 className="d-2">PAGES</h1>
          <ul>
            <li>Comparison</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="dod">
          <h1 className="d-2">DAILY OFFERS & DISCOUNTS</h1>
          <p className="d-text">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. At
            itaque temporibus.
          </p>
          <div>
            <FaTelegramPlane className="t-icon" />
            <input placeholder="Your Email Address"></input>
          </div>
        </div>
      </div>
      <div className="footer-l">
        <p>© 2021, Your company. All rights reserved.</p>
        <div className="pay">
          <img className="card" src={visa} alt="" />
          <img className="card" src={master} alt="" />
          <img className="card" src={paypal} alt="" />
          <img className="card" src={western} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

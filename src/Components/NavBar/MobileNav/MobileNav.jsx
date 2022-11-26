import React, { useState } from "react";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
import mainLogo from "../../../assets/logo.svg";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="mobile-nav">
      <div className="logo-mobile-search">
        <img src={mainLogo} alt="" />
        <BiMenu onClick={handleOpen} className="mobile-menu" />
      </div>
      {open && (
        <>
          <div className="mobile-drop">
            <div>
              <BiSearch className="mobile-search-btn" />
              <input
                className="mobile-search"
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <ul className="mobile-ul">
                <li className="mobile-list">
                  Home
                  <BiChevronDown />
                </li>
                <li className="mobile-list">
                  Template
                  <BiChevronDown />
                </li>
                <li className="mobile-list">
                  Contact
                  <BiChevronDown />
                </li>
                <li className="mobile-list">
                  Docs
                  <BiChevronDown />
                </li>
                <li>
                  <Link className="route" to="/signIn">
                    {/* <link to={"./SignIn"}> */}
                    Sign In
                    {/* </link> */}
                  </Link>
                </li>
                <li>Sign Up</li>
                <button className="mobile-add-btn">ADD A LISTING</button>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;

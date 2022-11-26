import React from "react";
import "./Navbar.css";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import mainLogo from "../../../src/assets/logo.svg";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-flex">
          <div className="logo-search">
            <img src={mainLogo} alt="" />
            <div>
              <BiSearch className="zoom" />
              <input placeholder="Search" type="text" />
              {/* <GrFormClose className="close" /> */}
            </div>
          </div>
          <div className="">
            <ul>
              <li>
                Home
                <BiChevronDown />
              </li>
              <li>
                Template
                <BiChevronDown />
              </li>
              <li>
                Contact
                <BiChevronDown />
              </li>
              <li>
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
              <button>ADD A LISTING</button>
            </ul>
          </div>
        </div>
        <MobileNav />
      </nav>
    </div>
  );
};

export default Navbar;

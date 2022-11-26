import React from "react";

import logo from "../../../assets/logo-square.svg";
import "./signIn.css";
import { MdClose } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { BsGoogle } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="s-body">
      <div className="s-main">
        <div className="sp-logo">
          <img className="s-logo" src={logo}></img>
          <MdClose className="s-icon" />
        </div>
        <div className="wc">
          <h1>Welcome back</h1>
        </div>
        <div className="login">
          <p className="label">EMAIL ADDRESS</p>
          <input className="user" placeholder="name@address.com" type="text" />
          <div className="p-word">
            <p className="label">PASSWORD</p>
            <a className="f-pass" href="">
              Forgot Password?
            </a>
          </div>
          <input className="pass" placeholder="Password" type="text" />
          <div className="cb">
            <input className="check" type="checkbox"/>
            <p className="check-name">Remember me for 30 days</p>
          </div>
          <div className="s-button">
            <button className="sign-btn">SIGN IN</button>
            {/* <div className="hr">
              <p>
                OR
                <hr className="right-hr" />
              </p>
            </div> */}
            <hr />
            <div className="both-but">
              <button className="fb-button">
                <FiFacebook className="icon-fb" />
                CONNECT WITH FACEBOOK
              </button>
              <button className="button-go">
                <BsGoogle className="icon-go" />
                CONNECT WITH GOOGLE
              </button>
              <hr />
            </div>
          </div>
          <div>
            <div className="pgh">
              <p className="p-sup">
                Don't have an account yet?
              </p>
                <a className="s-up" href="">
                  Sign Up
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

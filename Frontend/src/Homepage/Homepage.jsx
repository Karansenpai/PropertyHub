import React from "react";
import { Component } from "../../components/Component";
import { Login } from "../../components/Login";
import { Logo } from "../../components/Logo";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { SignUp } from "../../components/SignUp";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <Logo className="logo-instance" />
        <div className="frame">
          <div className="frame-2">
            <div className="frame-2">
              <img className="img" alt="Image" src="https://c.animaapp.com/oQOb77b8/img/image-5@2x.png" />
              <img className="image-2" alt="Image" src="https://c.animaapp.com/oQOb77b8/img/image-4@2x.png" />
              <img className="image-3" alt="Image" src="https://c.animaapp.com/oQOb77b8/img/image-3@2x.png" />
            </div>
          </div>
        </div>
        <p className="finding-the-best">
          <span className="span">Finding The </span>
          <span className="text-wrapper-3">Best Properties&nbsp;&nbsp;</span>
          <span className="span">
            in&nbsp;&nbsp;
            <br />
            For{" "}
          </span>
          <span className="text-wrapper-3">You</span>
        </p>
        <Login className="login-instance" />
        <SignUp className="sign-up-instance" />
        <div className="text-wrapper-4">About Us</div>
        <div className="component-3">
          <Component property1="buy-property" />
          <Component property1="sell-property" />
          <Component property1="rent-property" />
        </div>
        <div className="component-2-wrapper">
          <PropertyDefaultWrapper className="property-default" property1="default" />
        </div>
      </div>
    </div>
  );
};

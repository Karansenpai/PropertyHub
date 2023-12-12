import React from "react";
import "./HomePage.css";

export function Homepage() {
  return (
    <div className="container">
    <div className="HomePage">
      <div className="Logo">
        <div className="Propertyhub">PropertyHub</div>
        <img className="Image2" src="https://via.placeholder.com/194x180" alt="Logo" />
        <div className="Line1"></div>
      </div>
      <div className="Frame1">
        <div className="Frame2">
          <div className="Frame3">
            <img className="Image5" src="https://via.placeholder.com/344x345" />
            <img className="Image4" src="https://via.placeholder.com/318x345" />
            <img className="Image3" src="https://via.placeholder.com/285x345" />
          </div>
        </div>
      </div>
      <div className="FindingTheBestPropertiesInForYou">
        <span>Finding The </span>
        <span>Best Properties </span>
        <span>in <br /> For </span>
        <span>You</span>
      </div>
      <div className="Login">
        <div className="LoginText">Login</div>
      </div>
      <div className="SignUp">
        <div className="SignUpText"> Sign Up</div>
      </div>
      <div className="AboutUs">About Us</div>
      <div className="Component1">
        <div className="Property1BuyProperty">
          <div className="Buy"> Buy </div>
        </div>
        <div className="Property1SellProperty">
          <div className="Sell"> Sell </div>
        </div>
        <div className="Property1RentProperty">
          <div className="Rent"> Rent </div>
        </div>
      </div>
      <div className="Component2">
        <div className="Property1Default">
          <div className="Component2Content">
            <div className="Location">Your Location</div>
            <div className="Arrow2"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

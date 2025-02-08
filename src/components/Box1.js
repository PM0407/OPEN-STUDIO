import React from "react";
import background2 from "../assets/bg.png";
import background3 from "../assets/bg.png";
import background from "../assets/bg.png";
import image from "../assets/bg.png";
import "./Box1.css";

export const Background = () => {
  return (
    <div className="background1">
      <div className="overlap">
        <div className="div" />

        <div className="heading-plan">Plan &amp; Organize</div>

        <div className="div-2" />

        <div className="border" />

        <div className="container">
          <div className="overlap-group">
            <div className="overlap-group-2">
              <div className="horizontal-divider" />

              <div className="horizontal-divider-2" />

              <div className="horizontal-divider-3" />

              <div className="background-wrapper">
                <div className="div-3" />
              </div>

              <div className="div-wrapper">
                <div className="div-wrapper-2">
                  <div className="div-4" />
                </div>
              </div>

              <img className="img" alt="Background" src={background2} />
            </div>

            <img className="img-2" alt="Background" src={background} />

            <div className="background-wrapper-2">
              <div className="div-5" />
            </div>

            <img className="img-3" alt="Background" src={image} />

            <img className="img-4" alt="Background" src={background3} />
          </div>
        </div>
      </div>

      <p className="we-enhance">
        We enhance efficiency by integrating
        <br />
        apps and reducing downtime.
      </p>
    </div>
  );
};

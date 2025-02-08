import React from "react";
import "./ScrollEffect.css";

const ScrollEffect = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {[...Array(10)].map((_, index) => (
          <span key={index}>JOIN A BETA</span>
        ))}
      </div>
      <div className="scroll-content duplicate">
        {[...Array(10)].map((_, index) => (
          <span key={index}>JOIN A BETA</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollEffect;

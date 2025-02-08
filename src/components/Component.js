import React from "react";
 import  Component1 from "../assets/image13.png"; 
 import "./Component.css"; 
 const Container = () => { 
    return ( 
    <div className="container"> 
   <img src={Component1} alt="Component 1" className="component" /> {/* Using img tag for the image */}
     <div className="text-wrapper">How it works</div> 
     <div className="heading">
         <p className="top-notch-designs"> Top–notch designs, <br /> 
         delivered at your doorstep. </p> 
         </div> 
         </div> 
         );
         };
         export default Container;
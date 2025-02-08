'use client'

import { useState, useEffect } from "react";
import React from 'react';
import { Pointer } from './Cursor.tsx'; // Import Pointer component
import { ArrowUpRight } from "lucide-react"; // Import arrow icon
import Squares from "./Squares.js";
import Particles from "./Particle.jsx";
import image from "../assets/image1.png"; // Your logo image
import image1 from "../assets/image10.png"; // Your logo image
import image2 from "../assets/image9.png"; 
import image3 from "../assets/image11.png"; 
import { cn } from '../utils/cn.ts';

const HeaderWithHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Pointer name="You" className="relative flex h-fit w-full items-end justify-center">
      <div className="header-container" style={{ cursor: 'none' }}> {/* Hide the default cursor */}
        <header className={`header ${isScrolled ? "scrolled" : ""}`} style={{ cursor: 'none' }}> {/* Ensure the header doesn't show the default cursor */}
          <nav>
            <div className="header-right">
              <img src={image3} alt="Logo" className="logo" />
              <img src={image2} alt="Logo" className="logo" />
            </div>
            <ul>
              {["Home", "Why me?", "Work", "Reviews", "Pricing", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ cursor: 'none' }}>{item}</a> {/* Hide cursor on links */}
                </li>
              ))}
            </ul>
            <div className="header-left">
              <button className="get-in-touch-btn" style={{ cursor: 'none' }}> {/* Hide cursor on button */}
                Book a 15 mins call
                <ArrowUpRight size={18} className="arrow-icon" />
              </button>
            </div>
          </nav>
        </header>
      </div>

      <section className="hero relative">
        {/* Add the particle background */}
        <div className="particles-container">
          <Particles />
        </div>

        <div className="background">
          <div className="image">
            <div className="div" />
          </div>

          <div className="text-wrapper">open studio - website Partner</div>

          <div className="border" />
        </div>

        <div className="squares-container">
          <Squares speed={0} squareSize={50} direction="diagonal" borderColor="#625b5b" hoverFillColor="#222" blur={0} />
        </div>

        <div className="image-container">
          <img src={image} alt="Decorative" className="custom-image image-left" />
          <img src={image1} alt="Decorative" className="custom-image image-right" />
        </div>

        <div className="hero-content">
          <h1>
            Elevate your brand with
            <br />
            Unmatched creative website
          </h1>

          <p className="description">
            Discover the most incredible creations hand-crafted to
            <br /> elevate your website or app and better position your brand.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary" style={{ color: 'black' }}>Start a conversation<ArrowUpRight size={18} /></button>
            <ArrowUpRight size={18} className="arrow-icon1" />
          </div>
        </div>

        <div className="blurred-squares-container">
          <Squares speed={0.05} squareSize={90} direction="left" borderColor="#625b5b" hoverFillColor="#222" blur={15} />
        </div>
      </section>
    </Pointer>
  );
};

export default HeaderWithHero;

import { motion } from "framer-motion"
import Squares from "./Squares.js"
import Particles from "./Particle.jsx"
import image from "../assets/image1.png" // Adjust path based on component location
import { Example } from "./Hero.tsx";
const Hero = () => {
  return (
    <section className="hero relative">

     <Example/>
      {/* Add the particle background */}
      <div className="particles-container">
        <Particles />
      </div>

      <div className="squares-container">
        <Squares speed={0.2} squareSize={90} direction="diagonal" borderColor="#625b5b" hoverFillColor="#222" blur={0} />
        
      </div>

      <div className="hero-content">
        <h1
          style={{
            display: "inline-block",
            position: "relative",
            textAlign: "center",
            lineHeight: "1.2",
            marginLeft: "100px",
          }}
        >
          I create webpages that
          <span
            style={{
              marginLeft: "10px",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            transform
            <motion.img
              src={image}
              alt="Black on blue"
              style={{
                width: "100px",
                height: "auto",
                marginLeft: "10px",
                marginTop: "50px",
              }}
              animate={{
                translateY: ["0px", "-10px", "0px"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />
          </span>
          <br />
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            <motion.img
              src={image}
              alt="Black on blue"
              style={{
                width: "100px",
                height: "auto",
                marginRight: "5px",
                marginLeft: "-110px",
                marginTop: "50px",
                transform: "scaleX(-1)", // Flip the second image horizontally
              }}
              animate={{
                translateY: ["0px", "10px", "0px"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />
            your visitors into clients!
          </span>
        </h1>

        <div className="cta-buttons">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-secondary">See my work</button>
        </div>
      </div>

      <div className="blurred-squares-container">
        <Squares speed={0.05} squareSize={90} direction="left" borderColor="#625b5b" hoverFillColor="#222" blur={15} />
      </div>
    </section>
  )
}

export default Hero


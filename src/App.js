import Header from "./components/Header"
import  HeaderWithHero  from "./components/Hero"
import LogoWall from "./components/LogoWall"
import { TextReveal } from "./components/Text.tsx"

import one from "./assets/1.png"
import Two from "./assets/2.png"
import three from "./assets/3.png"
import "./styles/TextReveal.css"
import  {Exa}  from "./components/Icons.js"
import Container from './components/Component.js';
import {Box1} from "./components/Box1";

import { Containerss } from "./components/para.tsx"
import Heading from "./components/Price.js"
import Footer from "./components/Footer.js"
import PricingSection from "./components/PriceCard.js"
import ScrollEffect from "./components/ScrollEffect.js"
import  {MarqueeDemo}  from "./components/MarqueeDemo.tsx"
const logoImgs = [
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } }, // Adjust height here
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } }, // Adjust height here
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } }, // Adjust height here
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: one, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: Two, altText: "React Bits Logo", style: { height: '200px' } },
  { imgUrl: three, altText: "React Bits Logo", style: { height: '200px' } }, // Adjust height here
]




const App = () => {
  return (
    <div className="app relative">
    
      <main>
        
        <HeaderWithHero/>

        {/* Logo Wall Section */}
        <div style={{ height: "100px", width: "100%", position: "relative" }}>
          <LogoWall
            items={logoImgs}
            direction="horizontal"
            pauseOnHover={true}
            size="clamp(8rem, 1rem + 20vmin, 25rem)"
            duration="105s"
            bgColor="#060606"
            bgAccentColor="#111111"
          />
        </div>

        {/* Text Reveal Section */}
        <TextReveal/>
        <Container/>
   <Box1/>
<Containerss/>
<MarqueeDemo/>
 <Heading/>
 <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", padding: "20px" }}>
      <PricingSection />
    </div>
    <ScrollEffect/>
<Footer/>


     
        {/* Background Effects */}
        <div className="background-effects">
          <div className="bg-effect bg-effect-1"></div>
          <div className="bg-effect bg-effect-2"></div>
        </div>
      </main>
    </div>
  )
}

export default App


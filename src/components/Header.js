import { useState, useEffect } from "react";
import { Pointer } from './Cursor.tsx'; // Import Pointer component
import image from "../assets/image9.png"; // Your logo image
import image1 from "../assets/image11.png"; // Your logo image
import { ArrowUpRight } from "lucide-react"; // Import arrow icon
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header-container" style={{ cursor: 'none' }}> {/* Hide the default cursor */}
      <Pointer name="You" className="relative flex h-full w-full items-center justify-center" style={{ zIndex: 999 }}>
        <header className={`header ${isScrolled ? "scrolled" : ""}`} style={{ cursor: 'none' }}> {/* Ensure the header doesn't show the default cursor */}
          <nav>
            <div className="header-right">
              <img src={image1} alt="Logo" className="logo" />
              <img src={image} alt="Logo" className="logo" />
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
      </Pointer>
    </div>
  );
};

export default Header;

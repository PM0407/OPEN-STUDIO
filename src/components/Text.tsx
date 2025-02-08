"use client";
import React, { useState, useEffect, useRef, FC } from "react";
import { motion } from "framer-motion";

export const TextReveal: FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);

  const lines = [
    "We know what’s going on. You need",
    "top-notch design to stand out in the",
    "tech world, but hiring in-house",
    "designers can be costly and time-",
    "consuming.",
    "That’s when open studio",
    "comes in.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLocked(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isLocked) return;

      event.preventDefault();

      if (isCooldown) return;

      setIsCooldown(true);
      setTimeout(() => {
        setIsCooldown(false);
      }, 300);

      setCurrentLine((prev) => {
        const next = prev + (event.deltaY > 0 ? 1 : -1);
        return Math.max(0, Math.min(next, lines.length));
      });

      if (currentLine === lines.length && event.deltaY > 0) {
        setIsLocked(false);
      }
      if (currentLine === 0 && event.deltaY < 0) {
        setIsLocked(false);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentLine, isLocked, isCooldown]);

  return (
    <section ref={sectionRef} className="h-screen flex justify-center items-center bg-black">
      <div className="text-reveal-text">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, color: "#6b6b6b" }}
            animate={
              i < currentLine
                ? { color: "#ffffff", opacity: 1 }
                : { color: "#6b6b6b", opacity: 1 }
            }
            exit={{ opacity: 0, color: "#6b6b6b" }}
            transition={{ duration: 0.4 }}
            className="block text-lg md:text-2xl"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

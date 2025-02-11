"use client"

import React, { useEffect, useRef } from "react"
import "./para.css"

export const Containerss = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const elements = container.querySelectorAll(".animate-on-scroll")

      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

        if (isVisible) {
          const scrolled = window.scrollY - rect.top
          const speed = el.getAttribute("data-speed") || "0.1"
          const yPos = scrolled * Number(speed);

          // Apply parallax transform
          (el as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`
          el.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container1" ref={containerRef}>
      <div className="overlap-group animate-on-scroll" data-speed="0.1">
        <div className="png animate-on-scroll" data-speed="0.15" />
        <div className="mockup-png animate-on-scroll" data-speed="0.2" />
        <div className="sm-png animate-on-scroll move-down" data-speed="0.12" />
        <div className="sm-mockup-png animate-on-scroll move-up" data-speed="0.18" />
      </div>

      <div className="overlap animate-on-scroll" data-speed="0.14">
        <div className="div animate-on-scroll" data-speed="0.16" />
        <div className="png-2 animate-on-scroll" data-speed="0.19" />
        <div className="sm-png-2 animate-on-scroll move-down" data-speed="0.13" />
      </div>

      <div className="png-3 animate-on-scroll" data-speed="0.17" />
      <div className="png-4 animate-on-scroll" data-speed="0.19" />

      <div className="overlap-2 animate-on-scroll" data-speed="0.12">
        <div className="png-5 animate-on-scroll" data-speed="0.18" />
        <div className="png-6 animate-on-scroll" data-speed="0.14" />
        <div className="png-7 animate-on-scroll" data-speed="0.16" />
        <div className="sm-png-3 animate-on-scroll move-up" data-speed="0.13" />
        <div className="sm-png-4 animate-on-scroll move-down" data-speed="0.15" />
      </div>

      <div className="png-8 animate-on-scroll" data-speed="0.17" />
    </div>
  )
}

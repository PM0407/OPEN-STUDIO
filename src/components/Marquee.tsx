"use client"

import React,{ type ReactNode, useRef, useEffect, useState } from "react"
import "./Marquee.css"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  speed?: number
  className?: string
}

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  speed = 20,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth
      const clone = contentRef.current.cloneNode(true) as HTMLDivElement
      containerRef.current.appendChild(clone)

      const totalWidth = contentWidth * 2
      const duration = totalWidth / speed

      containerRef.current.style.setProperty("--duration", `${duration}s`)
      containerRef.current.style.setProperty("--direction", direction === "left" ? "normal" : "reverse")

      setIsReady(true)
    }
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={`marquee ${pauseOnHover ? "pause-on-hover" : ""} ${className} ${isReady ? "is-ready" : ""}`}
    >
      <div ref={contentRef} className="marquee-content">
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}


'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '../utils/cn.ts'

export const Pointer = ({
  children,
  className,
  name
}: {
  children: React.ReactNode
  className?: string
  name: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 })

  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }

    updateRect()
    window.addEventListener('resize', updateRect)

    return () => window.removeEventListener('resize', updateRect)
  }, [])

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      onMouseLeave={() => setIsInside(false)}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
          x.set(e.clientX - rect.left + window.scrollX)
          y.set(e.clientY - rect.top + window.scrollY)
        }
      }}
      style={{ cursor: 'none' }}>
      
      {/* Keep cursor always mounted but toggle visibility */}
      <FollowPointer x={smoothX} y={smoothY} name={name} isVisible={isInside} />

      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  name,
  isVisible
}: {
  x: any
  y: any
  name: string
  isVisible: boolean
}) => {
  return (
    <motion.div
      className="w-fit h-fit rounded-full bg-white text-black px-4 py-2"
      style={{
        x,
        y,
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: '50',
        opacity: isVisible ? 1 : 0,  // Hide instead of unmounting
        transition: 'opacity 0.2s ease-in-out' // Smooth fade in/out
      }}>
      
      <svg
        stroke="#039754"
        fill="#039754"
        strokeWidth="2"
        viewBox="0 0 16 16"
        height="4em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: 'rotate(270deg) translateX(2px)', // Rotate arrow
        }}>
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>

      <div
        className="w-fit h-fit px-4 py-2"
        style={{
          alignItems: "flex-start", /* Corrected: Use camelCase for JSX styles */
          backgroundColor: "#039754", /* Corrected: Use camelCase for JSX styles */
          border: "2px solid", /* Corrected: Missing value for border */
          borderColor: "#039754", /* Corrected: Use camelCase for JSX styles */
          borderRadius: "2px 24px 24px 24px", /* Corrected: Add quotes for values */
          display: "inline-flex", /* Corrected: Add quotes for values */
          gap: "8px", /* Corrected: Add quotes for values */
          padding: "8px 20px 8px 16px", /* Corrected: Add quotes for values */
          position: "relative" /* Corrected: Add quotes for values */
        }}>
        
        {name || 'You'}
      </div>

    </motion.div>
  )
}

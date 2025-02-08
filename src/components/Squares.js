import { useRef, useEffect, useState } from "react"
import "../styles/index.css"

const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  blur = 0,
}) => {
  const canvasRef = useRef(null)
  const requestRef = useRef(null)
  const numSquaresX = useRef()
  const numSquaresY = useRef()
  const gridOffset = useRef({ x: 0, y: 0 })
  const [hoveredSquare, setHoveredSquare] = useState(null)

  // Predefined positions of the 5 squares you want to fill with light grey
  const fixedGreySquares = [
    { x: 12, y: 2 },  // Position 1
    { x: 5, y: 7 },  // Position 2
    { x: 8, y: 10 }, // Position 3
    { x: 12, y: 14 }, // Position 4
    { x: 15, y: 12 }, // Position 5
    { x: 20, y: 9 }, // Position 5
    { x: 9, y: 5 }, // Position 5
    { x: 18, y: 4 },  // Position 1
    { x: 20, y: 2 },  // Position 1
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (blur > 10) {
        ctx.filter = `blur(${blur}px)`
      }

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          // Check if the current square is one of the predefined light grey squares
          const isGreySquare = fixedGreySquares.some(
            (pos) => pos.x === Math.floor(x / squareSize) && pos.y === Math.floor(y / squareSize)
          )

          if (isGreySquare) {
            ctx.fillStyle = "#333333"  // Light grey color
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          } else if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      ctx.filter = "none"

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2,
      )
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      gradient.addColorStop(1, "#060606")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const moveSquares = () => {
      gridOffset.current.x += direction === "left" ? -speed : speed
    }

    const animate = () => {
      moveSquares()
      drawGrid()
      requestRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const x = Math.floor(mouseX / squareSize)
      const y = Math.floor(mouseY / squareSize)

      setHoveredSquare({ x, y })
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize, blur])

  return <canvas ref={canvasRef} className="squares-canvas"></canvas>
}

export default Squares

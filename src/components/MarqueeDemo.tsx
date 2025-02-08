import { Marquee } from "./Marquee.tsx"
import "./MarqueeDemo.css"
import React from "react"
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure className="review-card">
      <div className="review-header">
        <img className="review-avatar" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
        <div className="review-info">
          <figcaption className="review-name">{name}</figcaption>
          <p className="review-username">{username}</p>
        </div>
      </div>
      <blockquote className="review-body">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="marquee-demo">
      <Marquee pauseOnHover className="marquee-row" direction="right" speed={20}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="marquee-row" direction="left" speed={20}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="gradient-overlay left"></div>
      <div className="gradient-overlay right"></div>
    </div>
  )
}


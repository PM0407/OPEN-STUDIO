"use client"
import styles from "./PriceCard.module.css"
import image from "./image.png";
const PricingSection = () => {
  const handleGetStarted = () => {
    console.log("Get started clicked")
  }

  const handleBookCall = () => {
    console.log("Book call clicked")
  }

  return (
    <div className={styles.pricingContainer}>
      {/* Single Project Card */}
      <div className={styles.pricingCard}>
        <div className={styles.cardHeader}>
          <div className={styles.icon}><img src={image}></img></div>
          <h3>Single project</h3>
          <p className={styles.subtitle}>Limited page or feature</p>
          <div className={styles.price}>
            <span className={styles.amount}>$2,499</span>
            <span className={styles.dot}>•</span>
          </div>
          <p className={styles.description}>Something deep, design, development</p>
          <button className={styles.ctaButton} onClick={handleGetStarted}>
            Get started
          </button>
        </div>
        <ul className={styles.featuresList}>
          <li>Unique subpages: $500/page</li>
          <li>Premier development</li>
          <li>48 hour delivery</li>
          <li>Direct access slack channel</li>
          <li>Onboarding strategy call</li>
          <li>High converting copy, design included</li>
          <li>UX research and user journey</li>
          <li>Satisfaction guaranteed</li>
        </ul>
      </div>

      {/* Subscription Plan Card */}
      <div className={styles.pricingCard}>
        <div className={styles.cardHeader}>
          <div className={styles.icon}><img src={image}></img></div>
          <h3>Subscription Plan</h3>
          <p className={styles.subtitle}>1 Active Request</p>
          <div className={styles.price}>
            <span className={styles.amount}>$4,499</span>
            <span className={styles.dot}>•</span>
          </div>
          <p className={styles.description}>Pause or cancel anytime</p>
          <button className={styles.ctaButton} onClick={handleGetStarted}>
            Get started
          </button>
        </div>
        <ul className={styles.featuresList}>
          <li>No contract or commitment</li>
          <li>Unlimited requests</li>
          <li>48 hour delivery</li>
          <li>Direct access slack channel</li>
          <li>Multiple brands, one subscription</li>
          <li>Unlimited revisions</li>
          <li>Includes copy, design, & development</li>
          <li>Pause anytime</li>
        </ul>
      </div>

      {/* Custom Card */}
      <div className={styles.pricingCard}>
        <div className={styles.cardHeader}>
          <div className={styles.icon}><img src={image}></img></div>
          <h3>Custom</h3>
          <p className={styles.subtitle}>Figma only</p>
          <div className={styles.price}>
            <span className={styles.amount}>$899+</span>
          </div>
          <p className={styles.description}>We're offering a variety of other design services.</p>
        </div>
        <ul className={styles.featuresList}>
          <li>Web apps</li>
          <li>Desktop apps</li>
          <li>Mobile apps</li>
        </ul>
        <div className={styles.contactSection}>
          <div className={styles.calendarIcon}>📅</div>
          <h4>Can't decide? Let's talk</h4>
          <p>Learn more how we work and how we can help you and your business.</p>
          <button className={styles.bookCallButton} onClick={handleBookCall}>
            Book a call
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingSection


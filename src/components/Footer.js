"use client"
import styles from "./Footer.module.css"
import { ArrowRight } from "lucide-react"
import logo from "../assets/footer.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            LET'S MAKE IT
            <br />
            HAPPEN
            <br />
            TOGETHER.
          </h1>

          <div className={styles.rightContent}>
            <p className={styles.description}>
              We champion transformation through design, regardless of your project idea or goal.
            </p>
            <button className={styles.cta}>
              START A CONVERSATION
              <ArrowRight className={styles.arrow} />
            </button>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            Email ↗
          </a>
          <a href="#" className={styles.socialLink}>
            Instagram ↗
          </a>
          <a href="#" className={styles.socialLink}>
            Twitter (X) ↗
          </a>
          <a href="#" className={styles.socialLink}>
            LinkedIn ↗
          </a>
          <a href="#" className={styles.socialLink}>
            Medium ↗
          </a>
          <a href="#" className={styles.socialLink}>
            Spotify ↗
          </a>
        </div>

        <div className={styles.logo}>
  <img src={logo} alt="Company Logo" className={styles.logoImage} />
</div>


        <footer className={styles.footer}>
          <p>© 2024 Check Design Company. All Rights Reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and conditions</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Footer;


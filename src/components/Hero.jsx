import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Front-End Developer</h1>

        <p className={styles.description}>
          Hi there 👋, I'm Siva Sankar Reddy, a passionate Front-end developer
          based in Andhrapradesh, India. I love experimenting and crafting
          beautiful and functional websites.
        </p>

        <a
          className={styles.resumeBtn}
          href={getImageUrl("contact/myresume.pdf")}
          download
        >
          My Resume
        </a>
      </div>
      <img
        className={styles.heroImage}
        src={getImageUrl("hero/heroImage.png")}
        alt="hero"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

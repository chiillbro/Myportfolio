import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siva Sankar Reddy</h1>
        <p className={styles.description}>
          I have developed a deep passion for programming and have definitely
          acquired some valuable skills along the way.. As a recent graduate,
          I'm currently looking for an opportunity to contribute my skills as
          one of the roles
        </p>
        <ul>
          <li>Front-end developer</li>
          <li>Back-end developer</li>
          <li>Full-stack developer</li>
        </ul>

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
        alt="hero-image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

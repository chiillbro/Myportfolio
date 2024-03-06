import { getImageUrl } from "../utils";
import styles from "./About.module.css";
export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                As a Front-end developer I've mastered in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I have aced skills required in developing fast and optimized
                back-end systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack developer</h3>
              <p>I'm evolving myself as a Full-stack developer day by day</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

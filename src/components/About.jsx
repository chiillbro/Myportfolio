import { getImageUrl } from "../utils";
import styles from "./About.module.css";
export default function About() {
  const fdMap = "Front - end web developer".split("");
  console.log(fdMap);
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>A Bit About Me</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/about.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                My journey in the world of web development began since my
                mid-college life, the foundation that has become the bedrock of
                my technical proficiency. Today, I bring not only a solid
                understanding of web development principles but also a passion
                for creating seamless and engaging user interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/design1.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Aesthetics Matter</h3>
              <p>
                I don't just code; I design experiences. Paying attention to the
                visual aspect of web development is crucial to me. I believe
                that a well-designed interface enhances user engagement and
                contributes to the overall success of a project.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/internet.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Always Learning</h3>
              <p>
                The dynamic nature of the tech industry inspires me to stay on
                the cutting edge. I'm constantly learning and experimenting with
                new tools and technologies to stay ahead of the curve. Whether
                it's attending conferences, participating in online courses, or
                contributing to open-source projects, I'm committed to
                continuous growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

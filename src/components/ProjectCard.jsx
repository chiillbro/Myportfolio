import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../utils";
export default function ProjectCard({
  project: { title, imageSrc, skills, description, demo, source },
}) {
  return (
    <div className={styles.container} id="projects">
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`img of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Live Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
}

import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import { getImageUrl } from "../utils";
export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Each project is a unique piece of development
        </h2>
        <img
          width={35}
          height={35}
          src={getImageUrl("projects/block2.png")}
          alt=""
        />
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

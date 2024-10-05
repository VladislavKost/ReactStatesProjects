import PropTypes from "prop-types";
import styles from "./ProjectList.module.css";

export const ProjectList = ({ items }) => {
  const projects = items;
  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.img}
          className={styles.item}
          alt="Project Image"
        />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProjectList } from "../ProjectList";
import { Toolbar } from "../Toolbar";

export const Portfolio = ({ projects }) => {
  const [curFilter, setCurFilter] = useState("All");
  const [curProjects, setCurProjects] = useState(projects);

  useEffect(() => {
    setCurProjects(filterProjects());
  }, [curFilter]);

  const filterProjects = () => {
    if (curFilter === "All") {
      return projects;
    }
    const filteredProjects = projects.filter((project) => {
      return project.category === curFilter;
    });
    return filteredProjects;
  };

  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={curFilter}
        onSelectFilter={(filter) => {
          setCurFilter(filter);
        }}
      />
      <ProjectList items={curProjects} />
    </div>
  );
};

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

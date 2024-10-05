import PropTypes from "prop-types";
import styles from "./Toolbar.module.css";

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div>
      {filters.map((filter, index) => {
        return (
          <button
            className={
              styles.btn + `${filter === selected ? " " + styles.selected : ""}`
            }
            key={index}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

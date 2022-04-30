import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          backgroundColor={showAdd ? "red" : "green"}
          text={showAdd ? "Hide" : "Add Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// Set default properties
Header.defaultProps = {
  title: "Task Tracker",
};

// Set property types
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// Pass CSS styling
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;

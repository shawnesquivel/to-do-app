import PropTypes from "prop-types";

const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "green",
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;

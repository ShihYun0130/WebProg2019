import React from "react";
import PropTypes from "prop-types";
import '../styles.css';

const Button = props => {
  if (props.isEditing) {
    return (
      <button className="action" onClick={props.toggleIsEditingAt}>
        save
      </button>
    );
  }
  return (
    <img className="todo-app__item-x" alt="x" src={"./img/x.png"} onClick={props.handleRemove}/>
  );
};

Button.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Button;

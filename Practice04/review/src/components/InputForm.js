import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const InputForm = props => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="todoInput">
      <input
        id = "todo-input"
        className="todo-app__input"
        type="text"
        onChange={props.handleItemInput}
        value={props.pendingItem}
        placeholder="Add an item" />
    </form>
  );
};

InputForm.propTypes = {
  newItemSubmitHandler: PropTypes.func.isRequired,
  handleItemInput: PropTypes.func.isRequired,
  pendingItem: PropTypes.string.isRequired
};

export default InputForm;

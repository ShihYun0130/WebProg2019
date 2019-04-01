import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import './styles.css';

const List = props => {
  return (
    <ul className="todo-app__list">
      {props.list.map((item, index) => (
        <ListItem
          key={index}
          item={item.name}
          isEditing={item.isEditing}
          isChecked={item.isChecked}
          handleRemove={() => props.removeItemAt(item.id)}
          toggleIsEditingAt={() => props.toggleIsEditingAt(item.id)}
          toggleChecked={() => props.toggleChecked(item.id)}
          setName={text => props.setNameAt(text, item.id)} />
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeItemAt: PropTypes.func.isRequired,
  toggleChecked: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired
};

export default List;

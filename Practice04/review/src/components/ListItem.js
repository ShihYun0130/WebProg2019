import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
//Import Compon
import ItemName from "./ItemName";
import Button from "./Button";
import './styles.css';

const ListItem = props => {
    return (
        <li className="todo-app__item"> 
          <Checkbox 
            isChecked={props.isChecked}
            toggleChecked={props.toggleChecked} />
          <ItemName
            className = "todo-app__item-detail"
            isEditing={props.isEditing}
            isChecked={props.isChecked}
            item={props.item}
            toggleIsEditingAt={props.toggleIsEditingAt}
            toggleChecked={props.toggleChecked}
            handleNameEdits={e => props.setName(e.target.value)} >
            {props.item}
          </ItemName>
          <Button
            isEditing={props.isEditing}
            toggleIsEditingAt={props.toggleIsEditingAt}
            handleRemove={props.handleRemove} />
        </li>
    );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  toggleChecked: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired
};

export default ListItem;

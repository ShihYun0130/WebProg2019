import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const ItemName = props => {
  if (props.isEditing) {
    return (
      <input 
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }
  else if (props.isChecked){
    return <h1 style={{textDecoration: 'line-through'}} onClick={props.toggleIsEditingAt}>{props.children}</h1>
  }
  else {
    return <h1 onClick={props.toggleIsEditingAt}>{props.children}</h1>;
  }
};

ItemName.propTypes = {
  item: PropTypes.string.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
  toggleIsEditingAt: PropTypes.func.isRequired
};

export default ItemName;

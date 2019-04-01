import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const Checkbox = props => {
    if (props.isChecked) {
        return(
           <div style={{width: '30px', height: '30px', margin: '15px', position: 'relative'}}>
            <label className="container">
                <input type="checkbox" onClick={props.toggleChecked} />
                <div className="checkmark_true" />
            </label>
          </div>
        );
    }
    else{
        return(
           <div style={{width: '30px', height: '30px', margin: '15px', position: 'relative'}}>
            <label className="container">
                <input type="checkbox" onClick={props.toggleChecked} />
                <div className="checkmark_false" />
            </label>
          </div>
        );
    }
};

Checkbox.propTypes = {
  toggleChecked: PropTypes.func.isRequired
};

export default Checkbox;

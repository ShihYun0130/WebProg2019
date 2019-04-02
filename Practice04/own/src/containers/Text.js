import React from 'react';
import './main.css';

const Text = props => { 
    if(props.isCompleted){
			return(
			<h1 style={{textDecoration: 'line-through'}}>{props.text}</h1>);
		}
		else{
			return(
				<h1>{props.text}</h1>
			);
		}        
	};



export default Text;
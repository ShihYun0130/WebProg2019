import React from 'react';
import './main.css';

export default ({ text, onClick }) => 
{ return <button onClick={onClick}>{text}</button>; }
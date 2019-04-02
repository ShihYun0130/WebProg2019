import React from 'react';
import './main.css';
import Button from './Button';

const Footer = (props) => { 
  if(props.listLength === 0){
    return(
      <footer className="todo-app__footer" style={{visibility: 'hidden'}}>
        <div className="todo-app__total"> 0 left </div>
        <ul className="todo-app__view-buttons">
          <Button text="All" onClick={props.allItem}/>
          <Button text="Active" onClick={props.activeItem} />
          <Button text="Completed" onClick={props.displayCompletedItem} />
        </ul>
        <div className="todo-app__clean">
          <Button text="clear completed" onClick={props.clearCompleted}/>
        </div>
      </footer>
    );
  }
  else if(props.listLength - props.unCompletedNum === 0){
    return(
      <footer className="todo-app__footer" style={{visibility: 'visible'}}>
        <div className="todo-app__total"> {props.unCompletedNum} left </div>
        <ul className="todo-app__view-buttons">
          <Button text="All" onClick={props.allItem}/>
          <Button text="Active" onClick={props.activeItem} />
          <Button text="Completed" onClick={props.displayCompletedItem}/>
        </ul>
        <div className="todo-app__clean" style={{visibility: 'hidden'}}>
          <Button text="clear completed" onClick={props.clearCompleted} />
        </div>
      </footer>
    );
  
  }
  else{
    return(
      <footer className="todo-app__footer" style={{visibility: 'visible'}}>
        <div className="todo-app__total"> {props.unCompletedNum} left </div>
        <ul className="todo-app__view-buttons">
          <Button text="All" onClick={props.allItem}/>
          <Button text="Active" onClick={props.activeItem} />
          <Button text="Completed" onClick={props.displayCompletedItem}/>
        </ul>
        <div className="todo-app__clean" style={{visibility: 'visible'}}>
          <Button text="clear completed" onClick={props.clearCompleted} />
        </div>
      </footer>
    );
  }
    
};

export default Footer;
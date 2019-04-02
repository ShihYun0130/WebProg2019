import React from 'react';
import x from '../x.png';
import './main.css';
import Text from './Text';


const List = props => ( 
    <ul className="todo-app__list">
      {props.todoItems.map((item)=>{
        if(item.completed){
          return (
            <li className="todo-app__item" key={item.id}>
              <div className="todo-app__checkbox">
                <input id={item.id} type="checkbox" onClick={() => props.completedItem(item.id)} 
                      checked={item.completed} />
                <label htmlFor={item.id}></label>
              </div>
              <Text isCompleted={item.completed} text={item.text}/>
              <img src={x} className="todo-app__item-x" onClick={() => props.removeItem(item.id)} />
            </li>
          );
        }
        else{
          return (
            <li className="todo-app__item" key={item.id}>
              <div className="todo-app__checkbox">
                <input id={item.id} type="checkbox" onClick={() => props.completedItem(item.id)}/>
                <label htmlFor={item.id}></label>
              </div>
              <Text isCompleted={item.completed} text={item.text}/>
              <img src={x} className="todo-app__item-x" onClick={() => props.removeItem(item.id)} />
            </li>
          );
        }
      })
      }
    </ul>
);

export default List;
import React from "react";
import '../styles.css';
import Button from './Button2';
import P from '../components/P';

const Footer = props => {
    if(props.list_complete.length!==0){
        return (
            <footer className={"todo-app__footer"} id="todo-footer">
                <div className={"todo-app__total"}>
                    <p id="todo-count">{props.list.length} left to do</p>
                </div>
                <ul className={"todo-app__view-buttons"}>
                    <Button text="All" onClick={props.DisplayAll} />
                    <Button text="Active" onClick={props.DisplayActive} />
                    <Button text="Completed" onClick={props.DisplayComplete} />
                </ul>
                <div className={"todo-app__clean"}>
                    <Button text="Clear Completed" onClick={props.ClearCompleted} id="clearcompleted"/ >
                </div>
            </footer>
        );
    }
    else{
        return (
            <footer className={"todo-app__footer"} id="todo-footer">
                <div className={"todo-app__total"}>
                    <p id="todo-count">{props.list.length} left to do</p>
                </div>
                <ul className={"todo-app__view-buttons"}>
                    <Button text="All" onClick={props.DisplayAll} />
                    <Button text="Active" onClick={props.DisplayActive} />
                    <Button text="Completed" onClick={props.DisplayComplete} />
                </ul>
                <div style={{visibility: 'hidden'}} className={"todo-app__clean"}>
                    <Button text="Clear Completed" onClick={props.ClearCompleted} id="clearcompleted"/ >
                </div>
            </footer>
        );
    }
}

export default Footer;

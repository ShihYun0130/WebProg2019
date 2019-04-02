import React, { Component } from 'react';
import InputBar from '../containers/InputBar';
import List from '../containers/List';
import Footer from '../containers/Footer';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lastId: 0,
      checked: 'false',
      inputText: '',
      state: 'all',
      filterTodoList: [],
      todoList: [] };
  }


  inputText = (event) => {
    this.setState({inputText: event.target.value});
  }

  clearInputText = () => {
    document.getElementsByClassName("todo-app__input").reset();
  }

  handleAddTodo = (event) => {
    if((event.which === 13 || event.keyCode === 13))
    {
      if(this.state.inputText.trim())
      {
        this.setState({lastId: this.state.lastId+1});
        this.state.todoList.push({id: this.state.lastId, completed: false, text: this.state.inputText});
        this.setState({todoList: this.state.todoList});
        this.setState({filterTodoList: this.state.todoList});
        this.setState({inputText: ''});
        console.log(this.state.todoList);
      }
    }
  } 

  removeItem = (id) => {
    this.setState({todoList: this.state.todoList.filter(item => id !== item.id )});
    this.setState({filterTodoList: this.state.todoList.filter(item => id !== item.id )});
    console.log(this.state.todoList.length);
  }

  completedItem = (id) => {
    this.setState({
      todoList: this.state.todoList.map(
        item => {
          if(item.id === id){
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        }
      ),
      filterTodoList: this.state.filterTodoList.map(
        item => {
          if(item.id === id){
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        }
      )
    });
    console.log(this.state.todoList);
  }

  allItem = () => {
    this.setState({filterTodoList: this.state.todoList});
    this.setState({state: 'all'});
  }

  activeItem = () => {
    this.setState({filterTodoList: this.state.todoList.filter(item => item.completed === false)});
    this.setState({state: 'active'});
  }

  displayCompletedItem = () => {
    this.setState({filterTodoList: this.state.todoList.filter(item => item.completed === true)});
    this.setState({state: 'completed'});
    console.log(this.state.filterTodoList);
  }

  clearCompleted = () => {
    var completed = this.state.todoList.filter(item => item.completed === true);
    completed.map(ele => this.state.todoList.splice(this.state.todoList.indexOf(ele), 1));
    this.setState({todoList: this.state.todoList});
    if(this.state.state === 'all')
    {
      this.setState({filterTodoList: this.state.todoList});
    }
    if(this.state.state === 'completed')
    {
      this.setState({filterTodoList: []});
    }
  }


  // completedNum = () => {
  //   return (this.state.todoList.filter(item => item.completed === true).length);
  // }

  render() {
    return (
      <div className="todo-app__root">
        
        <header className="todo-app__header">
          <h1 className="todo-app__title">todos</h1>
        </header>
        
        <section className="todo-app__main">
          <InputBar onKeyPress={this.handleAddTodo} onChange={this.inputText} value={this.state.inputText}/>
          <List todoItems={this.state.filterTodoList} removeItem={this.removeItem} 
          completedItem={this.completedItem}/>
          
        </section>

        <Footer listLength={this.state.todoList.length}  displayCompletedItem={this.displayCompletedItem}
          allItem={this.allItem} activeItem={this.activeItem} 
          unCompletedNum={this.state.todoList.filter(item => item.completed !== true).length}
          clearCompleted={this.clearCompleted}/>
        
      </div>
    );
  }
}


export default App;

import React, { Component } from "react";
import '../styles.css';
// Import components
import List from "../components/List";
import InputForm from "../components/InputForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
  // getInitialState
  state = {
    list: [],
    list_all: [],
    pendingItem: "",
  };

  lastItemId = 0;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    console.log(id);
    return id;
  };

  // Flips isEditing bool
  toggleIsEditingAt = id => {
    console.log("isEditingAt", id);
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      }),
      list_all: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      })
    });
  };

  // Flips isChecked bool
  toggleChecked = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          console.log("item id:", id, " isChecked:", item.isChecked)
          return {
            ...item,
            isChecked: !item["isChecked"]
          };
        }
        return item;
      }),
      list_all: this.state.list.map(item => {
        if (id === item.id) {
          console.log("item id:", id, " isChecked:", item.isChecked)
          return {
            ...item,
            isChecked: !item["isChecked"]
          };
        }
        return item;
      })
    });
  };

  removeItemAt = id => {
    this.setState({
        list: this.state.list.filter(item => id !== item.id),
        list_all: this.state.list_all.filter(item => id !== item.id) 
    });
  };

  handleItemInput = e => this.setState({ pendingItem: e.target.value });

  DisplayAll = e => {
    e.preventDefault();
    this.setState({ list: this.state.list_all });
    console.log("DisplayAll");
  }

  DisplayActive = e => {
    e.preventDefault();
    this.setState({ 
      list: this.state.list_all.filter(item => item.isChecked === false)
    });
    console.log("DisplayActive");
  }

  DisplayComplete = e => {
    e.preventDefault();
    this.setState({ 
      list: this.state.list_all.filter(item => item.isChecked === true)
    });
    console.log("DisplayComplete");
  }

  ClearCompleted = e => {
    e.preventDefault();
    this.setState({ 
      list: this.state.list_all.filter(item => item.isChecked === false),
      list_all: this.state.list_all.filter(item => item.isChecked === false)
    });
    console.log("ClearCompleted");
  }

  // handle editing items
  setNameAt = (name, id) => {
    this.setState({
      list: this.state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name,
          };
        }
        return item;
      }),
      list_all: this.state.list.map(item => {
              if (id === item.id) {
                return {
                  ...item,
                  name,
                };
              }
              return item;
      })
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    if(this.state.pendingItem !== ""){
        this.setState({
          list: [
            {
              name: this.state.pendingItem,
              isEditing: false,
              isChecked: false,
              id
            },
            ...this.state.list
          ],
          list_all: [
            {
              name: this.state.pendingItem,
              isEditing: false,
              isChecked: false,
              id
            },
            ...this.state.list
          ],
          pendingItem: ""
        });
    };
  };

  render() {
    return (
      <div className="todo-app__root">
        <Header />
        <section className="todo-app__main">
            <InputForm
              newItemSubmitHandler={this.newItemSubmitHandler}
              handleItemInput={this.handleItemInput}
              pendingItem={this.state.pendingItem} />
            <List
              list={this.state.list}
              removeItemAt={this.removeItemAt}
              toggleIsEditingAt={this.toggleIsEditingAt}
              toggleChecked={this.toggleChecked}
              setNameAt={this.setNameAt}/>
        </section>
        <Footer
         list={this.state.list_all.filter(function(item) {return item.isChecked === false})}
         list_complete={this.state.list_all.filter(function(item) {return item.isChecked === true})}
         DisplayAll={this.DisplayAll}
         DisplayActive={this.DisplayActive}
         DisplayComplete={this.DisplayComplete}
         ClearCompleted={this.ClearCompleted} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import road from './road.png';
import caticon from './caticon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title">Blog Blog Blog </div>
          
          <div className="navBar">
            { this.props.bars.map( e => <span className="bar"> {e} </span>) }
            <button className="signUp"> Sign Up</button>
          </div>
        </div>
      
        <div className="body">
          <div className="welcome">
            <div className="welcomeText">hello world</div>
            <hr className="line" />
            <div className="sentence"> Always Do What You Are Afraid To DO </div>
            <button className="learnMore">Welcome</button>
          </div>
          <img src={road} className="road"/>

          <div className="blog">

            {this.props.articles.map(
              e => <div className="article"> 
              <div className="picture"> 
              <img src={(e[0])} alt={e[0]} /></div> 
              <div className="topic">{e[1]}</div>
              <hr className="artline" />
              <div className="shortArticle">{e[2]}</div>
              </div>) 
            }
            
          </div>

          <div className="quote">
            <p>"We must be willing to let go of the life we planned so as to have the life that is waiting for us."
            <br/> --Joseph Campbell</p>
          </div>

          <div className="introduction">
            <img src={caticon} alt="me" />
            <p className="aboutMe">About Me</p>
            <p>Nunc lacinia non metus sed fermentum Quisque accumsan lacus id lacus egestas, 
              eget ommodo augue rutrum. 
              Nullam vitae felis vel leo venenatis faucibus sed quis felis. 
              Pellentesque venenatis eu justo in gravida. 
              Mauris iaculis porttitor posuere. 
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
              Suspendisse dictum giatrent nisl urekgot dapibus. 
              Mauris iaculis porttitor posuere. 
              Phasellus molestie magna non est bibendum non venenatis nisltempor. 
              Pellentesque venenatis eu justo in gravida. 
              Quisque accumsan lacus id lacus egestas, eget commodo augue rutrum. 
              Quisque accumsan lacus id lacus egestas, eget commodo augue rutrum. 
              Suspendisse dictum giatrent nisl urekgot dapibus.<br/><br/>
              Pellentesque suscipit lobortis mi sed volutpat. Vestibulum eget maximus urna. 
              Nunc pellentesque lacinia diam ut eleifend. Nulla rhoncus faucibus sem a semper. 
              Phasellus a mollis lacus. Cum sociis natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Curabitur est. Like the tranquility you feel at the shore of a quiet lake or inside a beautiful cathedral.
            </p>
          </div>
          
          <div className="contactUs">
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;

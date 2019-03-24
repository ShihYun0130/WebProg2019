import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';
import logo from './assets/img/logo.svg'

class App extends Component {
	render() {
		return (
			<div id="test">
				<section id="home" name="home"></section>
				<div id="headerwrap">
					<div className="container">
						<div className="logo">
							<img src={logo}/>
						</div>
						<br/>
						<div className="row">
							<h1>react first test</h1>
							<br/>
							<h3>Hello~~ hope that you will like it</h3>
							<br/>
							<br/>
							<div className="col-lg-6 col-lg-offset-3">
							</div>
						</div>
					</div>
				</div>
					
				
				<section id="about" name="about"></section>
				<div id="f">
					<div className="container">
						<div className="row">
							<h3>ABOUT ME</h3>
							<p className="centered"><i className="icon icon-circle"></i><i className="icon icon-circle"></i><i className="icon icon-circle"></i></p>
							
							<div className="col-lg-6 col-lg-offset-3">
								<p>I am a EE student</p>
								<p><button type="button" className="btn btn-warning">click test1</button></p>
							</div>								
						</div>
					</div>
				</div>

				<section id="contact" name="contact"></section>
				<div id="f">
					<div className="container">
						<div className="row">
							<h3>CONTACT ME</h3>
							<p className="centered"><i className="icon icon-circle"></i><i className="icon icon-circle"></i><i className="icon icon-circle"></i></p>
							
							<div className="col-lg-6 col-lg-offset-3">
								<p>Taiwan<br/>NTU<br/>1234567</p>
								<p><button type="button" className="btn btn-warning">click test2</button></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		
		);
	}
}

export default App;

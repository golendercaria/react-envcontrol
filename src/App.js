import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Panel from './components/Panel';
import Routines from './components/Routines';

const routines = [
	"Morning",
	"Leave home",
	"Back home"
]
	
class App extends Component {

	launchRoutine(routine, id, el) { 
		console.log("activate routines " + routine);
	
		//console.log(el.currentTarget.parentElement.children)
		for (let i in el.currentTarget.parentElement.children) { 
			//console.log(el.currentTarget.parentElement.children[i])
			if( el.currentTarget.parentElement.children[i].className == "active" )	
				el.currentTarget.parentElement.children[i].className = "";
		}
		//el.currentTarget.parentElement.children.className = "";
		el.currentTarget.className = "active"

		//console.log(el.currentTarget.className);
		
		//console.log( document.getElementById(id) );

	}

	/*
	static defaultProps = {
		golVersion : "1.0"
	}*/

	render() {

		//let { golVersion } = this.props
		
		return (
			<div className="App">
				{/*version : {golVersion}*/}
			
				<Title name="Yann" location="home" />
				<Panel />
				<Routines actions={routines} event={this.launchRoutine} />

				{/*<Panel>
					Demo children
				</Panel>*/}
			</div>
		);
	}
}

export default App;

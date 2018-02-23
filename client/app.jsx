import Header from './header/header.jsx';
import React, { Component } from 'react';
import ReactDom from "react-dom";

class App extends Component { 
	constructor() {
		super();
	}
  render() {
  	console.log('in app component')
    return (
      <div>

        <Header />
         {this.props.children}

        <div id="content">
          
        </div>

      </div>
    );
  }
}

//const app = document.getElementById('app');

export default App;

// ReactDOM.render(<App/>, contents);
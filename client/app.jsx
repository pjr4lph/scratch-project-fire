import Header from './header/header.jsx';
import React, { Component } from 'react';
import ReactDom from "react-dom";
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {repos: []}
	}

	componentDidMount() {
		fetch('http://localhost:8081/getRepos')
		.then(res => res.json())
		.then(repos => {console.log(repos); this.setState({ repos })})
		.then(res => {console.log(this.state)})
	}

	getTest(){
		axios({
			method: 'get',
			url: 'http://localhost:8081/login',
			// headers: {'Access-Control-Allow-Origin': 'http://localhost:8081/'}
	})
		.then(function(response){
			console.log('response')
			console.log(response);
		})
		.catch(function (error) {
    console.log(error);
  	});
	}


  render() {
    return (
      <div>

        <Header />
         {this.props.children}

        <div id="content">

        </div>
				<a href="https://github.com/login/oauth/authorize?client_id=002c7138176488b1957e&redirect_uri=http://localhost:8081/auth"><button style={{position: 'absolute', top:'100px'}} href={''}>sign in</button></a>
				<a href="https://github.com/login/oauth/authorize?client_id=002c7138176488b1957e&redirect_uri=http://localhost:8081/auth"><button style={{position: 'absolute', top:'140px'}} href={''}>sign out</button></a>
      </div>
    );
  }
}

export default App;

import Header from './components/header.jsx';
import RepoList from './components/RepoList.jsx'
import React, { Component } from 'react';
import ReactDom from "react-dom";
// import { Grid } from 'react-bootstrap';
import axios from 'axios';
import Modal from './components/Modal.jsx';


const links = ['Suggested', 'Popular', 'Difficulty'];

class Application extends Component {
	constructor(props) {
    super(props);

    this.state = {
      repos: [],
      filter: '',
			current: links[0],
			user: {}
    };
  }

  componentDidMount() {
		const modal = document.getElementById('myModal');
		 modal.style.display = 'none';
    const allCookies = document.cookie;
    
		fetch("http://localhost:8081/getRepos")
    .then(res => {
			return res.json();
		})
    .then(repos => {
			this.setState({ repos })
		})
  }

	updateCurrent = (name) => {
		this.setState((prevState) => {	
			if (name === 'Suggested') {         // && !this.state.user.login 
				const modal = document.getElementById('myModal');
				modal.style.display = 'block';
			}
			return {
				current: name
			}
		})
	}

	modalFunctions = () => {
		const modal = document.getElementById('myModal');
		modal.style.display = 'none';
	}

  render() {
		// console.log(this.state.repos)
    return (
      <div>
				<Modal modalFunctions={this.modalFunctions}/>
				<div>
				<Header
				user={this.state.user.login}
				links={links}
				current={this.state.current}
				updateCurrent={this.updateCurrent}
				/>
				</div>
			
			<div className="form-container">
				<input className="form-control" type="text" placeholder="Search Repos"></input>
				<button className="btn btn-primary btn-search" type="submit">Search <i className="fa fa-search"></i></button>
			</div>
			<RepoList repos={this.state.repos} />
			 {/* Model button */}
			<button id="myBtn">Open Modal</button>
		 </div>
		);
  }
}


export default Application;

import Header from './components/header.jsx';
import RepoList from './components/RepoList.jsx'
import React, { Component } from 'react';
import ReactDom from "react-dom";
// import { Grid } from 'react-bootstrap';
import axios from 'axios';


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
		const allCookies = document.cookie;
		console.log(allCookies)
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
			return {
				current: name
			}
		})
	}


  render() {
		console.log(this.state.repos)
    return (
      <div>
				<Header
					links={links}
					current={this.state.current}
					updateCurrent={this.updateCurrent}
				/>
				<div className="form-container">
					<input className="form-control" type="text" placeholder="Search Repos"></input>
					<button className="btn btn-primary btn-search" type="submit">Search <i className="fa fa-search"></i></button>
				</div>
				<RepoList repos={this.state.repos} />
			</div>
		);
  }
}


export default Application;

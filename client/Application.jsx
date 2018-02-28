import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import RepoList from './components/RepoList.jsx'
import React, { Component } from 'react';
import ReactDom from "react-dom";

import Modal from './components/Modal.jsx';
import { util, fetchUser, fetchRepos } from './utils.js'

const links = ['Suggested', 'Most Popular', 'Most Open Issues'];

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

		if(window.location.search){
			fetchRepos().then((repos) => {
				return fetchUser(repos);
			}).then((newState) => {
				this.setState(newState);
			})
		}
		else {
			fetchRepos().then((repos) => {
				this.setState({ repos })
			})
		}
  }

	updateCurrent = (name) => {
		// if user is not logged, do not change order
		if (name === 'Suggested' && !Object.keys(user).length) {
			const modal = document.getElementById('myModal');
			modal.style.display = 'block';
			return;
		}

		this.setState((prevState) => {
			const repos = util(name, prevState.repos, prevState.user, links);

			return {
				current: name,
				repos: repos
			}
		})
	}

	modalFunctions = () => {
		const modal = document.getElementById('myModal');
		modal.style.display = 'none';
	}

  render() {
		console.log(this.state);

    return (
      <div>
				<Modal modalFunctions={this.modalFunctions}/>
				<Header
					user={this.state.user.login}
					links={links}
					current={this.state.current}
					updateCurrent={this.updateCurrent}
				/>
				<Input />
				<RepoList repos={this.state.repos} />
			 </div>
		);
  }
}


export default Application;

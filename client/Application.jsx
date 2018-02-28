import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import User from './components/User.jsx';
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
			search: '',
			user:  false // when user logs in, need to update with user id or related data
		};
  }

  componentDidMount() {
		const modal = document.getElementById('myModal');
		modal.style.display = 'none';
    const allCookies = document.cookie;
		console.log(window.location);

		if(window.location.search){
			fetchRepos().then((repos) => {
				return fetchUser(repos, window.location.search.replace('?', ''));
			}).then((newState) => {
				this.setState((prevState) => {
					sessionStorage.setItem('gitUser', JSON.stringify(newState.user));
					return newState;
				}, () => {
					history.pushState({}, "page 2", "/");
					this.updateCurrent('Suggested');
				});
			})
		}
		else {
			fetchRepos().then((repos) => {
				let user = false;
				if(sessionStorage.getItem('gitUser')){
					user = JSON.parse(sessionStorage.getItem('gitUser'))
				}
				this.setState({
					repos: repos,
					user: user
				})
			})
		}
  }

	updateCurrent = (name) => {
		// if user is not logged, do not change order
		if (name === 'Suggested' && !this.state.user) {
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


	logout = () => {
		fetch('http://localhost:8081/auth/signout').then(res => res.text()).then(user => {
			sessionStorage.clear();
			this.setState({user: false});
		})
	}

	onSearch = (e) => {
		this.setState({search: e.target.value})
	}

  render() {
		console.log(this.state);

    return (
      <div>
				<Modal modalFunctions={this.modalFunctions} user={this.state.user} logout={this.logout}/>
				<Header
					user={this.state.user.login}
					links={links}
					current={this.state.current}
					updateCurrent={this.updateCurrent}
					logout={this.logout}
				/>
				<div className="below">
					<User user={this.state.user}/>
					<Input search={this.state.search} onSearch={this.onSearch}/>
				</div>
				<RepoList repos={this.state.repos} search={this.state.search}/>
			</div>
		);
  }
}


export default Application;

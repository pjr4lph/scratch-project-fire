import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	console.log('props.user: ', props.user)
	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
		  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <a className="navbar-brand" href="#"><div className="icon"><i className="fa fa-github fa-2x"></i></div><div>Github Open Source</div></a>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
					{(props.links).map((link) => (
						<li key={link} className={(props.current === link) ? "nav-item active": "nav-item"}>
			        <a className="nav-link" name={link} href="#" onClick={(e) => {props.updateCurrent(link)}}>{link}</a>
			      </li>
					))}
		    </ul>
				{(!props.user) ? 
					<a className="btn btn-outline-primary my-2 my-sm-0" href="https://github.com/login/oauth/authorize?client_id=9d2b207f821e93af85cc&redirect_uri=http://localhost:8081/auth&scope=read%3Auser">Login</a>
				:
					<a className="btn btn-outline-primary my-2 my-sm-0" href="http://localhost8080/signout">Logout</a>
				}
				</div>
		</nav>

	);
}

Header.propTypes = {
	links: PropTypes.array.isRequired,
	current: PropTypes.string.isRequired,
	updateCurrent: PropTypes.func.isRequired
}

export default Header;

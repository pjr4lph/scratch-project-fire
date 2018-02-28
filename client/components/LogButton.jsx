import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LogButton = (props) => {

  return (
    <div>
      {(!props.user) ?
					<a className="btn btn-outline-primary my-2 my-sm-0" href="https://github.com/login/oauth/authorize?client_id=9d2b207f821e93af85cc&redirect_uri=http://localhost:8081/auth&scope=read%3Auser">Login</a>
				:
					<a className="btn btn-outline-primary my-2 my-sm-0" href="#" onClick={props.logout}>Logout</a>
				}
    </div>
  )
}

export default LogButton;

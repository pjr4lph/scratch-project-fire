import { Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import Repo from '../Repo/Repo.jsx';
import './RepoList.css'
import RepoDetails from "../RepoDetails/Details.jsx";

import {
  BrowserRouter,
  Route,
  NavLink,
  HashRouter,
  Link,
} from "react-router-dom";

import Details from "../RepoDetails/Details.jsx";

class RepoList extends React.Component {

  render() {
    return (

      <div className="repos">
        {
          this.props.repos.map((repo, idx )=> (
      
            <Repo 
              key={idx}
              repo={repo}
              currRepo={this.props.currentRepo}
            /> 
          ))
        }
      </div>
    );
  }
}



export default RepoList;
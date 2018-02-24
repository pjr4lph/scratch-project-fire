import { Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import './Repo.css'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import RepoDetails from '../RepoDetails/Details.jsx';

// const divStyle = {
//   background-color: 'blue',
// };



function Repo(props) {
  let {
    currRepo,
    repo
  } = props;


  return (
    <Col
      lg={3}
      md={4}
      sm={6}>
      <Panel className="repo" >
        <div className="repo-img-wrapper">
            <img
              alt={repo.org}
              className="img-responsive repo-img"
              src={`${repo.avatar}`}
              onClick={() => { currRepo(repo) } }
               />
        </div>

        <h4
          className="ellipsis"
          title={repo.name}
          >
          <a href={`${repo.url}`}>
            {repo.name}
          </a>
        </h4>

        <h5
          className="ellipsis repo-brand-name"
          title={repo.name}>
          {`by ${repo.org}`}
        </h5>

        <div className="pull-right h4 repo-link">
          {`${repo.name}`}
        </div>

      </Panel>
    </Col>

  );
}

// Repo.propTypes = {
//   repo: React.PropTypes.object.isRequired
// };


export default Repo;

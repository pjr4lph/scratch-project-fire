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
              alt={repo.prop}
              className="img-responsive repo-img"
              src='https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Fish/H-P/pufferfish-inflated-closeup.jpg' 
              onClick={() => { currRepo(repo) } }
               />
        </div>

        <h4
          className="ellipsis"
          title={repo.prop}
          >
          <a href="#">
            {repo.name}
          </a>
        </h4>

        <h5
          className="ellipsis repo-brand-name"
          title={repo.prop}>
          {`by ${repo.brand_name}`}
        </h5>

        <div className="pull-right h4 repo-link">
          {`${repo.prop}`}
        </div>

      </Panel>
    </Col>

  );
}

// Repo.propTypes = {
//   repo: React.PropTypes.object.isRequired
// };


export default Repo;
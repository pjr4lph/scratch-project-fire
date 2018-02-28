import { Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import Repo from './Repo.jsx';
import PropTypes from 'prop-types';

import {
  BrowserRouter,
  Route,
  NavLink,
  HashRouter,
  Link,
} from "react-router-dom";

// import Details from "../repoDetails/Details.jsx";

class RepoList extends React.Component {

  render() {
    return (

      <div className="repos">
        {(this.props.repos.length) ?
          this.props.repos.map((repo, idx )=> {
            return (repo.name.includes(this.props.search))?
            <Repo
              key={idx}
              repo={repo}
              currRepo={this.props.currentRepo}
            />:
            null
          }):
					<div className="wait">
						<i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
						<span className="sr-only">Loading...</span>
					</div>
				}
      </div>
    );
  }
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      forks: PropTypes.number.isRequired,
      issues: PropTypes.array.isRequired,
      languages: PropTypes.array.isRequired,
      name: PropTypes.string.isRequired,
      open_issues: PropTypes.number.isRequired,
      org: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      watchers: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default RepoList;

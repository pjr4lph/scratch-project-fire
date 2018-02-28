import { Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

// npm install --save remarkable
const Remarkable = require('remarkable');
const md = new Remarkable();

// npm install --save node-emoji
const emoji = require('node-emoji');

function Repo(props) {
  let {
    currRepo,
    repo
  } = props;

  // <div className="repo-img-wrapper">
  //     <img
  //       alt={repo.org}
  //       className="img-responsive repo-img"
  //       src={`${}`}
  //     />
  // </div>

  return (
    <div className="repo">
      <a className="btn btn-lg btn-outline-primary full" href={`${repo.url}`}>
        {repo.name}
      </a>

      <div className="repo-info" id={repo.org}>
        <div className="repo-content">
          <p>{emoji.emojify(repo.description)}</p>
          <p><b>Forks: </b>{repo.forks}</p>
          {(props.repo.issues).map((issue) => (
            <a className="issue" href={issue.html_url} key={`${issue.number}repo.org`}>
              <hr />
              <h5>{issue.title}</h5>
              <p dangerouslySetInnerHTML={{ __html: md.render(issue.body)}}></p>
              <p><b>Created At: </b>{issue.created_at}</p>
              <p><b>Updated At: </b>{issue.updated_at}</p>
              <p><b>Closed At: </b>{issue.closed_at || "Still Open"}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Repo;

import { Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';


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
    <div>
      <button className="btn btn-lg btn-outline-primary full" data-toggle="collapse" data-target={"#" + repo.org}>
        {repo.name}
      </button>

      <div className="collapse repo-info" id={repo.org}>

        <a href={`${repo.url}`} className="">
          {`${repo.name}`}
        </a>
      </div>
    </div>
  );
}



export default Repo;

import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="form-container">
      <input className="form-control" type="text" placeholder="Search Repos"></input>
      <button className="btn btn-primary btn-search" type="submit">Search <i className="fa fa-search"></i></button>
    </div>
  )
}

export default Input;

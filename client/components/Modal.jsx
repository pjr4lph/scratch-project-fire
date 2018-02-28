import React, { Component } from 'react';
import ReactDom from "react-dom";
import LogButton from './LogButton.jsx';


function Modal(props) {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.modalFunctions}>&times;</span>
        <p>Please, login to see a tailored selection of repos. </p>
        <LogButton user={props.user} />
      </div>
    </div>
  )
  
}

export default  Modal;
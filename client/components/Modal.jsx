import React, { Component } from 'react';
import ReactDom from "react-dom";

function Modal(props) {


    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.modalFunctions}>&times;</span>
          <p>You're not logged in</p>
          <button id="modalLoggin" onClick={props.modalFunctions}>Login</button>
        </div>
      </div>
    )
  
}

export default  Modal;
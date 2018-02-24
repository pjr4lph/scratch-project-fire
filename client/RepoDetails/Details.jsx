import React, { Component } from "react";
import './Details.css'
 
const Details = (details) => {
    return (
      <div>
        <h2>D3 graphs of various metrics of each repo</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        <p>Go to <a href="http://github.com">Github Repo</a></p>
      </div>
    );
}
 
export default Details;
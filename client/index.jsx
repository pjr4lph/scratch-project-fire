import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './Routes.jsx';

import style from './main.scss'
// render(
//   <App />, document.getElementById('app')
//   );

render((
    <App />

), document.getElementById('app'))

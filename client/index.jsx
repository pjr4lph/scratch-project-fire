import React from 'react';
import { render } from 'react-dom';
import Application from './Application.jsx';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom'

import style from './scss/main.scss';

render(<Application />, document.getElementById('Application'));

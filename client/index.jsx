import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
<<<<<<< HEAD

render(<App />, document.getElementById('app'));
=======
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './Routes.jsx';


// render(
//   <App />, document.getElementById('app')
//   );

render((
    <App />
  
), document.getElementById('app'))
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63

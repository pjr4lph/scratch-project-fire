import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// BrowserRouter allows react router to pass the app's
// routing info down to any child components via context
// when the app's location matches a certain path, route will render a specified component, when it doesn't it will render null

import Home from './index.jsx';
import RepoDetails from "./RepoDetails/Details.jsx";
import App from './app.jsx';

export default function Routes() {

  const NoMatch = "Not Found";
  return (
      <Switch>
        <Route path="/" component={App} />
        <Route path="/details" render={()=><RepoDetails details={{repo}}/>}/>
        //<Redirect from="/index" to="/details"/>
        // <Route component={NoMatch}/>
      </Switch>
    )
}

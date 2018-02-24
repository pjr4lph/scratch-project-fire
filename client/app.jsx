import Header from './header/header.jsx';
import RepoList from './RepoList/RepoList.jsx'
import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Grid } from 'react-bootstrap';
import Routes from './Routes.jsx';

// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";


// import RepoList from "../RepoList/RepoList.jsx";
import RepoDetails from "./RepoDetails/Details.jsx";


class App extends Component { 
	constructor(props) {
    super(props);

    this.state = { 
      repos: [{prop: 'value1', path: 'path1'},
        {prop: 'value2', path: 'path1'}, {prop: 'value3', path: 'path1'},
        {prop: 'value4', path: 'path1'}, {prop: 'value5', path: 'path1'},
        {prop: 'value6', path: 'path1'}],
      currentRepo: null
    };   

    this.getCurrentRepo = this.getCurrentRepo.bind(this)
  }

  getCurrentRepo(curr) {
    console.log(curr)
    this.setState({currentRepo: curr})
  }

  render() {
    return (
      <div>
        {
          this.state.currentRepo ?
            <div>
              <Header />
              <RepoDetails details={this.state.currentRepo} />
            </div>
            :
            <div>
              <Header />
              <Grid id="content">
                <RepoList currentRepo={this.getCurrentRepo} repos={this.state.repos} />
              </Grid>
            </div>
        }
        </div>
      );
  }
}




export default App;



// if (this.state.page == 'home'){
//           return (
//             <div>

//             <Header />
//             <Grid id="content">
//               <RepoList repos={this.state.repos} />
//             </Grid>
//             </div>
//             );
//         } 

//         return (
//           <div>
//            <Header />
//             <RepoDetails />
//           </div>
//         );
          

//    }


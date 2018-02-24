import Header from './header/header.jsx';
<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDom from "react-dom";
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {repos: []}
	}

	componentDidMount() {
		fetch('http://localhost:8081/getRepos')
		.then(res => res.json())
		.then(repos => {console.log(repos); this.setState({ repos })})
		.then(res => {console.log(this.state)})
	}

	getTest(){
		axios({
			method: 'get',
			url: 'http://localhost:8081/login',
			// headers: {'Access-Control-Allow-Origin': 'http://localhost:8081/'}
	})
		.then(function(response){
			console.log('response')
			console.log(response);
		})
		.catch(function (error) {
    console.log(error);
  	});
	}

=======
import RepoList from './RepoList/RepoList.jsx'
import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Grid } from 'react-bootstrap';
import Routes from './Routes.jsx';
import axios from 'axios';

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
      repos: [],
      currentRepo: null
    };   

    this.getCurrentRepo = this.getCurrentRepo.bind(this)
  }
  componentDidMount() {
    fetch("http:\//localhost:8081/getRepos")
    .then(res => res.json())
    .then(repos => {console.log(repos); this.setState({ repos })})
    .then(res => {console.log(this.state)})
  }

  getTest(){
    axios({
      method: 'get',
      url: 'http:\//localhost:8081/login',
      // headers: {'Access-Control-Allow-Origin': 'http://localhost:8081/'}
  })
    .then(function(response){
      console.log('response')
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  getCurrentRepo(curr) {
    console.log(curr)
    this.setState({currentRepo: curr})
  }
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63

  render() {
    return (
      <div>
<<<<<<< HEAD

        <Header />
         {this.props.children}

        <div id="content">

        </div>
				<a href="https://github.com/login/oauth/authorize?client_id=002c7138176488b1957e&redirect_uri=http://localhost:8081/auth"><button style={{position: 'absolute', top:'100px'}} href={''}>sign in</button></a>
				<a href="https://github.com/login/oauth/authorize?client_id=002c7138176488b1957e&redirect_uri=http://localhost:8081/auth"><button style={{position: 'absolute', top:'140px'}} href={''}>sign out</button></a>
      </div>
    );
  }
}

export default App;
=======
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

>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon, FormControl, FormGroup, Button} from 'react-bootstrap';

import './header.css'

<<<<<<< HEAD
=======
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";


// import RepoList from "../RepoList/RepoList.jsx";
// import RepoDetails from "../RepoDetails/Details.jsx";

>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63
class Header extends Component  {

	constructor(props){
		super(props);
		this.state = {
		  filter: ''
		}
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
<<<<<<< HEAD
		this.setState({
			filter: event.target.value
		})
		// console.log(this.state.filter)
=======
		this.setState({ 
			filter: event.target.value 
		})
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63
	}

	render(){
		return (
<<<<<<< HEAD
		<div >
=======
		<div id="top_nav">
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63
		<Navbar fixedTop>
		<Navbar.Header>
		<Navbar.Brand>
		<a href="/">
		Github Open Source Projects
		</a>
		</Navbar.Brand>
		<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		<Nav pullRight>
<<<<<<< HEAD

=======
		
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63

		<Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Filter by language" onChange={this.handleInput}/>
      </FormGroup>{' '}
      <Button type="submit">Filter</Button>
    </Navbar.Form>

		<NavItem
		eventKey={1}
		href="#">
<<<<<<< HEAD
		<Glyphicon glyph="icon-github" />
		</NavItem>

		</Nav>
		</Navbar.Collapse>
		</Navbar>

		</div>

		);
	}

}


export default Header;
=======
		<Glyphicon glyph="icon-github" />          
		</NavItem>
		
		</Nav>
		</Navbar.Collapse>
		</Navbar>
    </div>

		);
	}
	
}


export default Header;
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63

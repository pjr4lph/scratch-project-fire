import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon, FormControl, FormGroup, Button} from 'react-bootstrap';

import style from './header.scss'

class Header extends Component  {

	constructor(props){
		super(props);
		this.state = {
		  filter: ''
		}
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		this.setState({
			filter: event.target.value
		})
	}

	render(){
		return (
		<div id="top_nav">
		<Navbar fixedTop>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">Github Open Source Projects</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<Navbar.Form pullLeft>
		      <FormGroup>
		        <FormControl type="text" placeholder="Filter by language" onChange={this.handleInput}/>
		      </FormGroup>{' '}
		      <Button type="submit">Filter</Button>
					<Button href="https://github.com/login/oauth/authorize?client_id=9d2b207f821e93af85cc&redirect_uri=http://localhost:8081/auth&scope=read%3Auser&state=statestring">Log In</Button>
		    </Navbar.Form>

			<NavItem
				eventKey={1}
				href="#">
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

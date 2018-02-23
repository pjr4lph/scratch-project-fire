import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon, FormControl, FormGroup, Button} from 'react-bootstrap';

import './header.css'

const Header = () => {


	return (
		<div >
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
		

		<Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Filter by language" />
      </FormGroup>{' '}
      <Button type="submit">Filter</Button>
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


export default Header;
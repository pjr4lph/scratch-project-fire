import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
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
            <NavItem
              eventKey={1}
              href="#">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              href="#">
              Page 2
            </NavItem>
            <NavItem
              eventKey={3}
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
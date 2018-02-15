import React, { Component }            from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Navbar.Link href="/"> Cryptocurrencies <Badge>100</Badge> </Navbar.Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/settings"> Settings </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

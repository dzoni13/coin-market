import React                           from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

const Header = () => (
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

export default Header;

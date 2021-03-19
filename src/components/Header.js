import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import currenciesActions from '../actions/currenciesActions.js';

class Header extends Component {

  componentDidMount = () => {
    this.props.getCurrencies();
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Navbar.Link href="/"> Cryptocurrencies
              {this.props.currencies.payload.length > 0 &&
                <Badge>{this.props.currencies.payload.length}</Badge>
              }
            </Navbar.Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/converter"> Converter </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrencies: currenciesActions.getCurrencies
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

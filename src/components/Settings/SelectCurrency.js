import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class SelectCurrency extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fiatCurrency: props.fiatCurrency
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ fiatCurrency: e.target.value });
    this.props.setFiatCurrency(e.target.value);
  }

  createOptions() {
    return this.props.listFiatCurrencies.map((currency, index) => {
      return (<option value={currency} key={index}> {currency} </option>);
    });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>The Fiat Currency</ControlLabel>
          <FormControl
            className='change-currency'
            componentClass='select'
            onChange={this.onChange}
            value={this.state.fiatCurrency}
            >
            { this.createOptions() }
          </FormControl>
        </FormGroup>
      </Form>
    );
  }
}

export default SelectCurrency;

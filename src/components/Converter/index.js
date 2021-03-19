import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import currenciesActions from '../../actions/currenciesActions.js';

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      baseCurrency: 'GBP',
      convertToCurrency: 'USD',
      baseAmount: 100,
      convertedValue: null
    };
  }

  componentDidMount() {
    this.props.getCurrencies()
  }

  changeBaseCurrency = (e) => {
    this.setState({
      baseCurrency: e.target.value
    });
  }

  changeConvertToCurrency = (e) => {
    this.setState({
      convertToCurrency: e.target.value
    });
  }

  changeBaseAmount = (e) => {
    this.setState({
      baseAmount: e.target.value
    });
  }

  convert(e) {
    e.preventDefault()
    this.props.convert(this.state.baseCurrency + '_' + this.state.convertToCurrency)
      .then(data => {
        this.setState({
          convertedValue: data.val
        });
      })
  }

  render() {
    const { baseCurrency, baseAmount, convertToCurrency } = this.state;

    const currencyChoice = this.props.currencies.payload.map((currency, i) =>
      <option key={i} value={currency.id}>
        {currency.id}
      </option>
    );

    const result = this.state.baseAmount * this.state.convertedValue

    return (
      <div>
        <form>
          <h3> Convert from: {baseCurrency} </h3>
          <select value={baseCurrency}
            onChange={this.changeBaseCurrency}>
            {currencyChoice}
            <option>{baseCurrency} </option>
          </select>
          <h3> Convert to: {convertToCurrency} </h3>
          <select value={convertToCurrency}
            onChange={this.changeConvertToCurrency}>
            {currencyChoice}
            <option>{convertToCurrency} </option>
          </select>

          <h3> Amount: </h3>
          <input type='number' id='base-amount' defaultValue={baseAmount} onChange={this.changeBaseAmount} />
          <button onClick={(e) => this.convert(e)}> Convert </button>
        </form>
        {this.state.convertedValue &&
          <h2 id='result-text'> {baseAmount} {baseCurrency} is equal to {result} {convertToCurrency}</h2>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrencies: currenciesActions.getCurrencies,
    convert: currenciesActions.convert
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);

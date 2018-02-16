import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

class CurrencyTableRow extends Component {

  render() {
    const currency = this.props.currency;
    const path = `/currency/${currency.id}/?convert=${currency.fiatCurrency}`;

    return (
      <tr className="currency-row">
        <td> {currency.rank} </td>
        <td>
          <Link to={path}> {currency.symbol} </Link>
        </td>
        <td> {currency.price} </td>
        <td> {currency.percentChange24h} </td>
      </tr>
    )
  }
}

export default CurrencyTableRow;

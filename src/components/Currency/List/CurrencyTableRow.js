import React from 'react';
import { Link } from 'react-router-dom';

function CurrencyTableRow(props) {
  const currency = this.props.currency;
  const path = `/currency/${currency.id}`;

  return (
    <tr className="currency-row">
      <td> {currency.currencyName} </td>
      <td> <Link to={path}>{currency.id} </Link> </td>
      <td> {currency.currencySymbol} </td>
    </tr>
  )
}

export default CurrencyTableRow;

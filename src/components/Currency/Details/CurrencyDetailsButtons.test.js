import React                  from 'react';
import { shallow }            from 'enzyme';
import CurrencyDetailsButtons from './CurrencyDetailsButtons';
import CurrencyTableRow       from '../List/CurrencyTableRow';

const setup = () => {
  const props = {
    currency:
      {
        "availableSupply": null,
        "fiatCurrency": undefined,
        "id": "bitcoin",
        "lastUpdated": null,
        "marketCap": undefined,
        "name": "Bitcoin",
        "percentChange1h": null,
        "percentChange24h": null,
        "percentChange7d": null,
        "price": undefined,
        "priceBtc": null,
        "rank": "1",
        "symbol": "BTC",
        "totalSupply": null,
        "volume24h": undefined
      },
    getCurrencyDetails: jest.fn()
  }
  const currencyDetailsButtons = shallow(<CurrencyDetailsButtons  {...props}/>);
  const currencyTableRow = shallow(<CurrencyTableRow {...props}/>);
  return {
    props,
    currencyDetailsButtons,
    currencyTableRow
  }
}

describe('CurrencyDetailsButtons', () => {
  const { props, currencyDetailsButtons, currencyTableRow } = setup();

  it('the item should be refresh when click button', () => {
    currencyDetailsButtons.find('.refresh').simulate('click');
    expect(props.getCurrencyDetails).toBeCalled();
  });

  it('the user should be to `/` redirected when click button', () => {
    currencyDetailsButtons.find('.link').simulate('click');
    expect(currencyTableRow.find('.currency-row').exists()).toEqual(true);
  });
});

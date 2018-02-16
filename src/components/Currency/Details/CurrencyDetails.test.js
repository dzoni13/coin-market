import React              from 'react';
import { shallow }        from 'enzyme';
import CurrencyDetails    from './CurrencyDetails';

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
      }
    }
  const currencyDetails = shallow(<CurrencyDetails  {...props}/>);
  return {
    props,
    currencyDetails
  }
}

describe('CurrencyDetails', () => {
  const { props, currencyDetails } = setup();

  it('number of fields in details', () => {
    expect(currencyDetails.find('span').length).toBe(12);
  });

  it('verfity values of `span` tag in a component', () => {
    expect(currencyDetails.find('span').at(0).getElement().props.children[1]).toContain(props.currency.rank);
    expect(currencyDetails.find('span').at(1).getElement().props.children[1]).toContain(props.currency.name);
    expect(currencyDetails.find('span').at(2).getElement().props.children[1]).toContain(props.currency.symbol);
  });
});

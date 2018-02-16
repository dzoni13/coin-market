import reducer from './currenciesReducer';
import '../components/__mocks__/localStorage';

const currencies = [
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
];

describe('currencies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(  {
      payload: []
    });
  });

  it('should handle CURRENCIES_FETCHED', () => {
    expect(reducer([], {
        type: 'CURRENCIES_FETCHED',
        payload: currencies
      })
    ).toEqual({
      payload: currencies
      });
  });
});

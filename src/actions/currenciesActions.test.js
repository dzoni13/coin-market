import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk'
import * as actions       from './currenciesActions';
import fetchMock          from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ currencies: {}});
const limit = { limit: 1}
const currencies = [
  {
    "24h_volume_usd": "8921750000.0",
    "available_supply": "16866800.0",
    "id": "bitcoin",
    "last_updated": "1518728067",
    "market_cap_usd": "170983811640",
    "max_supply": "21000000.0",
    "name": "Bitcoin",
    "percent_change_1h": "-0.59",
    "percent_change_24h": "9.0",
    "percent_change_7d": "23.37",
    "price_btc": "1.0",
    "price_usd": "10137.3",
    "rank": "1",
    "symbol": "BTC",
    "total_supply": "16866800.0"
  }
];

describe('async actions', () => {
  it('creates CURRENCIES_FETCHED when fetching currencies has been done', () => {
    fetchMock.get('/currencies/?limit=1', { body: { currencies: currencies} })

    const expectedActions = [
      { type: 'CURRENCIES_FETCHED', payload: currencies }
    ]

    return store.dispatch(actions.getCurrencies(limit)).then(() => {
      expect(store.getActions().type).toEqual(expectedActions.type);
      expect(store.getActions().payload).toEqual(expectedActions.payload);
    });
  });
});

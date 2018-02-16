import reducer from './settingsReducer';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        "fiatCurrency": "USD",
        "listFiatCurrencies": ["USD", "EUR", "CNY"]
      }
    );
  });
});

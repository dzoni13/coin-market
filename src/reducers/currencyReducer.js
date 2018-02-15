import Currency from '../components/Currency/Currency';

const initialState = {
  fetching:     false,
  payload:      [],
  failed:       false,
  fetched:      false
};

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_CURRENCY':
      return Object.assign({}, state, {
        fetching: true,
        fetched: false
      });
    case 'CURRENCY_FETCHED':
      let currency = action.payload;
      return Object.assign({}, state, {
        fetching:     false,
        payload:      new Currency(currency),
        failed:       false,
        fetched:      true
      });
    case 'FETCHING_CURRENCY_FAILED':
      return Object.assign({}, state, {
        fetching: false,
        failed:   true,
      });
    default:
      return state;
  }
}

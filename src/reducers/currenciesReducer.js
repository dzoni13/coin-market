import Currency from '../components/Currency/Currency';

const initialState = {
  fetching:     false,
  payload:      [],
  failed:       false,
  fetched:      false
};

export default function (state = initialState, action){
  switch (action.type) {
    case 'FETCHING_CURRENCIES':
      return Object.assign({}, state, {
        fetching: true,
        fetched: false
      });
    case 'CURRENCIES_FETCHED':
      let currencies = action.payload;
      return Object.assign({}, state, {
        fetching:    false,
        payload:     currencies.map(function(item) { return new Currency(item); }),
        failed:      false,
        fetched:     true
      });
    case 'FETCHING_CURRENCIES_FAILED':
      return Object.assign({}, state, {
        fetching: false,
        failed:   true
      });
    default:
      return state;
  }
}

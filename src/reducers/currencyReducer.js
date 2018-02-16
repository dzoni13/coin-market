import Currency from '../components/Currency/Currency';

const initialState = {
  payload: []
};

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'CURRENCY_FETCHED':
      let currency = action.payload;
      return Object.assign({}, state, {
        payload: new Currency(currency)
      });
    default:
      return state;
  }
}

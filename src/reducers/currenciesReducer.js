import Currency from '../components/Currency/Currency';

const initialState = {
  payload:      []
};

export default function (state = initialState, action){
  switch (action.type) {
    case 'CURRENCIES_FETCHED':
      let currencies = action.payload;
      return Object.assign({}, state, {
        payload: currencies.map(function(item) { return new Currency(item); })
      });
    default:
      return state;
  }
}

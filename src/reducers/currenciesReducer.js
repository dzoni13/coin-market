const initialState = {
  payload: []
};

export default function (state = initialState, action){
  switch (action.type) {
    case 'CURRENCIES_FETCHED':
      return Object.assign({}, state, {
        payload: Object.entries(action.payload.results).map(function(item) { return item[1]; })
      });
    default:
      return state;
  }
}

const initialState = {
  fiatCurrency: 'USD',
  listFiatCurrencies: ['USD', 'EUR', 'CNY']
};

export default function (state = initialState, action){
  switch (action.type) {
    default:
      return state;
  }
}

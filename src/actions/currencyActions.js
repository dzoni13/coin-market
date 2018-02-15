import currenciesService from '../services/currenciesService';

export function fetchDone(res) {
  return {
    type: 'CURRENCY_FETCHED',
    payload: res.data[0]
  };
}


export function getCurrency(currencyId, params = {}) {
  return async dispatch => {
    const res = await currenciesService.get(currencyId, params)
    dispatch(fetchDone(res));
  };
}

const currencyActions = {
  getCurrency
};

export default currencyActions;

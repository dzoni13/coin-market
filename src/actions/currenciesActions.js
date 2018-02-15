import currenciesService from '../services/currenciesService';

export function fetchDone(res) {
  return {
    type: 'CURRENCIES_FETCHED',
    payload: res.data
  };
}

export function getCurrencies(params = {}) {
  return async dispatch => {
    const res = await currenciesService.getAll(params);
    dispatch(fetchDone(res));
  };
}

const currenciesActions = {
  getCurrencies
};

export default currenciesActions;

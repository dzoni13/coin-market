import currenciesService from '../services/currenciesService';

export function fetchDone(res) {
  return {
    type: 'CURRENCIES_FETCHED',
    payload: res.data
  };
}

export function getCurrencies(params = {}) {
  return dispatch => {
    return currenciesService.getAll(params)
      .then((json) => {
        dispatch(fetchDone(json));
      });
  };
}

const currenciesActions = {
  getCurrencies
};

export default currenciesActions;

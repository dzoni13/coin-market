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

export function convert(params) {
  return dispatch => {
    return currenciesService.convert(params)
      .then((json) => {
        return Object.values(json.data)[0]
      });
  };
}

const currenciesActions = {
  getCurrencies,
  convert
};

export default currenciesActions;

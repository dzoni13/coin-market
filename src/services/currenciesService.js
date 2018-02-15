import axios from 'axios';

let currenciesService = {
  apiEndpoint: 'https://api.coinmarketcap.com/v1/ticker/',

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}`, { params: params })
      .then(res => res);
  },

  get(tickerId, params) {
    return axios.get(`${this.apiEndpoint}${tickerId}/`, { params: params })
      .then(res => res);
  }
}

export default currenciesService;

import axios from 'axios';
import config from '../config';

const currenciesService = {
  apiEndpoint: config.API_ENDPOINT,
  apiKey: config.API_KEY,

  getAll(params = {}) {
    return axios.get(`${this.apiEndpoint}currencies?apiKey=${this.apiKey}`)
      .then(res => res);
  },

  convert(value){
    return axios.get(`${this.apiEndpoint}convert?q=${value}&compact=y&apiKey=${this.apiKey}`)
      .then(res => res);
  },

  get(tickerId, params) {
    return axios.get(`${this.apiEndpoint}${tickerId}/`, { params: params })
      .then(res => res);
  }
}

export default currenciesService;

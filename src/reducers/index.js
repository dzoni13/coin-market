import { combineReducers } from 'redux';
import currenciesReducer   from './currenciesReducer';
import currencyReducer     from './currencyReducer';
import settingsReducer     from './settingsReducer';

export default combineReducers({
  currencies: currenciesReducer,
  currency: currencyReducer,
  settings: settingsReducer
});

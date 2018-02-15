import { reactLocalStorage } from 'reactjs-localstorage';

export default class Currency {
  constructor(data) {
    this.id               = data.id                 || null;
    this.name             = data.name               || null;
    this.symbol           = data.symbol             || null;
    this.rank             = data.rank               || null;
    this.priceBtc         = data.price_btc          || null;
    this.fiatCurrency     = reactLocalStorage.get('fiatCurrency') !== 'undefined' ? reactLocalStorage.get('fiatCurrency') : 'USD';
    this.price            = this.setPrice(data);
    this.volume24h        = this.setVolume24h(data);
    this.marketCap        = this.setMarketCap(data);
    this.availableSupply  = data.available_supply   || null;
    this.totalSupply      = data.total_supply       || null;
    this.percentChange1h  = data.percent_change_1h  || null;
    this.percentChange24h = data.percent_change_24h || null;
    this.percentChange7d  = data.percent_change_7d  || null;
    this.lastUpdated      = data.last_updated       || null;
  }

  setPrice(data) {
    switch(this.fiatCurrency) {
      case 'USD':
        return data.price_usd;
      case 'EUR':
        return data.price_eur;
      case 'CNY':
        return data.price_cny;
      default:
        return;
    }
  }

  setVolume24h(data) {
    switch(this.fiatCurrency) {
      case 'USD': //invalid identifier name
        return data['24h_volume_usd'];
      case 'EUR':
        return data['24h_volume_eur'];
      case 'CNY':
        return data['24h_volume_cny'];
      default:
        return;
    }
  }

  setMarketCap(data) {
    switch(this.fiatCurrency) {
      case 'USD':
        return data.market_cap_usd;
      case 'EUR':
        return data.market_cap_eur;
      case 'CNY':
        return data.market_cap_cny;
      default:
        return;
    }
  }
}

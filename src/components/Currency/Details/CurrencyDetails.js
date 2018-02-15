import React, { Component }   from 'react';
import { ControlLabel }       from 'react-bootstrap';

class CurrencyDetails extends Component {
  render() {
    const { currency } = this.props;

    return (
      <div className="currency-details-margins">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Rank </ControlLabel>
            <span> {currency.rank} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Name </ControlLabel>
            <span> {currency.name} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Symbol </ControlLabel>
            <span> {currency.symbol} </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> {`Price in ${currency.fiatCurrency}`} </ControlLabel>
            <span> {currency.price} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> {`24h volume in ${currency.fiatCurrency}`} </ControlLabel>
            <span> {currency.volume24h} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> {`Market Cap in ${currency.fiatCurrency}`} </ControlLabel>
            <span> {currency.marketCap} </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> 1h ​change </ControlLabel>
            <span> {currency.percentChange1h} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> 24h change </ControlLabel>
            <span> {currency.percentChange24h} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> 7d change </ControlLabel>
            <span> {currency.percentChange7d} </span>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Price in bitcoin </ControlLabel>
            <span> {currency.priceBtc} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Available Supply </ControlLabel>
            <span> {currency.availableSupply} </span>
          </div>
          <div className="col-lg-3 col-md-3">
            <ControlLabel> Total Supply </ControlLabel>
            <span> {currency.totalSupply} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyDetails;

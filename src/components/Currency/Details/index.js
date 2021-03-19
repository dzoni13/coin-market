import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button, ControlLabel } from 'react-bootstrap';
import currenciesActions from '../../../actions/currenciesActions';

class CurrencyDetailsContainer extends Component {
  componentDidMount = () => {
    this.props.getCurrencies()
  }

  render() {
    const { payload: currencies } = this.props.currencies;
    const currencyId = this.props.match.params.id;
    const currency = currencies.filter(item => item.id === currencyId)

    return (
      <DocumentTitle title="Cryptocurrency: Details">
        <div>
          <Link to={'/'}>
            <Button
              className="link"
              bsStyle="link"
              > Back to list
            </Button>
          </Link>
          {currencies.length > 0 &&
            <div className="currency-details-margins">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <ControlLabel> Currency Name </ControlLabel>
                  <span> {currency[0].currencyName} </span>
                </div>
                <div className="col-lg-3 col-md-3">
                  <ControlLabel> Code </ControlLabel>
                  <span> {currency[0].id} </span>
                </div>
                <div className="col-lg-3 col-md-3">
                  <ControlLabel> Symbol </ControlLabel>
                  <span> {currency[0].currencySymbol} </span>
                </div>
              </div>
            </div>
          }
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrencies: currenciesActions.getCurrencies
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetailsContainer);

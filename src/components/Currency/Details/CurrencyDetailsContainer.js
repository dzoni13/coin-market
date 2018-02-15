import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import DocumentTitle          from 'react-document-title';
import { bindActionCreators } from 'redux';
import { reactLocalStorage }  from 'reactjs-localstorage';
import currencyActions        from '../../../actions/currencyActions';
import CurrencyDetailsButtons from './CurrencyDetailsButtons';
import CurrencyDetails        from './CurrencyDetails';

class CurrencyDetailsContainer extends Component {

  componentDidMount = () => {
    this.getCurrencyDetails();
  };

  getCurrencyDetails = () => {
    const currencyId = this.props.match.params.id;
    this.props.getCurrency(currencyId, { convert: reactLocalStorage.get('fiatCurrency')});
  };

  render() {
    const { payload: currency } = this.props.currency;

    return (
      <DocumentTitle title="Cryptocurrency: Details">
        <div>
          <CurrencyDetailsButtons
            getCurrencyDetails={this.getCurrencyDetails}
            />
          <CurrencyDetails
            currency={currency}
            />
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrency: currencyActions.getCurrency
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetailsContainer);

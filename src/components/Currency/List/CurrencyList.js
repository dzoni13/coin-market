import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import DocumentTitle           from 'react-document-title';
import { bindActionCreators }  from 'redux';
import { Button, Table }       from 'react-bootstrap';
import { reactLocalStorage }   from 'reactjs-localstorage';
import currenciesActions       from '../../../actions/currenciesActions.js';
import CurrencyTableRow        from './CurrencyTableRow';
import ColumnsTitle            from './ColumnsTitle';

class CurrencyList extends Component {

  componentDidMount = () => {
    this.getCurrenciesList();
  };

  getCurrenciesList = () => {
    const fiatCurrency = reactLocalStorage.get('fiatCurrency') !== 'undefined' ? reactLocalStorage.get('fiatCurrency') : this.props.fiatCurrency;
    this.props.getCurrencies({ limit: 100, convert: fiatCurrency });
  }

  renderRows = () => {
    const { currencies } = this.props;
    return currencies.payload.map((item) => {
      return (
        <CurrencyTableRow
          key={item.id}
          currency={item}
        />
      );
    });
  };

  renderCurrencies() {
    const currencies = this.props.currencies.payload;
    if(currencies.length > 0) {
      return (
        <div>
          <Button
            onClick={this.getCurrenciesList}
            >Refresh
          </Button>
            <Table responsive>
              <ColumnsTitle />
              <tbody>
                {this.renderRows()}
              </tbody>
            </Table>
        </div>
      );
    }
  }


  render() {
    return (
      <DocumentTitle title="Cryptocurrency: List">
        <div>
          {this.renderCurrencies()}
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies,
    fiatCurrency: state.settings.fiatCurrency
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrencies: currenciesActions.getCurrencies
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);

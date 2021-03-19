import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { Button, Table } from 'react-bootstrap';
import currenciesActions from '../../../actions/currenciesActions.js';
import CurrencyTableRow from './CurrencyTableRow';
import ColumnsTitle from './ColumnsTitle';

class CurrencyList extends Component {

  componentDidMount = () => {
    this.props.getCurrencies();
  };

  renderRows = () => {
    const { currencies } = this.props;
    return currencies.payload.map((item, i) => {
      return (
        <CurrencyTableRow
          key={i}
          currency={item}
        />
      );
    });
  };

  renderCurrencies() {
    const currencies = this.props.currencies.payload;

    if(currencies.length > 0) {
      return (
        <div className="currencies">
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
          {this.renderCurrencies()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);

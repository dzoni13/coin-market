import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import DocumentTitle           from 'react-document-title';
import { reactLocalStorage }   from 'reactjs-localstorage';
import SelectCurrency          from './SelectCurrency';

class Settings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: reactLocalStorage.get('fiatCurrency') !== 'undefined' ? reactLocalStorage.get('fiatCurrency') : this.props.fiatCurrency
    }

    this.setFiatCurrency = this.setFiatCurrency.bind(this);
  }

  componentDidMount = () => {
    this.setFiatCurrency(this.state.value);
  };

  setFiatCurrency(fiatCurrency) {
    this.setState({ value: fiatCurrency });
    reactLocalStorage.set('fiatCurrency', fiatCurrency);
  }

  render() {
    return (
      <DocumentTitle title="Cryptocurrency: Settings">
        <SelectCurrency
          fiatCurrency={this.state.value}
          listFiatCurrencies={this.props.listFiatCurrencies}
          setFiatCurrency={this.setFiatCurrency}
          />
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    fiatCurrency: state.settings.fiatCurrency,
    listFiatCurrencies: state.settings.listFiatCurrencies
  }
}

export default connect(mapStateToProps)(Settings);

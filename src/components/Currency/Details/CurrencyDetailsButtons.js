import React, { Component }      from 'react';
import { Link }                  from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

class CurrencyDetailsButtons extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Link to={'/'}>
          <Button
            className="link"
            bsStyle="link"
            > Back to list
          </Button>
        </Link>
        <Button
          className="refresh"
          onClick={this.props.getCurrencyDetails}
          > Refresh
        </Button>
      </ButtonToolbar>
    );
  }
}

export default CurrencyDetailsButtons;

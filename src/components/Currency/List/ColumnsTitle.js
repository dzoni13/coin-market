import React, { Component } from 'react';

class ColumnsTitle extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="text-uppercase"> Rank </th>
          <th className="text-uppercase"> Symbol </th>
          <th className="text-uppercase"> Price ​in ​the ​selected ​fiat ​currency </th>
          <th className="text-uppercase"> 24 hour change </th>
        </tr>
      </thead>
    );
  }
}

export default ColumnsTitle;

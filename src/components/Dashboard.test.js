import React        from 'react';
import { shallow }  from 'enzyme';
import CurrencyList from './Currency/List/CurrencyList';
import Dashboard    from './Dashboard';

const dashboard = shallow(<Dashboard />);

describe('Dashboard', () => {
  it('renders correctly', () => {
    expect(dashboard).toMatchSnapshot();
  });

  it('exist a Dashboard component', () => {
    expect(dashboard.find(CurrencyList).exists()).toEqual(true);
  });
});

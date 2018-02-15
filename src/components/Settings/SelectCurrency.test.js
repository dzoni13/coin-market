import React          from 'react';
import { shallow }    from 'enzyme';
import SelectCurrency from './SelectCurrency';

const selectCurrency = shallow(<SelectCurrency />);

describe('SelectCurrency', () => {
  it('renders correctly', () => {
    expect(selectCurrency).toMatchSnapshot();
  });

  


});

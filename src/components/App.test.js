import React              from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter }   from 'react-router';
import App                from './App';
import Header             from './Header';
import Dashboard                from './Dashboard';
import CurrencyDetailsContainer from './Currency/Details/CurrencyDetailsContainer';
import Settings                 from './Settings/Settings';

const app = shallow(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders the Header component', () => {
    expect(app.find(Header).exists()).toEqual(true);
  });

  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Dashboard)).toHaveLength(0);
    expect(wrapper.find(CurrencyDetailsContainer)).toHaveLength(0);
    expect(wrapper.find(Settings)).toHaveLength(0);
  });
});

import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk'
import * as actions       from './currenciesActions';
import fetchMock          from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates CURRENCIES_FETCHED when fetching currencies has been done', () => {
    fetchMock
      .getOnce('/currencies', { body: { currencies: ['do something'] } })
    
    const expectedActions = [
      { type: types.CURRENCIES_FETCHED, body: { currencies: ['do something'] } }
    ]
    const store = mockStore({ currencies: [] })

    return store.dispatch(actions.getCurrencies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

import * as bitcoin from './bitcoin';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore(bitcoin.init);

const mockResponse = { body: { bpi: 'bitcoin price index' }};

fetchMock.get(bitcoin.bitcoinAPI, mockResponse);

describe('BITCOIN REDUX', () => {
  describe('Actions', () => {
    it('creates an async action to fetchBTC val', () => {
      const expectedActions = [{ 
        bitcoin: mockResponse.body, 
        type: bitcoin.FETCH_BITCOIN_SUCCESS 
      }];

      return store.dispatch(bitcoin.fetchBitcoin()).then((a) => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Reducers', () => {
    const bitcoinData = { bpi: 'bitcoin price index'};

    it('fetches and sets bitcoin data', () => {
      expect(bitcoin.bitcoinReducer({}, { type: bitcoin.FETCH_BITCOIN_SUCCESS, bitcoin: bitcoinData })).toEqual({ bitcoin : bitcoinData })    
    });
  });
});

/**
 * 
 return (dispatch) => fetch(bitcoinAPI)
    .then((response) => response.json())
    .then((json) => dispatch({
      type: FETCH_BITCOIN_SUCCESS,
      bitcoin: { bpi: json.bpi },
    }))
    .catch((e) => dispatch({
      type: FETCH_BITCOIN_ERROR,
      error: e,
    }))
 * 
 */
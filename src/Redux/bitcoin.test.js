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
      
    });
  });

  describe('Reducers', () => {
   
  });
});
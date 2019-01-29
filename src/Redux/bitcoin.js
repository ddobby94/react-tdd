import { createReducer } from './index';

export const bitcoinAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json';
export const FETCH_BITCOIN = 'FETCH_BITCOIN';
export const FETCH_BITCOIN_SUCCESS = 'FETCH_BITCOIN_SUCCESS';
export const FETCH_BITCOIN_ERROR = 'FETCH_BITCOIN_ERROR';
export const init = {
  bitcoin: {},
};

export const fetchBitcoin = () => {
  
};

export const bitcoinReducer = createReducer(init, {
  [FETCH_BITCOIN_SUCCESS]: (state, { bitcoin }) => ({
    
  }),
  [FETCH_BITCOIN_ERROR]: (state, { error }) => ({
    
  }),
});

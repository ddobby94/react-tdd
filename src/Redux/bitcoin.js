import { createReducer } from './index';

export const bitcoinAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json';
export const FETCH_BITCOIN = 'FETCH_BITCOIN';
export const FETCH_BITCOIN_SUCCESS = 'FETCH_BITCOIN_SUCCESS';
export const FETCH_BITCOIN_ERROR = 'FETCH_BITCOIN_ERROR';
export const init = {
  bitcoin: {},
};

export const fetchBitcoin = () => {
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
};

export const bitcoinReducer = createReducer(init, {
  [FETCH_BITCOIN_SUCCESS]: (state, { bitcoin }) => ({
    ...state,
    bitcoin,
  }),
  [FETCH_BITCOIN_ERROR]: (state, { error }) => ({
    ...state,
    error,
  }),
});

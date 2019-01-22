import { createReducer } from './index'

export const SET_BALANCE = 'SET_BALANCE';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

export const setBalance = (balance) => ({
  type: SET_BALANCE,
  balance,
});

export const deposit = (deposit) => ({
  type: DEPOSIT,
  deposit,
});

export const withdraw = (withdrawal) => ({
  type: WITHDRAW,
  withdrawal,
});

const initialState = {
  balance: 0,
};

export const balanceReducer = createReducer(initialState, {
  [SET_BALANCE]: (state, { balance }) => ({
    ...state,
    balance,
  }),
  [DEPOSIT]: (state, { deposit }) => ({
    ...state,
    balance: state.balance + deposit,
  }),
  [WITHDRAW]: (state, { withdrawal }) => ({
    ...state,
    balance: state.balance - withdrawal,
  }),
});
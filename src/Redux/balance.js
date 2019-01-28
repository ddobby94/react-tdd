import { createReducer } from './index'

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

export const deposit = () => ({});

export const withdraw = () => ({});

const initialState = {
  balance: 0,
};

export const balanceReducer = createReducer(initialState, {
  [DEPOSIT]: (state, { deposit }) => ({

  }),
  [WITHDRAW]: (state, { withdrawal }) => ({

  }),
});
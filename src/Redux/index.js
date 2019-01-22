import { createStore, combineReducers, applyMiddleware } from 'redux';
import { balanceReducer } from './balance';
import { bitcoinReducer } from './bitcoin';
import thunk from 'redux-thunk';

export const BALANCE_COOKIE = 'BALANCE_COOKIE';

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      const newState = handlers[action.type](state, action);
      return newState;
    } else {
      return state;
    }
  }
}

const reducers = combineReducers({
  balance: balanceReducer,
  bitcoin: bitcoinReducer,
});

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(reducers, applyMiddleware(thunk, logger));;

export default store;

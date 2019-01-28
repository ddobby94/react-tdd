import * as balance from './balance';

describe('Balance Redux', () => {
  describe('Actions', () => {

    it('Creates an action to deposit into balance', () => {
      const deposit = 10;

      const expectedAction = { type: balance.DEPOSIT, deposit };

      expect(balance.deposit(deposit)).toEqual(expectedAction);
    });

    it('Creates an action to withdraw from balance', () => {
      const withdrawal = 10;

      const expectedAction = { type: balance.WITHDRAW, withdrawal };

      expect(balance.withdraw(withdrawal)).toEqual(expectedAction);
    });

  });

  describe('Reducer', () => {

    it('deposits into balance', () => {
      const deposit = 10;
      const initBalance = 5;
      const reducerObj = {
        type: balance.DEPOSIT,
        deposit,
      }
      const initState = { balance: initBalance };

      expect(balance.balanceReducer(initState, reducerObj).balance).toEqual(deposit + initBalance);
    });

    it('withdraws from balance', () => {
      const withdrawal = 10;
      const initBalance = 5;
      const reducerObj = {
        type: balance.WITHDRAW,
        withdrawal,
      }
      const initState = { balance: initBalance };

      expect(balance.balanceReducer(initState, reducerObj).balance).toEqual(initBalance - withdrawal);

    });
  });

});

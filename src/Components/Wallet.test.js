import React from 'react';
import { shallow } from 'enzyme';
import { DEPOSIT, WITHDRAW } from '../Redux/balance';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn(); // For testing Props
  const mockWithdraw = jest.fn(); 
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet  {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
  
  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input to deposit/withdraw', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';
    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', { target: { value: userBalance }});
    });

    it('updates local balance in STATE', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('user wants to make deposit', () => {
      const depositHistory = { type: DEPOSIT, amount: 20 };
      beforeEach(() => {
        wallet.setState({ history: [], balance: 20 });
        wallet.find('.btn-deposit').simulate('click');
      });

      it('dispatches the deposit() in the props', () => {
        expect(wallet.state().history).toEqual([depositHistory]);
      });
    });
    
    describe('user wants to withdraw', () => {
      const withdrawHistory = { type: WITHDRAW, amount: 20 };
      beforeEach(() => {
        wallet.setState({ history: [], balance: 20 });
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('dispatches the withdraw() in the props', () => {
        expect(wallet.state().history).toEqual([withdrawHistory]);
      });
    });

  });
});
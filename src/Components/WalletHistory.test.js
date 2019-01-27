import React from 'react';
import { shallow } from 'enzyme';
import DEPOSIT from '../Redux/balance';
import WalletHistory from './WalletHistory';

describe('WalletHistory', () => {
  const props = { history: [] };
  const walletHistory = shallow(<WalletHistory  {...props} />);

  it('renders correctly', () => {
    expect(walletHistory).toMatchSnapshot();
  });

  describe('When the user deposits some money', () => {
    const depositedAmount = 20;
    const historyItem = { type: DEPOSIT, amount: depositedAmount };
    
    beforeEach(() => {

    });

    it('Adds a new row', () => {

    });
  });
});
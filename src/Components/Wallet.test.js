import React from 'react';
import { shallow } from 'enzyme';
import { DEPOSIT, WITHDRAW } from '../Redux/balance';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet  {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
  
});
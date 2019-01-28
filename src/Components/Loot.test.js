import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  const bitcoinObj = { bpi: { USD: { rate_float: 1000 }}};
  let props = {
    balance: 10, 
    bitcoin: {
      bitcoin: {},
    },
    fetchBitcoin: mockFetchBitcoin,
  };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    
  });

  describe('when there are valid bitcoin props', () => {
    
  });
});
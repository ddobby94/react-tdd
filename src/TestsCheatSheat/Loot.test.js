import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
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
    beforeEach(() => {
      loot = mount(<Loot {...props}/>)
    });

    it('dispatches the fetchBitcoin method', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        ...props,
        bitcoin: { bpi: { USD: { rate_float: 1000 }}},
      }
      loot = shallow(<Loot {...props} />);
    });

    it('Displays the correct bitcoin val', () => {
      expect(loot.find('h3').text()).toEqual(`Bitcoin balance: 0.01`)
    });
  });
});
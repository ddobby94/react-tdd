import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../Redux/bitcoin';

export class Loot extends React.Component {
  getBitcoin = () => {
  }

  render() {
    return (
      <h3>Bitcoin balance: </h3>
    );
  }
}

export default connect((state) => ({
  balance: state.balance.balance,
  bitcoin: state.bitcoin.bitcoin
}), { fetchBitcoin })(Loot);
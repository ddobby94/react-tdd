import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../Redux/bitcoin';

export class Loot extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  getBitcoin = () => {
    const { bitcoin, balance, error } = this.props;

    if (!bitcoin.bpi) {
      return '';
    }
    return balance / bitcoin.bpi.USD.rate_float;
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.getBitcoin()}</h3>
    );
  }
}

export default connect((state) => ({
  balance: state.balance.balance,
  bitcoin: state.bitcoin.bitcoin
}), { fetchBitcoin })(Loot);
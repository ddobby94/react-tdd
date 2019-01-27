import React from 'react';
import { connect } from 'react-redux';
import { withdraw, deposit, DEPOSIT, WITHDRAW } from '../Redux/balance';
import WalletHistory from './WalletHistory';

export class Wallet extends React.Component {
  state = {
    balance: 0,
    history: [],
  }

  deposit = () => {
    const { history } = this.state;
    history.push({ type: DEPOSIT, amount: this.state.balance });
    this.setState({ history });
    this.props.deposit(this.state.balance);
  }

  withdraw = () => {
    const { history } = this.state;
    history.push({ type: WITHDRAW, amount: this.state.balance });
    this.setState({ history });
    this.props.withdraw(this.state.balance);
  }

  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet balance: {this.props.balance}
        </h3>
        <input 
          className="input-wallet" 
          onChange={(e) => this.setState({ balance: parseInt(e.target.value, 10) })} 
        />
        <button 
          className="btn-deposit" 
          onClick={this.deposit}
          children="DEPOSIT"
        />
        <button 
          className="btn-withdraw" 
          onClick={this.withdraw}
          children="WITHDRAW"
        />
        <WalletHistory 
          history={this.state.history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.balance.balance,
});

export default connect(mapStateToProps, { withdraw, deposit })(Wallet)
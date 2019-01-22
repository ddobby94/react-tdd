import React from 'react';
import { connect } from 'react-redux';
import { withdraw, deposit } from '../Redux/balance';

export class Wallet extends React.Component {
  state = {
    balance: 0,
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
          onClick={() => this.props.deposit(this.state.balance)}
          children="DEPOSIT"
        />
        <button 
          className="btn-withdraw" 
          onClick={() => this.props.withdraw(this.state.balance)}
          children="WITHDRAW"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  balance: state.balance.balance,
});

export default connect(mapStateToProps, { withdraw, deposit })(Wallet)
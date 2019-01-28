import React from 'react';
import { connect } from 'react-redux';
import { withdraw, deposit, DEPOSIT, WITHDRAW } from '../Redux/balance';
import WalletHistory from './WalletHistory';



export class Wallet extends React.Component {
  state = {
    balance: 0,
    totalBalance: 0,
    history: [],
  }

  deposit = () => {

  }

  withdraw = () => {
    
  }

  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet balance:
        </h3>
        <input 
          className="input-wallet"
        />
        <button 
          className="btn-deposit" 
          children="DEPOSIT"
        />
        <button 
          className="btn-withdraw" 
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
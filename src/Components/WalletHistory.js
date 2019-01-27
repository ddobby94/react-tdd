import React from 'react';
import { DEPOSIT, WITHDRAW } from '../Redux/balance';

const WalletHistory = ({ history }) => (
  <>
    <h3>HISTORY: </h3>
    <div className="history-list">
    {history.map(({ type, amount }) => (
      <p style={{ color: type === DEPOSIT ? 'green' : 'red' }} children={`${amount}$ ${type}`} /> 
    ))}
    </div>
  </>
);

export default WalletHistory;
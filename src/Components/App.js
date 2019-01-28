import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';


class App extends React.Component {
  render() {
    return (
      <div>
        <h2 children="Loot Check" />
        {/* <Loot /> */}
        <Wallet />
      </div>
    );
  }
}

export default App;
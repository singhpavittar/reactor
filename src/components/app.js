import React, { Component } from 'react';

import Routes from './routes/routes'
import Header from './common/header/headerview';

class App extends Component {
  render() {
    const {store , history} = this.props;
    return (
      <div>
        <h2>Reactor is reacting now...</h2>
        <Header store={store} history={history}/>
        <Routes />
      </div>
    );
  }
}

export default App;

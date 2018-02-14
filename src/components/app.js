import React, { Component } from 'react';

import { routes } from './routes/routes'
import Header from './common/header/headerview';
import { renderRoutes } from 'react-router-config';


class App extends Component {
  render() {
    const {store , history} = this.props;
    return (
      <div>
        <h2>Reactor is reacting now...</h2>
        <Header store={store} history={history}/>
         {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;

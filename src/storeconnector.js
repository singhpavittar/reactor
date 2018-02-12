import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './components/app'

class Storeconnector extends Component {
  render() {
    const {store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  }
}

export default Storeconnector;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './components/routes/app'

class Appcontainer extends Component {
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

export default Appcontainer;

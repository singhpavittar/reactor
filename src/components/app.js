import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Routes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink exact to="/" >Home</NavLink>
          {' | '}
          <NavLink to="/about" >About</NavLink>
          {' | '}
          <NavLink to="/404" >404</NavLink>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;

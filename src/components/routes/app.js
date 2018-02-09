import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import Home from './home/homepage'
import About from './about/aboutpage'
import Error from './error/errorpage'

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
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;

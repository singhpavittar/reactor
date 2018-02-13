import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types'
import {Helmet} from 'react-helmet';
import {mapStateToProps,mapDispatchToProps} from './homecontainer';
import homeService from './homeservice';

class HomePage extends Component {

  componentWillMount() {
    homeService.getDetails()
    .then(res => {
      console.log(res);
    })
  }

  componentWillUnmount() {
    this.props.resetcounter();
  }

  render() {
    return(
      <div>
        <Helmet id="login">
          <title>Reactor | Home</title>
        </Helmet>
        <h2 className="h2-style">Count : {this.props.home}</h2>
        <button type="button" onClick={this.props.increment}>+1</button>
        <button type="button" onClick={this.props.decrement}>-1</button>
        <button type="button" onClick={this.props.resetcounter}>Reset</button>
      </div>
    );
  }
}

HomePage.PT = {
  home : PT.number,
  increment : PT.func,
  decrement : PT.func,
  resetcounter : PT.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

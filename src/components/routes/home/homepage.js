import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types'
import {mapStateToProps,mapDispatchToProps} from './homecontainer';

import homeService from './homeservice';
import CONST from '../../../constants/assets';
import Page from '../../common/page/page';
import META from '../../../constants/meta';

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentWillMount() {

  }

  compoentDidMount(){
    this.props.decrement();
    homeService.getDetails()
    .then(res => {
      this.setState({list :res.data.data });
    })
  }

  componentWillUnmount() {
    this.props.resetcounter();
  }

  render() {
    return(
      <Page {...META.home}>
        {this.state.list && <h1>list length : {this.state.list.length}</h1>}
        <img src={CONST.LOGO} alt="logo"/>
        <h2 className="h2-style">Count : {this.props.home}</h2>
        <button type="button" onClick={this.props.increment}>+1</button>
        <button type="button" onClick={this.props.decrement}>-1</button>
        <button type="button" onClick={this.props.resetcounter}>Reset</button>
      </Page>
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

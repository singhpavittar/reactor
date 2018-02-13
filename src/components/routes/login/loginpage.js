import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types'//eslint-disable-line
import {Helmet} from 'react-helmet';
import {mapStateToProps, mapDispatchToProps} from './logincontainer';
import loginService from './loginservice';

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.state = {
      email : '',
      password : ''
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  // Login : Store token in Store & Localstorage Here
  login() {
    let that = this;
    loginService.login(this.state).then(res => {
      that.props.login(res.data.token);
      localStorage.setItem('accessToken', res.data.token);
      that.setState({email : '', password : ''});
      that.props.history.push('/');
    });
  }

  handleFormChange(e){
    let field = e.target.name;
    this.setState({[field] : e.target.value})
  }

  render() {
    return(
      <div>
        <Helmet id="login">
          <title>Reactor | Login</title>
        </Helmet>
        <label>Email</label><br/>
        <input type="email" name="email" value={this.state.email} palceholder="Enter Email Address" onChange={this.handleFormChange}/><br/>
        <label>Password</label><br/>
        <input type="password" name="password" value={this.state.password} palceholder="Enter password" onChange={this.handleFormChange}/><br/><br/>
        <button type="button" onClick={this.login}>Login</button>
      </div>
    );
  }
}

LoginPage.PT = {
  login : PT.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

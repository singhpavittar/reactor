import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){

  }

  logout(){
    localStorage.removeItem('accessToken');
    this.props.history.push('/login');
  }

  render(){
    const isLoggedIn = () => localStorage.getItem('accessToken') ? true : false;
    return (
      <div>
        <NavLink exact to="/" >Home</NavLink>
        {' |'}
        <NavLink to="/about" >About</NavLink>
        {' | '}
        <NavLink to="/404" >404</NavLink>
        {isLoggedIn() ? <span>
          {' | Welcome! '}
          <button type="button" onClick={this.logout}>Logout</button>
        </span> : <NavLink to="/login" >{' | '} login </NavLink>}
      </div>
    )
  }
}

export default Header;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.signout();
  }

  render() {
    return (
      <div className="Header">
        <ul className="Header__navContainer" style={{float: 'left'}}>
          <Link to="/" className="Header__navItem Header__navItem">Dashboard</Link>
          <Link to="/admin/new-page" className="Header__navItem Header__navItem">New Page</Link>
          {!this.props.loggedIn ?
            <Link to="/admin/login">Login</Link>
            :
            <a onClick={this.handleSignout} href="#">Log Out</a>
          }
        </ul>
        <ul className="Header__navContainer" style={{float: 'right'}}>
          {!this.props.loggedIn ? 
            <Link to="/admin/login" className="Header__navItem Header__navItem">Log in</Link>
            :
            <a onClick={this.handleClick} href="#" className="Header__navItem Header__navItem">&nbsp;&nbsp;Log out</a>
          }
        </ul>
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}


export default Header
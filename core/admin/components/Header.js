import React, { Component } from 'react'
import { Link } from 'react-router-dom'




class Header extends Component {
  constructor(props){
    super(props)
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout() {
    this.props.signout();
  }

  render() {
    return (
      <div className="Header">
        <ul className="Header__navContainer">
          <Link to="/" className="Header__navItem Header__navItem">Dashboard</Link>
          <Link to="/admin/new-page" className="Header__navItem Header__navItem">New Page</Link>
          {!this.props.loggedIn ?
            <Link to="/admin/login">Login</Link>
            :
            <a onClick={this.handleSignout} href="#">Log Out</a>
          }
        </ul>
      </div>
    )
  }
}


export default Header
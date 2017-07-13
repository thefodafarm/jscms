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
        <ul>
          <Link to="/">Dashboard</Link>
          <Link to="/admin/new-page">New Page</Link>
          {!this.props.loggedIn ? 
            <Link to="/admin/login">Log in</Link>
            :
            <a onClick={this.handleClick} href="#">Log out</a>
          }
        </ul>
      </div>
    )
  }
}


export default Header
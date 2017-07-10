import React, { Component } from 'react'

class Auth extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.loggedIn)
  }

  componentDidMount(){
    return !this.props.loggedIn ? window.location.replace('/admin/login') : null
  }

  render() {
    return (
      <div>
       {this.props.loggedIn ? this.props.children : null}
      </div>
    )
  }
}


export default Auth
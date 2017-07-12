import React, { Component } from 'react';



class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.signin(this.state.email, this.state.password);
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }


  render() {


    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
        	<input 
            type="email" 
            name="email" 
            placeholder={`Enter your email`}
            onChange={this.handleChange}
            value={this.state.email || ''} 
            />
          <input 
            type="password"
            name="password"
            placeholder={`Enter your password`}
            onChange={this.handleChange}
            value={this.state.password || ''}
            />
          <input type="submit" value={`Submit`}/>
        </form>
      </div>
    );
  }
}

export default Login;

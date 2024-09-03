import React, { Component } from 'react';
import './LoginStyles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      loginTime: new Date().toLocaleString(),
    };
    this.props.onLoginSuccess(userData);
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin} className="form-container">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Login</button>
        <p className="switch-text">
          Don't have an account?{' '}
          <button
            type="button"
            className="switch-button"
            onClick={this.props.switchToSignup}
          >
            Sign Up
          </button>
        </p>
      </form>
    );
  }
}

export default Login;

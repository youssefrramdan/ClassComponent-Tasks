import React, { Component } from 'react';
import './SignupStyles.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleSignup = (e) => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      email: this.state.email,
      signupTime: new Date().toLocaleString(),
    };

    this.props.onSignupSuccess(userData);
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSignup} className="form-container">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            required
          />
        </div>
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
        <button type="submit" className="btn-primary">Sign Up</button>
        <p className="switch-text">
          Already have an account?{' '}
          <button type="button" className="switch-button" onClick={this.props.switchToLogin}>
            Login
          </button>
        </p>
      </form>
    );
  }
}

export default Signup;

import React, { Component } from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import UserDetails from './Component/UserDetails';
import Products from './Component/Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      user: null,
    };
  }

  handleLoginSuccess = (userData) => {
    this.setState({ user: userData });
  };

  handleSignupSuccess = (userData) => {
    this.setState({ user: userData });
  };

  switchToSignup = () => {
    this.setState({ isLogin: false });
  };

  switchToLogin = () => {
    this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <UserDetails user={this.state.user} />
        ) : this.state.isLogin ? (
          <Login onLoginSuccess={this.handleLoginSuccess} switchToSignup={this.switchToSignup} />
        ) : (
          <Signup onSignupSuccess={this.handleSignupSuccess} switchToLogin={this.switchToLogin} />
        )}
      </div>
    );
  }
}

export default App;

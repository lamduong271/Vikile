import React, { Component } from 'react';
import Login from '../components/Landing/Login';

class LoginView extends Component {
  render() {
    return (
      <div className="login_container">
        <div className="login_filter">
        <Login></Login>
        </div>
      </div>
    );
  }
}
export default LoginView;
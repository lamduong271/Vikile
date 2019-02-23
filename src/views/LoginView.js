import React, { Component } from 'react';
import Login from '../components/Landing/Login';

class LoginView extends Component {
  render() {
    console.log(process.env.REACT_APP_API_BASE_URL)
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
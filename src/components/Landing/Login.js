import React, { Component } from 'react';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { login } from "../../actions/authentication/authentication";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  loginMe = (input) => {
    const user = {
      grant_type: 'password',
      username: input.email,
      password: input.password,
      client_id: 'client_id',
      client_secret:'my_secret'
    }
    this.props.login(user)
  }

  render() {
    console.log(this.props.isAuthenticate)
    return (
      <div>
        
      <form className="form">
       <TextField
          id="outlined-name"
          label="Email"
          className="form-email form-input"
          value={this.state.email}
          onChange={e => this.setState({email: e.target.value})}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-name"
          label="Password"
          className="form-password form-input"
          value={this.state.password}
          onChange={e => this.setState({password: e.target.value})}
          margin="normal"
          variant="outlined"
        />
        <br/>
        <div className="button-signin-signup">
          
          <Button variant="contained" color="primary" >
            SIGN UP
          </Button>

          
        </div>
        <Button onClick={()=>this.loginMe(this.state)} variant="contained" color="secondary" >
            SIGN IN
          </Button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.Authenticate.isAuthenticated,
  }
}

export default connect(mapStateToProps, {
  login
})(Login);

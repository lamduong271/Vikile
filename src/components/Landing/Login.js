import React, { Component } from 'react';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../../common/apiConnect';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = async(input) => {
    api.init()
    const url = '/oauth/token';
    const user = {
      grant_type: 'password',
      username: input.email,
      password: input.password,
      client_id: 'client_id',
      client_secret:'my_secret'
    }
    console.log(user)
    const response = await api.post(url, user);
    console.log("response"+response)
    const isSet = await api.setHeaders(response.data.access_token);
    if (isSet) {
        window.localStorage.setItem('access_token', response.data.access_token);
    }
    console.log(response.data)
    return response.data

  }

  render() {
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
        
      </form>
      <Button onClick={()=>this.login(this.state)} variant="contained" color="secondary" >
            SIGN IN
          </Button>
      </div>
    );
  }
}


export default Login;
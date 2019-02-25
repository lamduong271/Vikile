import React, { Component } from 'react';
import LoginView from './views/LoginView';
import Dashboard from './views/Dashboard';
import Student from './views/Student';
import { setCurrentUser } from './actions/authentication/authentication'
import api from './common/apiConnect';
import './App.scss';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import PreventRoute from './components/ProtectRoute/PreventRoute';

if (localStorage.access_token && localStorage.user) {
  api.setHeaders(localStorage.access_token);
  store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
}

class App extends Component {
  render() {
    api.init()
    return (
      <div className="App">
      <BrowserRouter >
      <Switch>
							<PreventRoute path="/login" exact component={LoginView} />
              <ProtectRoute path="/dashboard" component={Dashboard} />
              <ProtectRoute path="/student" component={Student} />
			</Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import LoginView from './views/LoginView';
import Dashboard from './views/Dashboard'
import { getCurrentUser, setCurrentUser } from './actions/authentication/authentication'
import { connect } from "react-redux";
import api from './common/apiConnect';
import './App.scss';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
if (localStorage.access_token && localStorage.user) {
  api.setHeaders(localStorage.access_token);
  store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <Switch>
							<Route path="/" exact component={LoginView} />
							<ProtectRoute path="/dashboard" component={Dashboard} />
			</Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
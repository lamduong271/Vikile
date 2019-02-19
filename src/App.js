import React, { Component } from 'react';
import LoginView from './views/LoginView';
// import NavBar from './components/Menu/NavBar';
import './App.scss';
import {BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
      <Switch>
							<Route path="/" exact component={LoginView} />
							<Route path="/login" component={LoginView} />
			</Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

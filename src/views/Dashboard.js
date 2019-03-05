import React, { Component } from 'react';
import Drawer from '../components/Menu/Drawer';
import { connect } from "react-redux";
import MainDashboard from '../components/Dashboard/dashboard';

class Dashboard extends Component {
  componentDidMount() {
   
  }
  render() {
    return (
       <Drawer title="Dashboard"><MainDashboard></MainDashboard></Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Authenticate.isAuthenticated,
    user: state.Authenticate.user
  }
}

export default connect(mapStateToProps, null)(Dashboard);
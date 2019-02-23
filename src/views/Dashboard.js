import React, { Component } from 'react';
import Drawer from '../components/Menu/Drawer';
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
   
  }
  render() {
    console.log("CURRENT USER ", this.props.user)
    return (
      <div>
            <Drawer></Drawer>
      </div>
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
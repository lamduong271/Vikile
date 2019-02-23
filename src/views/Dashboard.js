import React, { Component } from 'react';
import Drawer from '../components/Menu/Drawer';
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
   
  }
  render() {
    console.log("props.location.state", this.props.location)
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
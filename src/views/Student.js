import React, { Component } from 'react';
import Drawer from '../components/Menu/Drawer';
import { connect } from "react-redux";
import StudentList from '../components/Student/StudentList'
class Student extends Component {
  render() {
    return (
        <Drawer title="Students">
            <StudentList></StudentList>
        </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Authenticate.isAuthenticated,
    user: state.Authenticate.user
  }
}

export default connect(mapStateToProps, null)(Student);
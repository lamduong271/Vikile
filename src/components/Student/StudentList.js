import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStudents } from '../../actions/students/students';
import { getAllTeachers } from '../../actions/teachers/teacher';

import Student from './Student';
import AddStudentButton from './AddStudentButton';
import AddStudentDialog from './AddStudentDialog';
class StudentList extends Component {

  componentDidMount() {
    this.props.getStudents();
    this.props.getAllTeachers();

  }

  renderAllStudents = (students) => {
    return students.map(student => (
      <Student key={student._id} student={student}></Student>
    ))
  }
  render() {
    const { allStudents, allTeachers } = this.props;
    return (
      <div>
       { allStudents ? this.renderAllStudents(allStudents) : '' }
       <AddStudentButton></AddStudentButton>
       <AddStudentDialog allTeachers={allTeachers?allTeachers:{}}></AddStudentDialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStudents: state.Students.allStudents,
    allTeachers: state.Teachers.allTeachers
  }
}

export default connect(mapStateToProps, {getStudents,getAllTeachers})(StudentList);

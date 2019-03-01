import React, { Component } from 'react';
import { connect } from "react-redux";
import { getStudents } from '../../actions/students/students';
import Student from './Student';
import AddStudentButton from './AddStudentButton';
import AddStudentDialog from './AddStudentDialog';
class StudentList extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

  renderAllStudents = (students) => {
    return students.map(student => (
      <Student key={student._id} student={student}></Student>
    ))
  }
  render() {
    const { allStudents } = this.props;
    console.log(allStudents)
    return (
      <div>
       { allStudents ? this.renderAllStudents(allStudents) : '' }
       <AddStudentButton></AddStudentButton>
       <AddStudentDialog></AddStudentDialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStudents: state.Students.allStudents
  }
}

export default connect(mapStateToProps, {getStudents})(StudentList);

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Edit from '@material-ui/icons/Edit';
import {deleteStudent} from '../../actions/students/students';


// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    margin: {
      margin: theme.spacing.unit,
    },
  });
  
class Student extends Component {
  render() {
    const { student, classes } = this.props;
    return (
        <div className="container_student_list">
            <div className="container_student_list_item">
                <div className="student_header">
                <span className="student_name"><span>{student.first_name?student.first_name:student.student_name}</span></span>
                <span className="teacher_group"><span>Teacher : {student.teacher.first_name}</span></span>
                </div>
                <p>Gender: {student.gender}</p>
                <p>Age: {student.age}</p>
                <div className="action_student">
                <div className="delete_student">
                  <Fab onClick={()=>this.props.deleteStudent(student._id)} size="small" color="secondary" aria-label="Delete" className={classes.margin}>
                    <DeleteOutlinedIcon />
                  </Fab>
                </div>
                <div className="edit_student">
                  <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
                    <Edit />
                  </Fab>
                </div>
                </div>
            </div>
        </div>
    );
  }
}
 
Student.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    allStudents: state.Students.allStudents,
    allTeachers: state.Teachers.allTeachers
  }
}
export default connect(mapStateToProps, {deleteStudent})(withStyles(styles)(Student));

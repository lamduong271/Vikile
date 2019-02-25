import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });
  
class Student extends Component {
  render() {
    const { student } = this.props;
    return (
        <div className="container_student_list">
            <div className="container_student_list_item">
                <div className="student_header">
                <span className="student_name"><span>{student.student_name}</span></span>
                <span className="teacher_group"><span>Teacher : {student.teacher.first_name}</span></span>
                </div>
                <p>Gender: {student.gender}</p>
                <p>Age: {student.age}</p>
            </div>
        </div>
    );
  }
}
  
  export default withStyles(styles)(Student);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddStudentButton from './AddStudentButton';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {isEmpty} from 'lodash';
import { connect } from "react-redux";
import { addStudent } from '../../actions/students/students';
const styles = theme => ({
    container: {
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 130,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      display:'block',
    },
    button: {
        margin: theme.spacing.unit,
        marginTop:'20px'
    },
    input: {
        display: 'none',
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
  
class AddStudentDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            first_name:'',
            last_name:'',
            teacher:'',
            age:'',
            gender:''
        };
    }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderTeacherNames = (teachers) => {
    return teachers.map(teacher => (
        <MenuItem value={teacher._id} key={teacher._id}>{teacher.first_name} {teacher.last_name}</MenuItem>
    ))
  }

  handleAddStudent = (e, newStudent) => {
      this.props.addStudent(newStudent);
      this.setState({ open: false });
  }

  

  render() {
    const { classes, allTeachers } = this.props;
    const {first_name, last_name, teacher, gender, age} = this.state;
    return (
      <div>
        <AddStudentButton variant="outlined" color="primary" openAddDialog={()=>this.handleClickOpen()}>
        </AddStudentButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className="add_student_dialog"
        >
        <div className="add_student_dialog_content">
          <h6>Add Student</h6>
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-textarea"
            label="First name"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            value={first_name}
            onChange={(event) => this.setState({first_name: event.target.value})}
            margin="normal"
            />
            
            <TextField
            id="standard-textarea"
            label="Last name"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            value={last_name}
            onChange={(event) => this.setState({last_name: event.target.value})}
            margin="normal"
            />

            <TextField
            id="standard-textarea"
            label="Age"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            value={age}
            onChange={(event) => this.setState({age: event.target.value})}
            margin="normal"
            />

            <FormControl className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select
                value={gender}
                onChange={(event) => this.setState({gender: event.target.value})}
                name="gender"
                >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
            </Select>
            </FormControl>
            
            <FormControl className={classes.formControl}>
            <InputLabel>Teacher</InputLabel>
            <Select
                value={teacher}
                onChange={(event) => this.setState({teacher: event.target.value})}
                name="teacher"
                >
                {!isEmpty(allTeachers) ? this.renderTeacherNames(allTeachers) : ''}
            </Select>
            </FormControl>
            <br/>
            <Button onClick={(e)=>this.handleAddStudent(e,this.state)} variant="outlined" color="primary" className={classes.button}>
                Submit
            </Button>
            <Button onClick={()=>this.setState({open:false})} variant="outlined"  className={classes.button}>
                Cancle
            </Button>
            </form>
            </div>
        </Dialog>
      </div>
    );
  }
}

AddStudentDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
const mapStateToProps = (state) => {
    return {
      allTeachers: state.Teachers.allTeachers
    }
}
export default connect(mapStateToProps,{ addStudent })(withStyles(styles)(withMobileDialog()(AddStudentDialog)));
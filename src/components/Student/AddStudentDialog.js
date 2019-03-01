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

const styles = theme => ({
    container: {
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 160
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
            age:''
        };
    }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    const { classes } = this.props;
    const {first_name, last_name, teacher} = this.state;

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

            <FormControl className={classes.formControl}>
            <InputLabel>Teacher</InputLabel>
            <Select
                value={teacher}
                onChange={(event) => this.setState({teacher: event.target.value})}
                name="teacher"
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Kirsi</MenuItem>
                <MenuItem value={20}>Jukka</MenuItem>
                <MenuItem value={30}>Juha</MenuItem>
                <MenuItem value={30}>Juhani</MenuItem>

            </Select>
            </FormControl>
            <br/>
            <Button variant="outlined" color="primary" className={classes.button}>
                Submit
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
  
  export default withStyles(styles)(withMobileDialog()(AddStudentDialog));
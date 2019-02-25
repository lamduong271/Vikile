import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
});

class AddStudentButton extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      </div>
    );
  }
}

  
AddStudentButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default  withStyles(styles)(AddStudentButton);

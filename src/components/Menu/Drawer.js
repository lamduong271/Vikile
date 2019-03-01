import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Setting from '@material-ui/icons/Settings';
import Activity from '@material-ui/icons/LocalActivity';
import Face from '@material-ui/icons/Face';
import Schedule from '@material-ui/icons/Schedule';
import Child from '@material-ui/icons/ChildCare';
import AccountCircle from '@material-ui/icons/ChildCare';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../../actions/authentication/authentication'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  logCurrentUserOut = () => {
    console.log("haha")
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
          <p>{this.props.user.first_name}</p>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

              <Link to={'/dashboard'}>
                <ListItem button>
                  <ListItemIcon><Activity/></ListItemIcon>
                  <ListItemText primary="Activities" />
                </ListItem>
              </Link>

              <Link to={'/dashboard'}>
              <ListItem button>
                <ListItemIcon><Schedule/></ListItemIcon>
                <ListItemText primary="Sessions" />
              </ListItem>
              </Link>

              <Link to={'/dashboard'}>
              <ListItem button>
                <ListItemIcon><Face/></ListItemIcon>
                <ListItemText primary="Teachers" />
              </ListItem>
              </Link>
              
              <Link to={'/student'}>
              <ListItem button>
                <ListItemIcon><Child/></ListItemIcon>
                <ListItemText primary="Students" />
              </ListItem>
              </Link>

          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon><Setting/></ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><AccountCircle/></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button onClick={()=>this.props.logout()}>
                <ListItemIcon><KeyboardReturn/></ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            {this.props.children}
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Authenticate.isAuthenticated,
    user: state.Authenticate.user
  }
}


export default connect(mapStateToProps, {logout})(withStyles(styles, { withTheme: true })(PersistentDrawerLeft));

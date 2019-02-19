import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
    
    return (
        <nav>
        <div className="nav-wrapper">
        <a href="" className="left hide-on-med-and-down">Moodle</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Notification</a></li>
            <li><a href="badges.html">Message</a></li>
            <li>
                Lam Duong
                <IconButton color="inherit"
                aria-owns={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                TransitionComponent={Fade}
                >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </li>
        </ul>
        </div>
    </nav>
    );
  }
}

export default NavBar;

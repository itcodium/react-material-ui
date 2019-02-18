import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBarCustom from './AppBarCustom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { NavLink } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

    fullList: {
        width: 'auto',
    },
    hide: {
        display: 'none',
    },
};

class Header extends React.Component {
    state = {
        anchorEl: null,
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        const hide = { display: "none" };
        return (
            <AppBar position="static" >
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        COADYS
                        </Typography>
                    <Button color="inherit" style={hide}>Features</Button>
                    <Button color="inherit" style={hide}>Enterprise</Button>
                    <Button color="inherit" style={hide}>Support</Button>
                </Toolbar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}>
                        <AppBarCustom></AppBarCustom>
                    </div>
                </Drawer>
            </AppBar>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

/*
 <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}><NavLink to="/">Home</NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/ProductList">PORQUE COADYS</NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/ProductList">GESTION</NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/"></NavLink>PROVEEDORES</MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/"></NavLink>TRABAJO </MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/"></NavLink>SERVICIOS</MenuItem>
                </Menu>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}><NavLink to="/"></NavLink>CONTACTENOS</MenuItem>
                </Menu>


*/
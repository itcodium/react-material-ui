import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styles from './MenuToggle.style';


import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


class MenuToggle extends React.Component {
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
        this.state = { open: false };
    }

    handleToggle = () => {
        this.setState(() => ({
            open: !this.state.open
        }));
    }

    onValidateLink = (event) => {
        if (event.target.getAttribute('value') !== "0") {
            event.preventDefault();
        }
    }

    handleClose = (event) => {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    }
    getArrowIcon = (size, classes) => {
        if (size) {
            return <ArrowForwardIosIcon className={classes.arrowIcon} ></ArrowForwardIosIcon>;
        }
    }

    getIconMenu = (props, classes) => {
        if (props.menu.icon) {
            if (props.menu.items.length <= 1) {
                return <NavLink className={classes.menuLink} to={props.menu.url}>
                    <IconButton
                        className={classes.menuLink}
                        aria-haspopup="true">
                        <AccountCircle />
                    </IconButton>
                </NavLink>
            } else {
                return <IconButton
                    className={classes.menuLink}
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}

                    onClick={this.handleToggle}
                    aria-haspopup="true"
                >
                    <AccountCircle />

                </IconButton>
            }
        } else {
            if (props.menu.items.length) {
                return <Button
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    onClick={this.handleToggle}
                    className={classes.menuButton}
                    aria-haspopup="true"
                >
                    {this.getArrowIcon(props.menu.items.length, classes)}
                    {props.menu.text}
                </Button>
            } else {
                return <MenuItem key={props.menu.text}>
                    <NavLink className={classes.menuLink} to={props.menu.url}>
                        {props.menu.text}
                    </NavLink>
                </MenuItem>
            }
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Toolbar className={classes.toolbarSecondary} >
                <div>
                    {
                        this.getIconMenu(this.props, classes)
                    }
                    <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            {this.props.menu.items.map((subItem, subIndex) => (
                                                <MenuItem key={subItem.text} onClick={this.handleClose}>
                                                    <NavLink className={classes.menuLink} to={subItem.url}>
                                                        {subItem.text}
                                                    </NavLink>
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Toolbar>
        );
    }
}
MenuToggle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuToggle);

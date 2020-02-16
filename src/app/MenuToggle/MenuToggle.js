import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
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
        this.setState(prevState => ({
            open: !prevState.open,
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
    getArrowIcon = (size) => {
        if (size) {
            return <ArrowForwardIosIcon style={ { fontSize: 10 } }></ArrowForwardIosIcon>;
        }
    }

    getIconMenu = (props, classes) => {
        if (props.menu.icon) {
            return <IconButton
                className={ classes.menuLink }
                ref={ (anchor) => { this.anchorRef = anchor } }

                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={ this.handleToggle }
            >
                <AccountCircle />
                <NavLink onClick={ this.onValidateLink } className={ classes.menuLink } to={ props.menu.url }
                    value={ props.menu.items.length }>
                </NavLink>
            </IconButton>
        } else {
            return <Button
                className={ classes.menuLink }
                ref={ (anchor) => { this.anchorRef = anchor } }
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={ this.handleToggle }
            >
                <NavLink onClick={ this.onValidateLink } className={ classes.menuLink } to={ props.menu.url }
                    value={ props.menu.items.length }>
                    { this.getArrowIcon(props.menu.items.length) }
                    { props.menu.text }
                </NavLink>
            </Button>
        }
    }
    render () {
        const { classes } = this.props;
        return (
            <Toolbar className={ classes.toolbarSecondary } >
                {


                    <div>
                        {
                            this.getIconMenu(this.props, classes)
                        }
                        <Popper open={ this.state.open } anchorEl={ this.anchorRef.current } keepMounted transition disablePortal>
                            { ({ TransitionProps, placement }) => (
                                <Grow
                                    { ...TransitionProps }
                                    style={ { transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' } }
                                >
                                    <Paper id="menu-list-grow">
                                        <ClickAwayListener onClickAway={ this.handleClose }>
                                            <MenuList>
                                                { this.props.menu.items.map((subItem, subIndex) => (
                                                    <MenuItem key={ subItem.text } onClick={ this.handleClose }>
                                                        <NavLink className={ classes.menuLink } to={ subItem.url }>
                                                            { subItem.text }
                                                        </NavLink>
                                                    </MenuItem>

                                                )) }
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            ) }
                        </Popper>
                    </div>

                }
            </Toolbar>
        );
    }
}
MenuToggle.propTypes = {

};

export default withStyles(styles)(MenuToggle);
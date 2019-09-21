import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import styles from './MenuToggle.style';


import Button from '@material-ui/core/Button';
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
        if (event.target.getAttribute('value') != "0") {
            event.preventDefault();
        }
    }

    handleClose = (event) => {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    }

    render () {
        const { classes } = this.props;
        return (
            <Toolbar className={ classes.toolbarSecondary } >
                {

                    <div>
                        <Button
                            className={ classes.menuLink }
                            ref={ (anchor) => { this.anchorRef = anchor } }
                            aria-controls="menu-list-grow"
                            aria-haspopup="true"
                            onClick={ this.handleToggle }
                        >
                            <NavLink onClick={ this.onValidateLink } className={ classes.menuLink } to={ this.props.menu.url }
                                value={ this.props.menu.items.length }>
                                { this.props.menu.text }
                            </NavLink>
                        </Button>
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
                                                    <MenuItem onClick={ this.handleClose }>
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
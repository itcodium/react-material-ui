import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";

/*
import { NavLink } from "react-router-dom";


import AplicationText from '../app.text';
*/
import styles from './MenuToggle.style';
/*
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


*/

import Typography from '@material-ui/core/Typography';

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

/*

 <Button
                            ref={ this.anchorRef }
                            to={ item.url }
                            aria-controls="menu-list-grow"
                            aria-haspopup="true"
                            onClick={ this.handleToggle }
                        >
                            { item.text }
                        </Button>




                        <div>
                            <ListItem key={ item.text }>
                                <NavLink className={ classes.menuLink } to={ item.url }>
                                    <Typography className={ classes.menuSubLinkText } > { item.text }</Typography> </NavLink>
                            </ListItem>
                            {
                                item.items.map((sub) => (
                                    <ListItem key={ item.text }>
                                        <NavLink className={ classes.menuSubLink } to={ sub.url }>
                                            <Typography className={ classes.menuSubLinkText } >{ sub.text }</Typography>
                                        </NavLink>
                                    </ListItem>
                                )) }
                        </div>

*/

/*
                { AplicationText.menu.map(item => (
                    <NavLink className={ classes.menuSubLink } to={ item.url }>
                        (T) <Typography className={ classes.menuSubLinkText } variant="button" gutterBottom>{ item.text.toUpperCase() } </Typography>
                    </NavLink>
                )) }*/

export default withStyles(styles)(MenuToggle);
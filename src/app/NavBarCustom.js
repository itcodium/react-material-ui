import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AplicationText from './AplicationText';

import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';

import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from "react-router-dom";

const styles = theme => ({

    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        margin: 0
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {

        justifyContent: 'space-between',
        marginLeft: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,

    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        //marginLeft: -12,
        //marginRight: 20,
    },

    fullList: {
        width: 'auto',
    },
    menuSubLink: {
        marginLeft: theme.spacing.unit * 5,
        color: brown[500],
        textDecoration: 'none',
        fontWeight: '500',

    }
});



class NavBarCustom extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Hidden smDown>
                <Toolbar  >
                    {AplicationText.navBar.map(item => (
                        <NavLink className={classes.menuSubLink} to={item.url}>{item.text}  </NavLink>
                    ))}
                </Toolbar>
            </Hidden>
        );
    }
}
NavBarCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavBarCustom);


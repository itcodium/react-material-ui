import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import AppMenuCustom from './AppMenuCustom';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import AplicationText from './AplicationText';
import { NavLink } from "react-router-dom";
import mainLogo from '../assets/logo_app.png';

const styles = theme => ({
    toolbarMain: {

        margin: 0
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'center',

    },
    menuSubLink: {
        marginLeft: theme.spacing.unit * 3,
        textDecoration: 'none',
        color: red[900],
        fontSize: '12px',
    },
    menuSubLinkText: {
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: "bold"
    }
});

class Header extends React.Component {
    state = {
        anchorEl: null,
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    getLogo = function (align, classes) {
        return <Typography component="h2"
            variant="h5"
            color="inherit"
            align={ align }
            noWrap
            className={ classes.toolbarTitle }>
            <img width='140' alt="" flex='1' align="center" src={ mainLogo }></img>
        </Typography>
    }
    render () {
        const { classes } = this.props;
        return (
            <div>
                <Hidden mdUp>
                    <Drawer open={ this.state.left } onClose={ this.toggleDrawer('left', false) }>
                        <div
                            tabIndex={ 0 }
                            role="button"
                            onClick={ this.toggleDrawer('left', false) }
                            onKeyDown={ this.toggleDrawer('left', false) }>
                            <AppMenuCustom></AppMenuCustom>
                        </div>
                    </Drawer>
                </Hidden>
                <Toolbar className={ classes.toolbarMain }>
                    <Hidden mdUp>
                        { this.getLogo("left", classes) }
                    </Hidden>
                    <Hidden smDown>
                        { this.getLogo("left", classes) }
                        <Toolbar className={ classes.toolbarSecondary } >
                            { AplicationText.navBar.map(item => (
                                <NavLink className={ classes.menuSubLink } to={ item.url }>
                                    <Typography className={ classes.menuSubLinkText } variant="button" gutterBottom>{ item.text.toUpperCase() } </Typography>
                                </NavLink>
                            )) }
                        </Toolbar>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={ this.toggleDrawer('left', true) } color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </div>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);

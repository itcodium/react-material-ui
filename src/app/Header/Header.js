import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import Drawer from '@material-ui/core/Drawer';

import MenuCustom from '../MenuCustom/MenuCustom';

import MenuToggle from '../MenuToggle/MenuToggle';
import AplicationText from '../app.text';

import styles from './header.style';
import mainLogo from '../../assets/logo.png';

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
            <a href="/#">
                <img width='140' alt="" flex='1' align="center" src={ mainLogo }></img></a>
        </Typography>
    }
    render () {
        const { classes } = this.props;
        return (
            <div >
                <Hidden mdUp>
                    <Drawer open={ this.state.left } onClose={ this.toggleDrawer('left', false) }>
                        <div
                            tabIndex={ 0 }
                            role="button"
                            onClick={ this.toggleDrawer('left', false) }
                            onKeyDown={ this.toggleDrawer('left', false) }>
                            {
                                AplicationText.menu.map((item, i) => (
                                    <MenuCustom menu={ item } key={ i }></MenuCustom>
                                ))
                            }
                        </div>
                    </Drawer>
                </Hidden>
                <Toolbar className={ classes.toolbarHeader }>
                    <Hidden mdUp>
                        { this.getLogo("left", classes) }
                    </Hidden>
                    <Hidden smDown>
                        { this.getLogo("left", classes) }
                        {
                            AplicationText.menu.map((item, i) => (
                                <MenuToggle key={ i } menu={ item }></MenuToggle>
                            ))
                        }

                    </Hidden>
                    <Hidden mdUp>
                        <IconButton onClick={ this.toggleDrawer('left', true) } color="inherit" aria-label="MenuCustom">
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

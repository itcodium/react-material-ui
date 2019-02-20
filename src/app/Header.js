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
import AppMenuCustom from './AppMenuCustom';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';

import mainLogo from '../assets/logo_app.png';

const styles = theme => ({

    toolbarMain: {
        borderBottom: `1px solid ${ theme.palette.grey[300] }`,
        margin: 0
    },
    toolbarTitle: {
        flex: 1,
    },
    hide: {
        display: 'none',
    }
});



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

    render () {
        const { classes } = this.props;
        const hide = { display: "none" };
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
                        <Typography component="h2"
                            variant="h5"
                            color="inherit"
                            align="left"
                            noWrap

                            className={ classes.toolbarTitle }>
                         <img width='120' flex='1' align="left" src={ mainLogo }></img>
                        </Typography>

                    </Hidden>
                    <Hidden smDown>
                        <Typography component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap

                            className={ classes.toolbarTitle }>
                            <img width='120' flex='1' align="center" src={ mainLogo }></img>
                        </Typography>

                    </Hidden>

                    <Hidden mdUp>
                        <IconButton onClick={ this.toggleDrawer('left', true) } color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <IconButton style={ hide }>
                        <SearchIcon />
                    </IconButton>
                    <Button style={ hide } variant="outlined" size="small">
                        Sign up
                </Button>
                    <Button color="inherit" style={ hide }>Features</Button>
                </Toolbar>
            </div>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);

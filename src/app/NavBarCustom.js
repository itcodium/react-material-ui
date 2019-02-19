import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AplicationText from './AplicationText';

import grey from '@material-ui/core/colors/grey';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from "react-router-dom";

const styles = theme => ({
    toolbarSecondary: {
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    menuSubLink: {
        marginLeft: theme.spacing.unit * 5,
        textDecoration: 'none',
        color: grey[900],

    }
});
class NavBarCustom extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Hidden smDown>
                <Toolbar variant="dense" className={classes.toolbarSecondary} >
                    {AplicationText.navBar.map(item => (
                        <NavLink button className={classes.menuSubLink} to={item.url}>{item.text}  </NavLink>
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


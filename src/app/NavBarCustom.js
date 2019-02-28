import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AplicationText from './AplicationText';
import { NavLink } from "react-router-dom";


import Typography from '@material-ui/core/Typography';


import Hidden from '@material-ui/core/Hidden';
import styles from '../common/styles';

/*
import grey from '@material-ui/core/colors/grey';
const styles = theme => ({
    toolbarSecondary: {
        justifyContent: 'center',

    },
    menuSubLink: {
        marginLeft: theme.spacing.unit * 5,
        textDecoration: 'none',
        color: grey[900],

    }
});
*/
class NavBarCustom extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Hidden smDown>
                <Toolbar className={classes.toolbarSecondary} >
                    {AplicationText.navBar.map(item => (
                        <NavLink className={classes.menuSubLink} to={item.url}>
                            <Typography>{item.text.toUpperCase()} </Typography>
                        </NavLink>
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

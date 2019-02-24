import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import grey from '@material-ui/core/colors/grey';
import AplicationText from './AplicationText'


import Typography from '@material-ui/core/Typography';

import { NavLink } from "react-router-dom";

const styles = {
    fullList: {
        width: 250,
    },
    menuLink: {
        color: grey[900],
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 0
    },
    menuSubLink: {
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 10
    },
};

class AppMenuCustom extends React.Component {
    render() {
        const { classes } = this.props;
        const productComponents = AplicationText.menu.map((item) => (
            <div >
                <ListItem key={item.text}>
                    <NavLink className={classes.menuLink} to={item.url}>
                        <Typography> {item.text}</Typography> </NavLink>
                </ListItem>
                {item.items.map((sub) => (
                    <ListItem key={item.text}>
                        <NavLink className={classes.menuSubLink} to={sub.url}>
                            <Typography>{sub.text}</Typography>
                        </NavLink>
                    </ListItem>
                ))}
            </div>
        ));
        return (
            <div className={classes.fullList}>
                <List>
                    {productComponents}
                </List>
            </div>
        );
    }
}
AppMenuCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppMenuCustom);
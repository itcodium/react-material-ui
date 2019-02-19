import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import grey from '@material-ui/core/colors/grey';
import AplicationText from './AplicationText'


import { NavLink } from "react-router-dom";

const styles = {
    fullList: {
        width: 'auto',
        width: 250,
    },
    menuLink: {
        color: grey[900],
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: 0,
        paddingLeft: 0
    },
    menuSubLink: {
        color: grey[900],
        textDecoration: 'none',
        margin: 0,
        paddingLeft: 10
    },
};

class AppMenuCustom extends React.Component {
    render() {
        const { classes } = this.props;
        const productComponents = AplicationText.menu.map((item) => (
            <div>
                <ListItem key={item.text}>
                    <NavLink className={classes.menuLink} to={item.url}>{item.text}  </NavLink>
                </ListItem>
                {item.items.map((sub) => (
                    <ListItem key={item.text}>
                        <NavLink className={classes.menuSubLink} to={sub.url}>{sub.text}  </NavLink>
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
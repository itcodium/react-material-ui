import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AplicationText from './AplicationText'
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import styles from '../common/styles';


class AppMenuCustom extends React.Component {
    render() {
        const { classes } = this.props;
        const productComponents = AplicationText.menu.map((item) => (
            <div >
                <ListItem key={item.text}>
                    <NavLink className={classes.menuLink} to={item.url}>
                        <Typography className={classes.menuSubLinkText} > {item.text}</Typography> </NavLink>
                </ListItem>
                {item.items.map((sub) => (
                    <ListItem key={item.text}>
                        <NavLink className={classes.menuSubLink} to={sub.url}>
                            <Typography className={classes.menuSubLinkText} >{sub.text}</Typography>
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
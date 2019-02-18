import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import grey from '@material-ui/core/colors/grey';
import AppBarMenuText from './Menu.seed'



import { NavLink } from "react-router-dom";

const styles = {
    fullList: {
        width: 'auto',
        width: 250,
    },
    menuHeader: {
        backgroundColor: grey[200],
        textDecoration: 'none'
    },
    menuLink: {
        color: grey[900],
        textDecoration: 'none'
    },
};

class AppBarCustom extends React.Component {

    render() {
        const { classes } = this.props;
        const productComponents = AppBarMenuText.map((item) => (
            <ListItem button key={item.text}>
                <ListItemText primary={item.text} />
            </ListItem>
        ));

        const fullList = (
            <div className={classes.fullList}>


                <List>
                    {productComponents}
                    <Divider />
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </div>
        );

        return (
            fullList
        );
    }
}
AppBarCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCustom);



/*

*/
/* 
                            ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from './MessageView.style.js';

class MessageView extends Component {
    handleClick = (index) => {
        window.store.dispatch({
            type: 'DELETE_MESSAGE',
            index: index,
        });
    };
    render() {
        const { classes } = this.props;

        const messages = this.props.messages.map((message, index) => (
            <ListItem key={index} className={classes.listItem} alignItems="flex-start">
                <ListItemText primary={message} />
                <ListItemSecondaryAction >
                    <IconButton edge="end" aria-label="add" size="small" onClick={() => this.handleClick(index)} >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));
        return (
            <List>
                {messages}
            </List>
        );
    }
}

export default withStyles(styles)(MessageView);
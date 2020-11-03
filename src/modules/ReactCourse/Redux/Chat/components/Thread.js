import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MessageInput from './MessageInput';
import { withStyles } from '@material-ui/core/styles';
import styles from './Thread.style.js';

class Thread extends Component {
    state = {
        value: null
    }
    handleClick = (index) => {
        window.store.dispatch({
            type: 'DELETE_MESSAGE',
            id: index,
        });
    };
    componentDidMount() {
        window.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const { classes } = this.props;
        let messages = [];
        let id = null;
        if (this.props.thread) {
            id = this.props.thread.id;
            messages = this.props.thread.messages.map((message, index) => (
                <ListItem key={index} className={classes.listItem} alignItems="flex-start">
                    <ListItemText primary={message.text}
                        secondary={message.timestamp} />
                    <ListItemSecondaryAction >
                        <IconButton edge="end" aria-label="add" size="small" onClick={() => this.handleClick(message.id)} >
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ));
        }
        return (
            <Container component="main" maxWidth="sm">
                <MessageInput threadId={id} />
                <List>
                    {messages}
                </List>
            </Container>
        )
    }
}
export default withStyles(styles)(Thread);
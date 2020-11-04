import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './TextFieldSubmit.style.js';
import AddIcon from '@material-ui/icons/Add';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

class TextFieldSubmit extends Component {
    state = {
        value: '',
    };
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };
    handleSubmit = () => {
        console.log("this.props", this.props)
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };
    render() {
        const { classes } = this.props;
        return (
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Add Message"
                    onChange={this.onChange}
                    value={this.state.value}
                    inputProps={{ 'aria-label': 'Add Message' }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton onClick={this.handleSubmit} color="primary" className={classes.iconButton} aria-label="directions">
                    <AddIcon />
                </IconButton>
            </Paper>
        )
    }
}

export default withStyles(styles)(TextFieldSubmit);

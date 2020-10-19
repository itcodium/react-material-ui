
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TimerForm from '../EditableTimerList/EditableTimer/TimerForm/TimerForm';
import styles from './ToggleableTimerForm.style.js';

class ToggleableTimerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleFormOpen = this.handleFormOpen.bind(this);
    }
    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };
    handleFormClose = () => {
        this.setState({ isOpen: false });
    };
    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };
    render() {
        const { classes } = this.props;
        if (this.state.isOpen) {
            return (
                <TimerForm onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose} />
            );
        } else {
            return (
                <div className={classes.actions}>
                    <Button
                        variant="outlined"
                        size="large"
                        className={classes.button}
                        onClick={this.handleFormOpen}
                        startIcon={<AddIcon />}
                    >Add</Button>
                </div>
            );
        }
    }
}

export default withStyles(styles)(ToggleableTimerForm);



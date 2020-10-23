import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Timer from './Timer/Timer';
import TimerForm from './TimerForm/TimerForm';
import styles from './EditableTimer.style.js';

class EditableTimer extends React.Component {
    state = {
        editFormOpen: false,
    };
    handleEditClick = () => {
        this.openForm();
    };
    handleFormClose = () => {
        this.closeForm();
    };
    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };
    closeForm = () => {
        this.setState({ editFormOpen: false });
    };
    openForm = () => {
        this.setState({ editFormOpen: true });
    };
    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose} />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onTrashClick={this.props.onTrashClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                    onEditClick={this.handleEditClick} />
            );
        }
    }
}

export default withStyles(styles)(EditableTimer);



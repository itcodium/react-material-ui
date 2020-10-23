
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EditableTimer from './EditableTimer/EditableTimer';
import styles from './EditableTimerList.style.js';

class EditableTimerList extends React.Component {
    componentDidMount() {
    }
    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer._id}
                id={timer._id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));

        return (
            <div id='timers'>
                {timers}
            </div>
        )
    }
}

export default withStyles(styles)(EditableTimerList);



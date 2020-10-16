
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimersDashboard.style.js';
import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'


class TimersDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className='ui three column centered grid'>
                1. TimersDashboard <br></br>
                <div className='column'>
                <EditableTimerList />
                <ToggleableTimerForm
                isOpen={true}
                />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(TimersDashboard);
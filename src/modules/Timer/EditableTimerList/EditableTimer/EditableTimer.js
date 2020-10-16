import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import  Timer from './Timer/Timer';
import TimerForm  from './TimerForm/TimerForm';
import styles from './EditableTimer.style.js';

class EditableTimer extends React.Component {
    render() {
       // const { classes } = this.props;
        if (this.props.editFormOpen) {
            return (
                     <TimerForm
                    title={this.props.title}
                    project={this.props.project} />
            );
        } else {
            return (
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince} />
            );
        }
    }
}

export default withStyles(styles)(EditableTimer);


 
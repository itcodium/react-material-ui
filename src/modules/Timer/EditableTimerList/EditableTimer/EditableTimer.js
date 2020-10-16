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
                <div>
                     3. EditableTimer<br></br>
                     <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
                </div>
             
            );
        } else {
            return (
                <div>
                     3. EditableTimer<br></br> 
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
                 </div>
            );
        }
    }
}

export default withStyles(styles)(EditableTimer);


 

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import  TimerForm  from '../EditableTimerList/EditableTimer/TimerForm/TimerForm';
import styles from './ToggleableTimerForm.style.js';

class ToggleableTimerForm extends React.Component {
    render() {
        // const { classes } = this.props;
        if (this.props.isOpen) {
            return (
                    <TimerForm />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                      2. ToggleableTimerForm (else)<br></br>
                    <button className='ui basic button icon'>
                        <i className='plus icon' />
                    </button>
                </div>
            );
        }
    }
}

export default withStyles(styles)(ToggleableTimerForm);



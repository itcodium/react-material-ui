
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import  EditableTimer from './EditableTimer/EditableTimer';
import styles from './EditableTimerList.style.js';

class EditableTimerList extends React.Component {
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;
        return (
            <div id='timers'>
                2. EditableTimerList<br></br>
                <EditableTimer
                title='Learn React'
                project='Web Domination'
                elapsed='8986300'
                runningSince={null}
                editFormOpen={false}
                />
                <EditableTimer
                title='Learn extreme ironing'
                project='World Domination'
                elapsed='3890985'
                runningSince={null}
                editFormOpen={true}
                />
            </div>
        )
    }
}

export default withStyles(styles)(EditableTimerList);


 
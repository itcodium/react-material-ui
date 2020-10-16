
import React from 'react';
 
import { withStyles } from '@material-ui/core/styles';
import  TimersDashboard  from '../Timer/TimersDashboard';

import styles from './TimerLogging.style.js';

class TimeLogging extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
              <TimersDashboard/>
            </div>
        );
    }
}
export default withStyles(styles)(TimeLogging);

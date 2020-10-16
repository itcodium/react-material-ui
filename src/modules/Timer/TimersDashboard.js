
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimersDashboard.style.js';
import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
class TimersDashboard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant="h2" component="h4">
                    Timers Dashboard
                </Typography>
                <Container component="main" maxWidth="xs">
                    <EditableTimerList  />
                    <ToggleableTimerForm 
                        isOpen={true}
                    />
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(TimersDashboard);
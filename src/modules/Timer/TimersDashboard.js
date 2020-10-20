
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimersDashboard.style.js';
import ClientService from './helpers/timers';
import helpers from './helpers/helper';

import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
class TimersDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.timerService = new ClientService();
        this.timerService.getAll(this.initTimers);
        this.state = {
            timers: [],
        };
    }

    initTimers = (timers) => {
        this.setState({
            timers: timers,
        });
    }
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };
    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };
    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };
    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    };
    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    };
    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };
    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };
    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };
    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant="h2" component="h4">
                    Timers Dashboard
                </Typography>
                <Container component="main" maxWidth="xs">
                    <EditableTimerList timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(TimersDashboard);
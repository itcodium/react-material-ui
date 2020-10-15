
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './index.style.js';

class TimeLogging extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}  >
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Timers Logging
                </Typography>

            </div>
        )
    }
}

export default withStyles(styles)(TimeLogging);

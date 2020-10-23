
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './ReactCourse.style.js';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
class ReactCourse extends React.Component {
    //constructor(props) {super(props);    }
    componentDidMount() {
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant="h2" component="h4">
                    Timers Dashboard
                </Typography>
                <Container component="main" maxWidth="xs">
                    
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(ReactCourse);
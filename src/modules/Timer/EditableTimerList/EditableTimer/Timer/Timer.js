import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Timer.style.js';
import helpers from '../../../helpers/helper';
// http://maury91.github.io/reactstudyApp2/file/src/components/Timer.js.html#lineNumber8flex
class Timer extends React.Component {
    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };
    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    };
    render() {
        const { classes } = this.props;
        const elapsedString = helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );
        return (
            <Card className={classes.card} >
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.props.project}
                    </Typography>
                    <Typography className={classes.timer} component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                        {elapsedString}
                    </Typography>
                    <div className={classes.edition}  >
                        <IconButton aria-label="previous" onClick={this.props.onEditClick}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="next" onClick={this.handleTrashClick}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardContent>
                <CardActions className={classes.actions} >
                    <Button variant="contained" color={this.props.runningSince ? "secondary" : "primary"}
                        onClick={ this.props.runningSince ? this.handleStopClick : this.handleStartClick }>
                        {this.props.runningSince ? "Stop" : "Start"}
                    </Button>
                    
                </CardActions>
            </Card>
        );
    }
}
// timerIsRunning={!!this.props.runningSince} 
export default withStyles(styles)(Timer);
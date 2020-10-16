import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimerForm.style.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class TimerForm extends React.Component {
    render() {
         const { classes } = this.props;
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <Card className={classes.card} >
                 <form className={classes.form} noValidate>
                  <CardContent>
                 
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                autoComplete="title"
                                defaultValue={this.props.title} 
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="project"
                                label="Project"
                                name="project"
                                autoComplete="project"
                                defaultValue={this.props.project} 
                                autoFocus
                            />
                    </CardContent>
                    <CardActions className={classes.actions} >
                    <Button variant="contained" color="primary">
                        {submitText}
                    </Button>
                    <Button variant="contained" color="secondary">
                         Cancel
                    </Button>
                </CardActions>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(TimerForm);
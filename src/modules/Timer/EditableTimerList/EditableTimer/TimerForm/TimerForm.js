import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TimerForm.style.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class TimerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || '',
            project: this.props.project || ''
        };
    }
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }
    handleProjectChange = (e) => {
        this.setState({ project: e.target.value });
    }
    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    };
    render() {
        const { classes } = this.props;
        const submitText = this.props.id ? 'Update' : 'Create';
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
                            defaultValue={this.state.title}
                            onChange={this.handleTitleChange}
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
                            defaultValue={this.state.project}
                            onChange={this.handleProjectChange}
                        />
                    </CardContent>
                    <CardActions className={classes.actions} >
                        <Button onClick={this.handleSubmit} variant="contained" color="primary">
                            {submitText}
                        </Button>
                        <Button onClick={this.props.onFormClose} variant="contained" color="secondary">
                            Cancel
                    </Button>
                    </CardActions>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(TimerForm);
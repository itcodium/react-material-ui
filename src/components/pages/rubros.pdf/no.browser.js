

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
    },
});
class NoBrowser extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <Paper className={ classes.root } >
                <Grid container justify="center" >
                    <Typography variant="h5" component="h3">
                        Este browser no soporta pdfs. Por favor decargar archivo.
                    </Typography>
                </Grid>
                <br></br>
                <Grid container justify="center" >
                    <Button variant="outlined" href={ this.props.href } target="_blank" color="primary" >
                        Download
                    </Button>
                </Grid>
            </Paper>

        );
    }
}
NoBrowser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoBrowser);

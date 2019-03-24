
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles2 = theme => ({
    container: {
        marginTop: "50px"
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${ theme.spacing.unit * 8 }px 0 ${ theme.spacing.unit * 6 }px`,
    },


});
class EnConstruccion extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Paper className={ classes.container } elevation={ 1 } >

                <div className={ classes.heroUnit } spacing={ 40 } >
                    <div className={ classes.heroContent }>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            En Construcción
                        </Typography>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default (withStyles(styles2)(EnConstruccion))

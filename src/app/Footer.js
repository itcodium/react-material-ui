import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AplicationText from './AplicationText'
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import styles from '../common/styles';

/*
const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${ theme.palette.divider }`,
        padding: `${ theme.spacing.unit * 6 }px 0`,
    },
});

*/
class Footer extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {AplicationText.footers.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                <Typography key={item} variant="subtitle1" color="textSecondary">
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </BottomNavigation>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);

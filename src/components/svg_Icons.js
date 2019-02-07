import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    icon: {
        margin: theme.spacing.unit * 2,
    }
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <HomeIcon className={classes.icon} color="secondary" />
            <HomeIcon className={classes.icon} color="error" />
            <HomeIcon className={classes.icon} color="disabled" fontSize="large" />
        </div>
    );
}
SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SvgIcons);

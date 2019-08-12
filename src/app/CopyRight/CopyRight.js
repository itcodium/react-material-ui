import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import compose from 'recompose/compose';

class CopyRight extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                { 'Copyright © ' }
                <Link color="inherit" href="https://google.com/">
                    Your Website
            </Link>{ ' ' }
                { new Date().getFullYear() }
                { '. Built with ' }
                <Link color="inherit" href="https://google.com/">
                    app ok.
            </Link>
            </Typography>
        );
    }
}

CopyRight.propTypes = {
    classes: PropTypes.object.isRequired
};

export default CopyRight;
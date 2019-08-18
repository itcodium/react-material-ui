import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
/*
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
*/
class CopyRight extends React.Component {
    render () {
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

export default CopyRight;
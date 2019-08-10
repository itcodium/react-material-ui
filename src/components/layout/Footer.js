import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import styles from '../../styles/styles';

import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

import compose from 'recompose/compose';

function Copyright () {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{ ' ' }
            { new Date().getFullYear() }
            { '. Built with ' }
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI.
        </Link>
        </Typography>
    );
}

const useStyles = makeStyles({
    ul: {
        margin: 0,
        padding: 0,
    },
    li: {
        listStyle: 'none',
    },
    link: {
        margin: 0,
    }
});

function getAlign (width) {
    if (width == "xs") {
        return "center"
    } else {
        return "left"
    }
}

function SiteFooterLink (prop) {
    const social = ['GitHub', 'Twitter', 'Facebook'];
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h7" gutterBottom>
                { prop.title }
            </Typography>
            <ul className={ classes.ul } >
                { social.map(url => (
                    <li className={ classes.li } key={ url }>
                        <Link href="#" variant="body1" color="textSecondary">
                            { url }
                        </Link>
                    </li>
                )) }
            </ul>
        </div>
    )
}

class Footer extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render () {
        const { classes } = this.props;
        const { width } = this.props;
        return (
            <footer className={ classes.container }>
                <Grid container className={ classes.footer }>
                    <Grid item xs={ 12 } md={ 6 } className={ classes.p5 }>
                        <Typography variant="h7" align={ getAlign(width) } gutterBottom>
                            FOOTER CONTENT
                        </Typography>
                        <Typography align={ getAlign(width) }>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>

                        <Grid container>
                            <Grid item xs={ 12 } md={ 6 } align="center" className={ classes.p5 }>
                                <SiteFooterLink title={ "Link 1" }></SiteFooterLink>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } align="center" className={ classes.p5 }>
                                <SiteFooterLink title={ "Link 2" }></SiteFooterLink>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid container align="center">
                        <Grid item xs={ 12 }>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Grid>

            </footer>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};


export default compose(
    withStyles(styles),
    withWidth(),
)(Footer);


/*
<BottomNavigation
            value={ value }
            onChange={ this.handleChange }
            showLabels
            className={ classNames(classes.footer, classes.container) }>
            <Grid container spacing={ 0 } justify="space-evenly">
                { AplicationText.footers.map(footer => (
                    <Grid item xs key={ footer.title }>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            { footer.title }
                        </Typography>
                        { footer.description.map(item => (
                            <Typography key={ item } variant="subtitle1" color="textSecondary">
                                { item }
                            </Typography>
                        )) }
                    </Grid>
                )) }
            </Grid>
        </BottomNavigation>
        */

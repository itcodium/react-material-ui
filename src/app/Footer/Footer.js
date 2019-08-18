import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import mainLogo from '../../assets/logo.png';
import CopyRight from '../CopyRight/CopyRight.js';
import FooterSiteLink from '../FooterSiteLink/FooterSiteLink.js';
import styles from './Footer.style.js';


function getAlign (width) {
    if (width === "xs" || width === "sm") {
        return "center"
    } else {
        return "left"
    }
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
            <footer>
                <Grid container className={ classes.footer }>
                    <Grid item xs={ 12 } md={ 2 } align={ getAlign(width) } className={ classes.p5 }>
                        <a href="/#">
                            <img width='140' alt="" flex='1' src={ mainLogo }></img></a>
                    </Grid>

                    <Grid item xs={ 12 } md={ 5 } className={ classes.p5 }>
                        <Typography variant="h6" align={ getAlign(width) } gutterBottom>
                            FOOTER CONTENT
                        </Typography>
                        <Typography align={ getAlign(width) }>
                            Here you can use rows and columns here to organize your footer
                            content.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 5 }>
                        <Grid container>
                            <Grid item xs={ 12 } md={ 6 } align="center" className={ classes.p5 }>
                                <FooterSiteLink styles={ classes } title={ "Link 1" } ></FooterSiteLink>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } align="center" className={ classes.p5 }>
                                <FooterSiteLink styles={ classes } title={ "Link 2" } spacing={ 2 }></FooterSiteLink>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container align="center">
                        <Grid item xs={ 12 }>
                            <CopyRight />
                        </Grid>
                    </Grid>
                </Grid>
            </footer >
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
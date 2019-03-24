import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Link from '@material-ui/core/Link';
import styles from '../../styles/styles';


class Footer extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render () {
        const { classes } = this.props;
        return (
            <footer className={ classes.container }>

                <Grid container className={ classes.footer }>
                    <Grid item align="center" xs={ 12 } md={ 6 } className={ classes.p5 }>

                        <Typography variant="caption" align="center" color="textSecondary" component="p">
                            <p>ventas@coadys.com.mx</p>
                            01 (33)3632 6259 <br></br>
                            01 (33)2833 4939
                        </Typography>
                    </Grid>
                    <Grid item align="center" xs={ 12 } md={ 6 } className={ classes.p5 }>

                        <Typography variant="caption" align="center" color="textSecondary" component="p">
                            @2019 Coadys Powered By <br />
                            <Link variant="caption"
                                size="small" color="primary"
                                target="_blank"
                                href="http://www.google.com">
                                Copyright © it.com.ar</Link>
                        </Typography>
                    </Grid>

                </Grid>



            </footer>
        );
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);


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

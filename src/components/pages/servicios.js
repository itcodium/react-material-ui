
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import HexagonalGrid from '../grid/hexagonal'
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Magazine from '../magazine/magazine';
/*
import Paper from '@material-ui/core/Paper';
import EnConstruccion from './en.construccion';
*/

class Servicios extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={ classNames(classes.layout) } >
                    <Grid hidden item xs={ 12 } md={ 6 } className={ classNames() } >
                        <Typography className={ classNames(classes.titleBar) } component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                            ...
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 12 } >
                        <HexagonalGrid></HexagonalGrid>
                    </Grid>

                </Grid>
                <br></br>
                <Grid container className={ classNames(classes.container) } >
                    <Grid item xs={ 12 } md={ 12 } >
                        <Magazine></Magazine>
                    </Grid>
                </Grid>
            </div>


        );
    }
}

export default (withStyles(styles)(Servicios))

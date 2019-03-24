import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';


import Markdown from '../Markdown';
import blog1 from './index.txt';

import styles from '../../../styles/styles';
import Rubro from './index.rubro'
import Slider from '../../slider/slider'
import slides from './slider.data.js'
import rubros from './rubros.data.js'



const posts = [blog1]

class QuienesSomos extends React.Component {

    render () {
        const { classes } = this.props;
        const mark = posts.map(post => (
            <Markdown className={ classes.markdown } key={ post.substring(0, 40) }>
                { post }
            </Markdown>
        ))

        const rubros_list_lg = rubros.map(tier => (
            // xs={ 3 }
            <Grid item xl={ 6 } lg={ 6 } md={ 6 } sm={ 6 }>
                <Rubro item={ tier }></Rubro>
                <br></br>
            </Grid>
        ))
        const rubros_list = rubros.map(tier => (
            // lg={ 6 }
            <Grid item xs={ 12 } sm={ 12 } >
                <Rubro item={ tier }></Rubro>
                <br></br>
            </Grid>
        ))


        return (
            <div className={ classes.layout }>
                <Slider slides={ slides } />
                <div className={ classes.container }>
                    { mark }
                    <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>
                    <br></br>
                    <Hidden only={ ['xl', 'lg', 'md'] }>
                        <Grid container spacing={ 0 } >
                            { rubros_list }
                        </Grid>
                    </Hidden>

                    <Hidden only={ ['xs', 'sm'] }>
                        <Grid container spacing={ 40 } >
                            { rubros_list_lg }
                        </Grid>
                    </Hidden>
                </div>
            </div>
        );
    }
}
export default (withStyles(styles)(QuienesSomos))

/*
title={ tier.title } description={ tier.description } image={ tier.image }
*/
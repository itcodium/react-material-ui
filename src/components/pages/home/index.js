import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';





import styles from '../../../styles/styles';
import Rubro from './index.rubro'
import Slider from '../../slider/slider'
import slides from './slider.data.js'
import rubros from './rubros.data.js'

// import blog1 from './index.txt';
// import Markdown from '../Markdown';
// const posts = [blog1]

class Index extends React.Component {

    render () {
        const { classes } = this.props;
        /*
        const mark = posts.map(post => (
            <Markdown className={ classes.markdown } key={ post.substring(0, 40) }>
                { post }
            </Markdown>
        ))
        */
        const rubros_list_lg = rubros.map((tier, index) => (
            <Grid key={ index } item xl={ 6 } lg={ 6 } md={ 6 } sm={ 6 }>
                <Rubro item={ tier }></Rubro>
                <br></br>
            </Grid>
        ))
        const rubros_list = rubros.map((tier, index) => (
            <Grid key={ index } item xs={ 12 } sm={ 12 } >
                <Rubro item={ tier }></Rubro>
                <br></br>
            </Grid>
        ))
        return (
            <div >
                <Slider slides={ slides } />
                <br></br>
                <div className={ classes.container }  >
                    <br></br>
                    <Typography variant="h4" gutterBottom>Catalogo de productos</Typography>
                    <br></br>
                    <br></br>
                    <Hidden only={ ['xl', 'lg', 'md', 'sm'] }>
                        <Grid container spacing={ 0 } >
                            { rubros_list }
                        </Grid>
                    </Hidden>

                    <Hidden only={ ['xs'] }>
                        <Grid container spacing={ 40 } >
                            { rubros_list_lg }
                        </Grid>
                    </Hidden>
                </div>
            </div>
        );
    }
}
export default (withStyles(styles)(Index))

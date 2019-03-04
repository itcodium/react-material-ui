import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Markdown from './Markdown';
import blog1 from './content/quienes_somos.txt';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import tileData from './data/tileData'

import styles from '../../common/styles';
import CustomCard from '../../common/custom_card';


const tiers = [
    {
        title: 'Free',
        price: '0',
        image: "/static/cards/card1.jpg",
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        image: "/static/cards/card2.jpg",
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        image: "/static/cards/card3.jpg",
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];
const posts = [blog1]

class QuienesSomos extends React.Component {

    render () {
        const { classes } = this.props;
        const mark = posts.map(post => (
            <Markdown className={ classes.markdown } key={ post.substring(0, 40) }>
                { post }
            </Markdown>
        ))
        return (
            <div>

                <GridList cellHeight={ 200 } spacing={ 1 } className={ classes.gridList }>
                    { tileData.map(tile => (
                        <GridListTile key={ tile.img } cols={ tile.featured ? 2 : 1 } rows={ tile.featured ? 2 : 1 }>
                            <img src={ tile.img } alt={ tile.title } />

                        </GridListTile>
                    )) }
                </GridList>
                <br></br>

                { mark }
                <Grid container spacing={ 40 } alignItems="flex-end">
                    { tiers.map(tier => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item xs={ 12 } sm={ tier.title === 'Enterprise' ? 12 : 6 } md={ 4 }>
                            <CustomCard title={ tier.title } description={ tier.description } image={ tier.image } ></CustomCard>
                        </Grid>
                    )) }
                </Grid>



            </div>
        );
    }
}

export default (withStyles(styles)(QuienesSomos))

/*
                            <GridListTileBar
                                title={ tile.title }
                                titlePosition="bottom"
                                actionIcon={
                                    <IconButton className={ classes.icon }>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={ classes.titleBar }
                            />
                            */
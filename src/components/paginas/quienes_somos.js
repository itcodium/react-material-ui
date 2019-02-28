import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Markdown from './Markdown';
import blog1 from './content/quienes_somos.txt';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './data/tileData'

import styles from '../../common/styles';


const posts = [blog1]

class QuienesSomos extends React.Component {

    render() {
        const { classes } = this.props;
        const mark = posts.map(post => (
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
            </Markdown>
        ))
        return (
            <div>
                <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="top"
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={classes.titleBar}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                {mark}
            </div>
        );
    }
}

export default (withStyles(styles)(QuienesSomos))

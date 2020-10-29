import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
const styles = {
    card: {
    },
    media: {
        objectFit: 'cover',
    },
};

class Rubro extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={ classes.media }
                        height="140"
                        image={ this.props.item.image }
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { this.props.item.title }
                        </Typography>
                        <Typography component="p">
                            { this.props.item.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions  >
                    <Grid container justify="center" >
                        <Button variant="outlined" href={ this.props.item.link } target="_blank" color="primary" >
                            { this.props.item.buttonText }
                        </Button>
                    </Grid>
                </CardActions>

            </Card>
        );
    }
}

Rubro.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rubro);
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
const styles = {
    card: {
        maxWidth: 'auto',
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

class CustomCard extends React.Component {
    id = null;
    constructor(props) {
        super(props);
    }
    handleClick = () => {

    };
    render () {
        const { classes } = this.props;
        return (
            <div><br></br>
                <Card className={ classes.card }>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={ classes.media }
                            height="140"
                            image={ this.props.image }
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { this.props.title }
                            </Typography>
                            <Typography component="p">
                                { this.props.description }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
              </Button>
                        <Button size="small" color="primary">
                            Learn More
              </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

CustomCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);
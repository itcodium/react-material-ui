import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from './Product.style.js';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote = () => (
        this.props.onVote(this.props.id)
    );

    render() {
        const { classes } = this.props;
        return (
            <ListItem  className={classes.listItem} alignItems="flex-start">
                <Link href={this.props.url} variant="body1" color="textSecondary">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={this.props.productImageUrl} />
                    </ListItemAvatar>
                </Link>
                <ListItemText
                    primary={this.props.title + " (" + this.props.votes + ")"}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {this.props.user}
                            </Typography>
                            {' - '} {this.props.description}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction onClick={this.handleUpVote}>
                    <IconButton edge="end" aria-label="add" size="small" >
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default withStyles(styles)(Product);
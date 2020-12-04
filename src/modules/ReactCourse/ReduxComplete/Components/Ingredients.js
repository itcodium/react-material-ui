import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const Ingredients = (props) => {
    if (props.state.loading) {
        return <CircularProgress />
    }
    if (props.state.error) {
        return <Typography className={props.classes.red} variant="h6" component="h2">
            Error al obtener el listado de Ingredients.
      </Typography>
    }
    if (props.state.recipes.length) {
        return <List className={props.classes.root}>
            {props.state.recipes.map((recipe, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={recipe.name} secondary={recipe.quantity} />
                </ListItem>
            ))}
        </List>
    }
    return null
};

export default Ingredients;
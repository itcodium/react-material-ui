import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './ReduxComplete.style';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import recipes from './RecipeBook/Actions/Recipes';
import store from './RecipeBook/Store'


class ReduxComplete extends React.Component {
    state = { recipes: [] };
    static timeConvert = () => {
        var num = new Date();
        var hours = num.getHours();
        var minutes = num.getMinutes();
        var seconds = num.getSeconds();
        return hours + ":" + minutes + ":" + seconds;
    }

    updateUI = () => {
        const { db } = store.getState();
        console.log('db: ', db.recipes);
        this.setState({
            recipes: db.recipes,
            error: recipes.error,
            loading: recipes.loading
        });
    }

    componentDidMount() {
        store.subscribe(this.updateUI);
        store.dispatch(recipes.get())
    }

    addRecipe() {
        store.dispatch(recipes.add({
            name: 'Pancake ' + ReduxComplete.timeConvert(),
            description: 'test'
        }));
    }

    setRecipes = (classes) => {
        if (this.state.loading) {
            return <CircularProgress />
        }
        if (this.state.error) {
            return <Typography className={classes.red} variant="h6" component="h2">
                Error al obtener el listado.
          </Typography>
        }
        if (this.state.recipes.length) {
            return <List className={classes.root}>
                {this.state.recipes.map((recipe, index) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={recipe.name} secondary={recipe.description} />
                    </ListItem>
                ))}
            </List>
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h4" component="h4">The Complete Redux Book</Typography>
                <br></br>
                <Button variant="contained" onClick={this.addRecipe} >Add Recipe</Button>
                <Container component="main" maxWidth="xs">
                    {this.setRecipes(classes)}
                </Container>
            </div >
        );
    }
}

export default withStyles(styles)(ReduxComplete);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './ReduxComplete.style';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import recipesAction from './RecipeBook/Actions/Recipes';
import store from './RecipeBook/Store'

import Recipes from './Components/Recipes'

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
        const { Recipes } = store.getState();
        this.setState({
            recipes: Recipes.recipes,
            error: Recipes.error,
            loading: Recipes.loading
        });
    }

    componentDidMount() {
        store.subscribe(this.updateUI);
        store.dispatch(recipesAction.get())
    }

    addRecipe() {
        store.dispatch(recipesAction.add({
            name: 'Pancake ' + ReduxComplete.timeConvert(),
            description: 'test'
        }));
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h4" component="h4">The Complete Redux Book</Typography>
                <br></br>
                <Button variant="contained" onClick={this.addRecipe} >Add Recipe</Button>
                <Container component="main" maxWidth="xs">
                    <Recipes state={this.state} classes={classes}></Recipes>
                </Container>
            </div >
        );
    }
}

export default withStyles(styles)(ReduxComplete);
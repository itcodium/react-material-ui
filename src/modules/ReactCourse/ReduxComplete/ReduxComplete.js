import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Types from './RecipeBook/Types';


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
    fetchRecipes = () => ({
        type: Types.API,
        payload: {
            url: './static/data/db3.json',
            success: Types.FETCH_RECIPES_SUCCEESS, // FETCH_RECIPES  SET_RECIPES
            pending: Types.FETCH_RECIPES_PENDING,
            error: Types.FETCH_RECIPES_FAILURE
        }
    })
    componentDidMount() {
        store.subscribe(this.updateUI);
        store.dispatch(this.fetchRecipes());
    }

    addRecipe() {
        store.dispatch({ type: 'ADD_RECIPE', name: 'Pancake ' + ReduxComplete.timeConvert() });
    }

    updateUI = () => {
        console.log('store.getState(): ', store.getState());
        const recipes = store.getState();
        this.setState({ recipes: recipes });

    };

    setRecipes = () => {
        console.log('this.state: ', this.state);
        if (this.state.recipes.recipes && this.state.recipes.recipes.loading) {

            return <h2>LOADING</h2>
        }
        if (this.state.recipes.recipes && this.state.recipes.recipes.error) {
            return <h2>ERROR</h2>
        }
        if (this.state.recipes.recipes && this.state.recipes.recipes.length) {
            return <ul>
                {this.state.recipes.recipes.map((recipe, index) => (
                    <p key={index}>{recipe.name}</p>
                ))}
            </ul>
        }
        return <ul></ul>
    }
    render() {
        return (
            <div>
                <Typography variant="h4" component="h4">Chat</Typography>
                <Button variant="contained" onClick={this.addRecipe} >Add Recipe</Button>
                <Container component="main" maxWidth="xs">
                    {this.setRecipes()}
                </Container>
            </div >
        );
    }
}

export default ReduxComplete;
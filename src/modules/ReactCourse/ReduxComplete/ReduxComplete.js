import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

    componentDidMount() {
        store.subscribe(this.updateUI);
        store.dispatch({ type: 'FETCH_RECIPES' });
    }

    addRecipe() {
        store.dispatch({ type: 'ADD_RECIPE', name: 'Pancake ' + ReduxComplete.timeConvert() });
    }

    updateUI = () => {
        const { recipes } = store.getState();
        this.setState({ recipes: recipes.recipes });
    };

    setRecipes = () => {
        if (this.state.recipes.length) {
            return <ul>
                {this.state.recipes.map((recipe, index) => (
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
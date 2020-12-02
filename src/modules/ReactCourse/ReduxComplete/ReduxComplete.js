import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Types from './RecipeBook/Types';
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
        const { recipes } = store.getState();
        this.setState({
            recipes: recipes.recipes,
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

    setRecipes = () => {
        if (this.state.loading) {
            return <CircularProgress />
        }
        if (this.state.error) {
            return <h2>ERROR</h2>
        }
        if (this.state.recipes.length) {
            return <ul>
                {this.state.recipes.map((recipe, index) => (
                    <p key={index}>{recipe.name} - {recipe.description}</p>
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
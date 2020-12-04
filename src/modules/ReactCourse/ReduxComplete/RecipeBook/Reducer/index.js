import { combineReducers } from 'redux'
import Ingredients from './Ingredients';
import Recipes from './Recipes';

const reducerRoot = combineReducers({
    Ingredients,
    Recipes
});

export default reducerRoot;
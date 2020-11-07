import Types from './Types'
import { combineReducers } from 'redux'
function recipesReducer(state = { recipes: [], ingredients: [] }, action) {
    switch (action.type) {
        case Types.ADD_RECIPE: {
            console.log('action: ', action);
            return Object.assign({}, state, {
                recipes: state.recipes.concat({ name: action.name })

            });
        }
        case Types.SET_RECIPES: {
            const newIngredient = {
                name: action.name,
                recipe: action.recipe,
                quantity: action.quantity
            };
            return Object.assign({}, state, {
                ingredients: state.ingredients.concat(newIngredient)
            });
        }
        case Types.FETCH_RECIPES: {
            return state;
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    recipes: recipesReducer
});

export default rootReducer;
import Types from './Types'
import { combineReducers } from 'redux'
function recipesReducer(state = { recipes: [], ingredients: [] }, action) {
    switch (action.type) {
        case Types.ADD_RECIPE: {
            return Object.assign({}, state, {
                recipes: state.recipes.concat({ name: action.name })

            });
        }
        case Types.SET_RECIPES: {
            return action.payload;
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
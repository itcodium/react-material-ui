import Types from './Types'
import { combineReducers } from 'redux'

function recipesReducer(state = { recipes: [], ingredients: [] }, action) {
    switch (action.type) {
        case Types.PENDING: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case Types.SUCCESS: {
            return action.payload;
        }
        case Types.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload

            });
        }
        case Types.RECIPES_ADD: {
            return Object.assign({}, state, {
                recipes: state.recipes.concat({ name: action.name })

            });
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
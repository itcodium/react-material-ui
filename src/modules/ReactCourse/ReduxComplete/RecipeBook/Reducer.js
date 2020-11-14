import Types from './Types'
import { combineReducers } from 'redux'
function recipesReducer(state = { recipes: [], ingredients: [] }, action) {
    switch (action.type) {
        case Types.ADD_RECIPE: {
            return Object.assign({}, state, {
                recipes: state.recipes.concat({ name: action.name })

            });
        }
        /* case Types.SET_RECIPES: {
             console.log('action: ', action);
             return action.payload;
 
         }*/
        case Types.FETCH_RECIPES: {
            return state;
        }


        case Types.FETCH_RECIPES_SUCCEESS: {
            console.log('FETCH_RECIPES_SUCCEESS: ', action);
            return action.payload;
        }
        case Types.FETCH_RECIPES_PENDING: {
            console.log('FETCH_RECIPES_PENDING: ', action);
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case Types.FETCH_RECIPES_FAILURE: {
            console.log('FETCH_RECIPES_FAILURE: ', action);
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload

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
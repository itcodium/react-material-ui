import Types from './Types'
import { combineReducers } from 'redux'

const initialState = {
    recipes: [],
    ingredients: []
}

const recipesReducer = (recipes, action) => {
    switch (action.type) {
        case Types.RECIPES_ADD:
            return recipes.concat({
                name: action.payload.name,
                description: action.payload.description
            });
        default: {
            return recipes;
        }
    }
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.PENDING: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case Types.SUCCESS: {
            return Object.assign({}, state, {
                recipes: action.payload.recipes
            });
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
                recipes: recipesReducer(state.recipes, action)
            });
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    db: reducer
});

export default rootReducer;
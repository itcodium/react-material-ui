
import Types from './Types'
export const addRecipe = (name) => ({
    type: Types.ADD_RECIPE,
    name
});

export const setRecipes = (data) => ({
    type: Types.FETCH_RECIPES_SUCCEESS,
    payload: data
});

export const fetchRecipes = () => ({
    type: Types.API,
    payload: {
        url: './static/data/db.json',
        pending: 'FETCH_RECIPES_PENDING',
        success: 'FETCH_RECIPES_SUCCEESS',
        error: 'FETCH_RECIPES_FAILURE'
    }
});

const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});
export const LOGIN = asyncActionType('LOGIN');
export const FETCH_RECIPES = asyncActionType('FETCH_RECIPES');
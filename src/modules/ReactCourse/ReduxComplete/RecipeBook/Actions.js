
import Types from './Types'
export const addRecipe = (name) => ({
    type: Types.ADD_RECIPE,
    name
});

export const setRecipes = (data) => ({
    type: Types.SET_RECIPES,
    payload: data
});

export const fetchRecipes = () => ({
    type: Types.FETCH_RECIPES
});
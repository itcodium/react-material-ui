import Types from '../Types';

const get = () => ({
    type: Types.API,
    payload: {
        url: './static/data/recipes.json',
        pending: Types.PENDING,
        success: Types.SUCCESS,
        error: Types.ERROR
    }
})

const add = (payload) => ({
    type: Types.RECIPES_ADD,
    payload: payload
})

const recipes = {
    add: add,
    get: get
};
export default recipes;


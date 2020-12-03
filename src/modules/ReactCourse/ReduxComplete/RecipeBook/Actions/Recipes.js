import Types from '../Types';

const get = () => ({
    type: Types.RECIPES_FETCH,
    payload: {}
})

const add = (payload) => ({
    type: Types.RECIPES_ADD,
    payload: payload
})

const recipes = {
    add: add,
    get: get,
};
export default recipes;


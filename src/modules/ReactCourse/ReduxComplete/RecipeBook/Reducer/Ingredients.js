import INGREDIENTS from '../Types/Ingredients'

const initialState = {
    ingredients: []
}

const recipesReducer = (ingredients, action) => {

    switch (action.type) {
        case INGREDIENTS.ADD:
            return ingredients.concat({
                name: action.payload.name,
                quantity: action.payload.quantity
            });
        default: {
            return ingredients;
        }
    }
};

function reducer(state = initialState, action) {

    switch (action.type) {
        case INGREDIENTS.FETCH: {
            return Object.assign({}, state, {
                loading: true,
                error: false,
            });
        }
        case INGREDIENTS.SUCCESS: {
            return Object.assign({}, state, {
                ingredients: action.payload.ingredients,
                error: false,
                loading: false,
            });
        }
        case INGREDIENTS.ERROR: {
            return Object.assign({}, state, {
                error: true,
                loading: false,
                payload: action.payload

            });
        }
        case INGREDIENTS.ADD: {
            return Object.assign({}, state, {
                ingredients: recipesReducer(state.ingredients, action)
            });
        }
        default: {
            return state;
        }
    }
}

export default reducer;

import { call, put, takeEvery } from 'redux-saga/effects'
import RECIPES from '../Types/Recipes';

// https://github.com/baluragala/redux-saga-examples

const apiUrl = `./static/data/recipes.json`;
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchRecipes() {
    try {
        const data = yield call(getApi);
        yield put({ type: RECIPES.SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: RECIPES.ERROR, message: e.message });
    }
}

function* saga() {
    yield takeEvery(RECIPES.FETCH, fetchRecipes);
}

export default saga;